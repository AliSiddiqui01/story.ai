import { Request, Response, NextFunction } from 'express';
import { validateCOPPACompliance, isSubjectToCOPPA } from '@ai-storyteller/shared';
import setupLogging from '../config/logging';

// Extend Request interface to include custom properties
interface AuthenticatedRequest extends Request {
  user?: any;
  coppaCompliance?: any;
}

const createChildLogger = (child: string) => setupLogging(`coppa-middleware:${child}`);

/**
 * COPPA compliance middleware
 * Ensures all requests comply with children's privacy regulations
 */
export function coppaMiddleware(req: Request, res: Response, next: NextFunction): void {
  // Add COPPA-compliant headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('X-XSS-Protection', '1; mode=block');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  
  // Remove server information
  res.removeHeader('X-Powered-By');
  
  // Add privacy-focused headers
  res.setHeader('Permissions-Policy', 
    'geolocation=(), microphone=(), camera=(), payment=(), usb=()'
  );
  
  next();
}

/**
 * Middleware to validate user age and COPPA compliance
 */
export function validateUserAge(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const user = req.user;
  
  if (!user) {
    res.status(401).json({
      success: false,
      error: 'Authentication required'
    });
    return;
  }
  
  // Validate COPPA compliance
  const coppaCompliance = validateCOPPACompliance(user);
  
  if (coppaCompliance.isSubjectToCOPPA && !coppaCompliance.parentalConsentGiven) {
    createChildLogger('coppa-compliance').warn('Parental consent required:', {
      userId: user.id,
      age: user.age,
      ip: req.ip
    });
    
    res.status(403).json({
      error: 'Parental consent required for users under 13',
      coppaCompliance
    });
    return;
  }
  
  // Check if user is within allowed age range (6-12)
  if (!(user.age >= 6 && user.age <= 12)) {
    // Log age validation failure for monitoring
    createChildLogger('age-validation').warn('User age validation failed', {
      userId: user.id,
      age: user.age,
      ip: req.ip
    });
    
    res.status(403).json({
      success: false,
      error: 'Age not within allowed range for this service'
    });
    return;
  }
  
  // Add COPPA compliance info to request
  req.coppaCompliance = coppaCompliance;
  
  next();
}

/**
 * Middleware to validate user age and COPPA compliance
 */
export function validateUserAgeNew(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const user = req.user;
  
  if (!user) {
    res.status(401).json({
      success: false,
      error: 'Authentication required'
    });
    return;
  }
  
  // Check if user is within allowed age range (6-12)
  const coppaCompliance = validateCOPPACompliance(user);
  
  if (!(user.age >= 6 && user.age <= 12)) {
    // Log age validation failure for monitoring
    createChildLogger('age-validation').warn('User age validation failed', {
      userId: user.id,
      birthDate: user.birthDate,
      ip: req.ip
    });
    
    res.status(403).json({
      success: false,
      error: 'Age not within allowed range for this service'
    });
    return;
  }
  
  // Validate COPPA compliance
  if (user.coppaCompliance && user.coppaCompliance.isSubjectToCOPPA && !user.coppaCompliance.parentalConsentGiven) {
    res.status(403).json({
      error: 'Parental consent required',
      requiresConsent: true
    });
    return;
  }
  
  const isAgeAppropriate = user.age >= 13 || (user.coppaCompliance && user.coppaCompliance.parentalConsentGiven);
  
  if (!isAgeAppropriate) {
    res.status(403).json({
      success: false,
      error: 'Age not within allowed range for this service'
    });
    return;
  }
  
  // Add COPPA compliance info to request
  req.coppaCompliance = coppaCompliance;
  next();
}

/**
 * Middleware to check for specific parental permissions for sensitive operations
 */
export function checkParentalPermissions(operation: 'voice-recording' | 'drawing-upload') {
  return (req: AuthenticatedRequest, res: Response, next: NextFunction): Response | void => {
    const user = req.user;
    const coppaCompliance = req.coppaCompliance;
    
    if (!user || !coppaCompliance) {
      res.status(401).json({
        success: false,
        error: 'Authentication and age validation required'
      });
      return;
    }
    
    // If user is under 13, check for specific parental permissions
    if (user.coppaCompliance && user.coppaCompliance.isSubjectToCOPPA) {
      if (!user.coppaCompliance.parentalConsentGiven) {
        return res.status(403).json({
          error: 'Parental consent required',
          requiresConsent: true
        });
      }
      
      createChildLogger('parental-permissions').info('Checking parental permissions', {
        userId: user.id,
        operation
      });
      
      const parentalSettings = user.parentalSettings;
      
      if (!parentalSettings) {
        res.status(403).json({
          success: false,
          error: 'Parental settings not configured'
        });
        return;
      }
      
      // Check specific permissions
      if (operation === 'voice-recording' && !parentalSettings.voiceRecordingEnabled) {
        res.status(403).json({
          success: false,
          error: 'Voice recording not permitted by parent'
        });
        return;
      }
      
      if (operation === 'drawing-upload' && !parentalSettings.drawingEnabled) {
        res.status(403).json({
          success: false,
          error: 'Drawing upload not permitted by parent'
        });
        return;
      }
    }
    
    next();
  };
}

/**
 * Middleware to sanitize request data for COPPA compliance
 */
export function sanitizeRequestData(req: Request, res: Response, next: NextFunction): void {
  // Remove any prohibited fields from request body
  const prohibitedFields = [
    'realName',
    'fullName',
    'address',
    'phoneNumber',
    'schoolName',
    'location',
    'geolocation',
    'socialSecurityNumber',
    'creditCard'
  ];
  
  if (req.body && typeof req.body === 'object') {
    prohibitedFields.forEach(field => {
      if (req.body[field]) {
        createChildLogger('prohibited-fields').warn('Prohibited field removed from request:', {
          field,
          ip: req.ip,
          userAgent: req.get('User-Agent')
        });
        delete req.body[field];
      }
    });
  }
  
  next();
}

/**
 * Middleware to log data access for COPPA compliance auditing
 */
export function auditDataAccess(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const user = req.user;
  
  // Log data access for children under 13
  if (user && isSubjectToCOPPA(user.age)) {
    createChildLogger('data-access').info('Child data access:', {
      userId: user.id,
      method: req.method,
      path: req.path,
      ip: req.ip,
      timestamp: new Date().toISOString()
    });
  }
  
  next();
}

/**
 * Middleware to require parental permissions for sensitive operations
 */
export function requireParentalPermission(req: AuthenticatedRequest, res: Response, next: NextFunction): void {
  const user = req.user;
  const coppaCompliance = req.coppaCompliance;
  
  if (!user || !coppaCompliance) {
    res.status(401).json({
      success: false,
      error: 'Authentication and age validation required'
    });
    return;
  }
  
  // If user is under 13, check for specific parental permissions
  if (user.coppaCompliance && user.coppaCompliance.isSubjectToCOPPA) {
    const sensitiveOperations = [
      'voice-recording',
      'drawing-upload',
      'profile-update',
      'data-export'
    ];
    
    const operation = req.headers['x-operation-type'] as string;
    
    if (sensitiveOperations.includes(operation)) {
      // Check if parent has enabled this feature
      const parentalSettings = user.parentalSettings;
      
      if (!parentalSettings) {
        res.status(403).json({
          success: false,
          error: 'Parental settings not configured'
        });
        return;
      }
      
      // Check specific permissions
      if (operation === 'voice-recording' && !parentalSettings.voiceRecordingEnabled) {
        res.status(403).json({
          success: false,
          error: 'Voice recording not permitted by parent'
        });
        return;
      }
      
      if (operation === 'drawing-upload' && !parentalSettings.drawingEnabled) {
        res.status(403).json({
          success: false,
          error: 'Drawing upload not permitted by parent'
        });
        return;
      }
    }
  }
  
  next();
}

import { Request, Response, NextFunction } from 'express';
import setupLogging from '../config/logging';

const logger = setupLogging('errorHandler');

/**
 * Global error handler middleware
 * COPPA-compliant error handling (no sensitive data exposure)
 */
export function errorHandler(
  error: any,
  req: Request,
  res: Response,
  next: NextFunction
): void {
  // Log error (sanitized for COPPA compliance)
  logger.error('Request error:', {
    method: req.method,
    url: req.url,
    userAgent: req.get('User-Agent'),
    ip: req.ip,
    error: {
      message: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }
  });

  // Default error response
  let statusCode = 500;
  let message = 'Internal server error';

  // Handle specific error types
  if (error.name === 'ValidationError') {
    statusCode = 400;
    message = 'Invalid input data';
  } else if (error.name === 'UnauthorizedError' || error.name === 'JsonWebTokenError') {
    statusCode = 401;
    message = 'Unauthorized access';
  } else if (error.name === 'ForbiddenError') {
    statusCode = 403;
    message = 'Access forbidden';
  } else if (error.name === 'NotFoundError') {
    statusCode = 404;
    message = 'Resource not found';
  } else if (error.name === 'ConflictError') {
    statusCode = 409;
    message = 'Resource conflict';
  } else if (error.code === 11000) {
    // MongoDB duplicate key error
    statusCode = 409;
    message = 'Resource already exists';
  } else if (error.name === 'CastError') {
    statusCode = 400;
    message = 'Invalid resource ID';
  }

  // Send error response (kid-friendly for frontend)
  res.status(statusCode).json({
    success: false,
    error: message,
    ...(process.env.NODE_ENV === 'development' && {
      details: error.message,
      stack: error.stack
    })
  });
}

/**
 * 404 Not Found handler
 */
export function notFoundHandler(req: Request, res: Response): void {
  logger.warn('404 Not Found:', {
    method: req.method,
    url: req.url,
    ip: req.ip
  });

  res.status(404).json({
    success: false,
    error: 'Endpoint not found'
  });
}

/**
 * Async error wrapper for route handlers
 */
export function asyncHandler(fn: Function) {
  return (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

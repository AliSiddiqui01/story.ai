import { COPPACompliance, DataRetentionPolicy, User } from '../types/shared';

/**
 * COPPA (Children's Online Privacy Protection Act) compliance utilities
 * Ensures proper handling of children's data for users under 13
 */

export const COPPA_AGE_THRESHOLD = 13;

/**
 * Determines if a user is subject to COPPA regulations
 */
export function isSubjectToCOPPA(age: number): boolean {
  return age < COPPA_AGE_THRESHOLD;
}

/**
 * Checks if parental consent is required for a user
 */
export function requiresParentalConsent(user: User): boolean {
  return isSubjectToCOPPA(user.age) && !user.parentEmail;
}

/**
 * Validates COPPA compliance for a user
 */
export function validateCOPPACompliance(user: User): COPPACompliance {
  const isUserSubjectToCOPPA = isSubjectToCOPPA(user.age);
  const parentalConsentGiven = isUserSubjectToCOPPA ? !!user.parentEmail : true;
  
  // Default data retention policy
  const dataRetentionPolicy: DataRetentionPolicy = {
    retentionPeriodDays: isUserSubjectToCOPPA ? 365 : 1825, // 1 year for children, 5 years for adults
    autoDeleteEnabled: true,
    nextCleanupDate: new Date(Date.now() + (isUserSubjectToCOPPA ? 365 : 1825) * 24 * 60 * 60 * 1000)
  };
  
  return {
    isSubjectToCOPPA: isUserSubjectToCOPPA,
    parentalConsentGiven,
    parentalConsentDate: parentalConsentGiven ? new Date() : undefined,
    dataRetentionPolicy,
    privacyNoticeAccepted: true,
    privacyNoticeDate: new Date()
  };
}

/**
 * Gets appropriate data retention policy based on user age
 */
export function getDataRetentionPolicy(user: User): DataRetentionPolicy {
  const isUserSubjectToCOPPA = isSubjectToCOPPA(user.age);
  return {
    retentionPeriodDays: isUserSubjectToCOPPA ? 365 : 1825,
    autoDeleteEnabled: true,
    nextCleanupDate: new Date(Date.now() + (isUserSubjectToCOPPA ? 365 : 1825) * 24 * 60 * 60 * 1000)
  };
}

/**
 * Sanitizes user data for COPPA compliance
 * Removes or masks sensitive information for children under 13
 */
export function sanitizeUserDataForCOPPA(user: User): Partial<User> {
  const isUserSubjectToCOPPA = isSubjectToCOPPA(user.age);
  
  if (!isUserSubjectToCOPPA) {
    // For users 13 and over, return all data
    return user;
  }
  
  // For children under 13, remove sensitive information
  const sanitizedUser: Partial<User> = {
    id: user.id,
    username: user.username,
    age: user.age,
    coppaCompliance: user.coppaCompliance,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
    // Note: We're intentionally omitting parentEmail, preferences, and other sensitive data
  };
  
  return sanitizedUser;
}

/**
 * Validates that collected data is minimal and necessary for children
 */
export function validateDataMinimization(userData: any): boolean {
  const prohibitedFields = [
    'realName',
    'fullName',
    'address',
    'phoneNumber',
    'schoolName',
    'location',
    'geolocation'
  ];
  
  return !prohibitedFields.some(field => userData.hasOwnProperty(field));
}

/**
 * Generates COPPA-compliant privacy notice text
 */
export function generatePrivacyNotice(): string {
  return `
    Privacy Notice for Children Under 13:
    
    We take your child's privacy seriously. This app is designed to be safe and educational.
    
    What we collect:
    - A username (display name only)
    - Age for appropriate content
    - Story progress and preferences
    - Drawings and voice recordings (with parental permission)
    
    What we DON'T collect:
    - Real names
    - Addresses or location
    - Contact information (except parent email)
    - Any unnecessary personal information
    
    Data is automatically deleted according to our retention policy.
    Parents can request data deletion at any time.
  `;
}

/**
 * Checks if data should be automatically deleted based on retention policy
 */
export function shouldDeleteData(
  createdAt: Date,
  retentionDays: number
): boolean {
  const now = new Date();
  const retentionPeriod = retentionDays * 24 * 60 * 60 * 1000; // Convert to milliseconds
  const dataAge = now.getTime() - createdAt.getTime();
  
  return dataAge > retentionPeriod;
}

/**
 * Validates parental email format and domain
 */
export function validateParentalEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
  // Basic email validation
  if (!emailRegex.test(email)) {
    return false;
  }
  
  // Exclude common children's email domains
  const childEmailDomains = [
    'kidsemail.com',
    'kidzui.com',
    'jumpstart.com'
  ];
  
  const domain = email.split('@')[1].toLowerCase();
  return !childEmailDomains.includes(domain);
}

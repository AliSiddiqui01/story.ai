"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.COPPA_AGE_THRESHOLD = void 0;
exports.isSubjectToCOPPA = isSubjectToCOPPA;
exports.requiresParentalConsent = requiresParentalConsent;
exports.validateCOPPACompliance = validateCOPPACompliance;
exports.getDataRetentionPolicy = getDataRetentionPolicy;
exports.sanitizeUserDataForCOPPA = sanitizeUserDataForCOPPA;
exports.validateDataMinimization = validateDataMinimization;
exports.generatePrivacyNotice = generatePrivacyNotice;
exports.shouldDeleteData = shouldDeleteData;
exports.validateParentalEmail = validateParentalEmail;
/**
 * COPPA (Children's Online Privacy Protection Act) compliance utilities
 * Ensures proper handling of children's data for users under 13
 */
exports.COPPA_AGE_THRESHOLD = 13;
/**
 * Determines if a user is subject to COPPA regulations
 */
function isSubjectToCOPPA(age) {
    return age < exports.COPPA_AGE_THRESHOLD;
}
/**
 * Checks if parental consent is required for a user
 */
function requiresParentalConsent(user) {
    return isSubjectToCOPPA(user.age) && !user.parentEmail;
}
/**
 * Validates COPPA compliance for a user
 */
function validateCOPPACompliance(user) {
    const isUserSubjectToCOPPA = isSubjectToCOPPA(user.age);
    const parentalConsentGiven = isUserSubjectToCOPPA ? !!user.parentEmail : true;
    // Default data retention policy
    const dataRetentionPolicy = {
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
function getDataRetentionPolicy(user) {
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
function sanitizeUserDataForCOPPA(user) {
    const isUserSubjectToCOPPA = isSubjectToCOPPA(user.age);
    if (!isUserSubjectToCOPPA) {
        // For users 13 and over, return all data
        return user;
    }
    // For children under 13, remove sensitive information
    const sanitizedUser = {
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
function validateDataMinimization(userData) {
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
function generatePrivacyNotice() {
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
function shouldDeleteData(createdAt, retentionDays) {
    const now = new Date();
    const retentionPeriod = retentionDays * 24 * 60 * 60 * 1000; // Convert to milliseconds
    const dataAge = now.getTime() - createdAt.getTime();
    return dataAge > retentionPeriod;
}
/**
 * Validates parental email format and domain
 */
function validateParentalEmail(email) {
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

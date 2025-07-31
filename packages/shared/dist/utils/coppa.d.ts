import { COPPACompliance, DataRetentionPolicy, User } from '../types/shared';
/**
 * COPPA (Children's Online Privacy Protection Act) compliance utilities
 * Ensures proper handling of children's data for users under 13
 */
export declare const COPPA_AGE_THRESHOLD = 13;
/**
 * Determines if a user is subject to COPPA regulations
 */
export declare function isSubjectToCOPPA(age: number): boolean;
/**
 * Checks if parental consent is required for a user
 */
export declare function requiresParentalConsent(user: User): boolean;
/**
 * Validates COPPA compliance for a user
 */
export declare function validateCOPPACompliance(user: User): COPPACompliance;
/**
 * Gets appropriate data retention policy based on user age
 */
export declare function getDataRetentionPolicy(user: User): DataRetentionPolicy;
/**
 * Sanitizes user data for COPPA compliance
 * Removes or masks sensitive information for children under 13
 */
export declare function sanitizeUserDataForCOPPA(user: User): Partial<User>;
/**
 * Validates that collected data is minimal and necessary for children
 */
export declare function validateDataMinimization(userData: any): boolean;
/**
 * Generates COPPA-compliant privacy notice text
 */
export declare function generatePrivacyNotice(): string;
/**
 * Checks if data should be automatically deleted based on retention policy
 */
export declare function shouldDeleteData(createdAt: Date, retentionDays: number): boolean;
/**
 * Validates parental email format and domain
 */
export declare function validateParentalEmail(email: string): boolean;

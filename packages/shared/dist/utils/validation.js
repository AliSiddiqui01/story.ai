"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRegistrationSchema = exports.ParentalEmailSchema = exports.PasswordSchema = exports.EmailSchema = exports.paginationSchema = exports.parentalSettingsSchema = exports.voiceRecordingSchema = exports.drawingSchema = exports.storyChoiceSchema = exports.storyChapterSchema = exports.storySchema = exports.userPreferencesSchema = exports.userSchema = void 0;
exports.validateChildFriendlyUsername = validateChildFriendlyUsername;
exports.validateFileSize = validateFileSize;
exports.sanitizeTextContent = sanitizeTextContent;
const zod_1 = require("zod");
const shared_1 = require("../types/shared");
const coppa_1 = require("./coppa");
/**
 * Validation schemas for AI Storyteller data
 * Ensures data integrity and COPPA compliance
 */
// User validation schemas
exports.userSchema = zod_1.z.object({
    username: zod_1.z.string()
        .min(3, 'Username must be at least 3 characters')
        .max(20, 'Username must be less than 20 characters')
        .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
    age: zod_1.z.number()
        .min(6, 'Must be at least 6 years old')
        .max(12, 'Must be 12 years old or younger'),
    parentEmail: zod_1.z.string()
        .email('Invalid email format')
        .optional()
        .superRefine((email, ctx) => {
        const age = ctx.parent?.age;
        if (age && age < 13 && !email) {
            ctx.addIssue({
                code: zod_1.z.ZodIssueCode.custom,
                message: 'Parent email is required for children under 13'
            });
        }
    })
});
exports.userPreferencesSchema = zod_1.z.object({
    favoriteThemes: zod_1.z.array(zod_1.z.nativeEnum(shared_1.StoryTheme)).max(5, 'Maximum 5 favorite themes'),
    difficultyLevel: zod_1.z.nativeEnum(shared_1.DifficultyLevel),
    voiceEnabled: zod_1.z.boolean(),
    drawingEnabled: zod_1.z.boolean(),
    parentalControlsEnabled: zod_1.z.boolean()
});
// Story validation schemas
exports.storySchema = zod_1.z.object({
    title: zod_1.z.string()
        .min(3, 'Title must be at least 3 characters')
        .max(100, 'Title must be less than 100 characters'),
    description: zod_1.z.string()
        .min(10, 'Description must be at least 10 characters')
        .max(500, 'Description must be less than 500 characters'),
    theme: zod_1.z.nativeEnum(shared_1.StoryTheme),
    difficulty: zod_1.z.nativeEnum(shared_1.DifficultyLevel),
    estimatedDuration: zod_1.z.number()
        .min(1, 'Duration must be at least 1 minute')
        .max(60, 'Duration cannot exceed 60 minutes'),
    ageRange: zod_1.z.nativeEnum(shared_1.AgeRange)
});
exports.storyChapterSchema = zod_1.z.object({
    title: zod_1.z.string()
        .min(3, 'Chapter title must be at least 3 characters')
        .max(100, 'Chapter title must be less than 100 characters'),
    content: zod_1.z.string()
        .min(50, 'Chapter content must be at least 50 characters')
        .max(2000, 'Chapter content must be less than 2000 characters'),
    illustrations: zod_1.z.array(zod_1.z.string().url()).optional(),
    voiceNarration: zod_1.z.string().url().optional()
});
exports.storyChoiceSchema = zod_1.z.object({
    text: zod_1.z.string()
        .min(5, 'Choice text must be at least 5 characters')
        .max(200, 'Choice text must be less than 200 characters'),
    nextChapterId: zod_1.z.string().uuid('Invalid chapter ID'),
    moralWeight: zod_1.z.number()
        .min(-10, 'Moral weight must be between -10 and 10')
        .max(10, 'Moral weight must be between -10 and 10')
});
// Drawing validation
exports.drawingSchema = zod_1.z.object({
    imageData: zod_1.z.string()
        .refine((data) => {
        // Check if it's a valid base64 image
        const base64Regex = /^data:image\/(png|jpeg|jpg|gif);base64,/;
        return base64Regex.test(data);
    }, 'Invalid image data format'),
    prompt: zod_1.z.string()
        .min(5, 'Drawing prompt must be at least 5 characters')
        .max(200, 'Drawing prompt must be less than 200 characters')
});
// Voice recording validation
exports.voiceRecordingSchema = zod_1.z.object({
    audioData: zod_1.z.string()
        .refine((data) => {
        // Check if it's a valid base64 audio
        const base64Regex = /^data:audio\/(wav|mp3|ogg);base64,/;
        return base64Regex.test(data);
    }, 'Invalid audio data format'),
    transcription: zod_1.z.string().optional(),
    prompt: zod_1.z.string()
        .min(5, 'Voice prompt must be at least 5 characters')
        .max(200, 'Voice prompt must be less than 200 characters')
});
// Parental settings validation
exports.parentalSettingsSchema = zod_1.z.object({
    maxDailyUsage: zod_1.z.number()
        .min(15, 'Minimum daily usage is 15 minutes')
        .max(180, 'Maximum daily usage is 180 minutes'),
    allowedThemes: zod_1.z.array(zod_1.z.nativeEnum(shared_1.StoryTheme))
        .min(1, 'At least one theme must be allowed'),
    voiceRecordingEnabled: zod_1.z.boolean(),
    drawingEnabled: zod_1.z.boolean(),
    dataRetentionDays: zod_1.z.number()
        .min(7, 'Minimum retention is 7 days')
        .max(365, 'Maximum retention is 365 days'),
    shareProgressWithEducators: zod_1.z.boolean()
});
// API validation helpers
exports.paginationSchema = zod_1.z.object({
    page: zod_1.z.number().min(1, 'Page must be at least 1').default(1),
    limit: zod_1.z.number().min(1, 'Limit must be at least 1').max(100, 'Limit cannot exceed 100').default(20)
});
/**
 * Validates if a username is appropriate for children
 */
function validateChildFriendlyUsername(username) {
    // Check for inappropriate words (basic list)
    const inappropriateWords = [
        'admin', 'moderator', 'staff', 'official',
        // Add more as needed
    ];
    const lowerUsername = username.toLowerCase();
    return !inappropriateWords.some(word => lowerUsername.includes(word));
}
/**
 * Validates file size for uploads (drawings, voice recordings)
 */
function validateFileSize(base64Data, maxSizeMB) {
    // Calculate size of base64 string (approximate)
    const sizeInBytes = (base64Data.length * 3) / 4;
    const sizeInMB = sizeInBytes / (1024 * 1024);
    return sizeInMB <= maxSizeMB;
}
/**
 * Sanitizes text content for child safety
 */
function sanitizeTextContent(content) {
    // Remove potentially harmful content
    return content
        .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
        .replace(/<[^>]*>/g, '') // Remove HTML tags
        .trim();
}
// Basic email validation
exports.EmailSchema = zod_1.z.string().email({
    message: 'Invalid email address. Please enter a valid email.',
});
// Password validation: at least 8 characters, one uppercase, one lowercase, one number
exports.PasswordSchema = zod_1.z.string().min(8, {
    message: 'Password must be at least 8 characters long.',
}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/, 'Password must contain at least one uppercase letter, one lowercase letter, and one number.');
// Parental email validation (custom refinement)
exports.ParentalEmailSchema = zod_1.z.string().email().refine((email) => {
    // For now, we just validate the format. In a real app, you might check for disposable email domains.
    return validateParentalEmail(email);
}, {
    message: 'A valid parental email is required for consent.',
});
// Function to be used in the refinement
function validateParentalEmail(email) {
    if (!email)
        return false;
    return exports.EmailSchema.safeParse(email).success;
}
// User registration schema with conditional validation for parental email
const baseUserRegistrationSchema = zod_1.z.object({
    email: exports.EmailSchema,
    password: exports.PasswordSchema,
    birthDate: zod_1.z.string().refine((birthDate) => {
        const now = new Date();
        const userBirthDate = new Date(birthDate);
        const age = now.getFullYear() - userBirthDate.getFullYear();
        if (isNaN(age) || age < 6 || age > 12) {
            return false;
        }
        return true;
    }, {
        message: 'Invalid date format. Please use YYYY-MM-DD.',
    }),
    parentalEmail: zod_1.z.string().email().optional(),
});
exports.UserRegistrationSchema = baseUserRegistrationSchema.refine((data) => {
    // Calculate age from birthDate string
    const birthDate = new Date(data.birthDate);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    // Adjust age if birthday hasn't occurred yet this year
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    if ((0, coppa_1.isSubjectToCOPPA)(age)) {
        // If subject to COPPA, parentalEmail must be a valid email string
        return typeof data.parentalEmail === 'string' && data.parentalEmail.length > 0;
    }
    return true;
}, {
    message: 'Parental email is required for children under 13',
    path: ['parentalEmail']
});

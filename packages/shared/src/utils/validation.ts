import { z } from 'zod';
import { StoryTheme, DifficultyLevel, MoralCategory, AgeRange } from '../types/shared';
import { isSubjectToCOPPA } from './coppa';

/**
 * Validation schemas for AI Storyteller data
 * Ensures data integrity and COPPA compliance
 */

// User validation schemas
export const userSchema = z.object({
  username: z.string()
    .min(3, 'Username must be at least 3 characters')
    .max(20, 'Username must be less than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username can only contain letters, numbers, and underscores'),
  age: z.number()
    .min(6, 'Must be at least 6 years old')
    .max(12, 'Must be 12 years old or younger'),
  parentEmail: z.string()
    .email('Invalid email format')
    .optional()
    .superRefine((email, ctx) => {
      const age = (ctx as any).parent?.age;
      if (age && age < 13 && !email) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: 'Parent email is required for children under 13'
        });
      }
    })
});

export const userPreferencesSchema = z.object({
  favoriteThemes: z.array(z.nativeEnum(StoryTheme)).max(5, 'Maximum 5 favorite themes'),
  difficultyLevel: z.nativeEnum(DifficultyLevel),
  voiceEnabled: z.boolean(),
  drawingEnabled: z.boolean(),
  parentalControlsEnabled: z.boolean()
});

// Story validation schemas
export const storySchema = z.object({
  title: z.string()
    .min(3, 'Title must be at least 3 characters')
    .max(100, 'Title must be less than 100 characters'),
  description: z.string()
    .min(10, 'Description must be at least 10 characters')
    .max(500, 'Description must be less than 500 characters'),
  theme: z.nativeEnum(StoryTheme),
  difficulty: z.nativeEnum(DifficultyLevel),
  estimatedDuration: z.number()
    .min(1, 'Duration must be at least 1 minute')
    .max(60, 'Duration cannot exceed 60 minutes'),
  ageRange: z.nativeEnum(AgeRange)
});

export const storyChapterSchema = z.object({
  title: z.string()
    .min(3, 'Chapter title must be at least 3 characters')
    .max(100, 'Chapter title must be less than 100 characters'),
  content: z.string()
    .min(50, 'Chapter content must be at least 50 characters')
    .max(2000, 'Chapter content must be less than 2000 characters'),
  illustrations: z.array(z.string().url()).optional(),
  voiceNarration: z.string().url().optional()
});

export const storyChoiceSchema = z.object({
  text: z.string()
    .min(5, 'Choice text must be at least 5 characters')
    .max(200, 'Choice text must be less than 200 characters'),
  nextChapterId: z.string().uuid('Invalid chapter ID'),
  moralWeight: z.number()
    .min(-10, 'Moral weight must be between -10 and 10')
    .max(10, 'Moral weight must be between -10 and 10')
});

// Drawing validation
export const drawingSchema = z.object({
  imageData: z.string()
    .refine((data) => {
      // Check if it's a valid base64 image
      const base64Regex = /^data:image\/(png|jpeg|jpg|gif);base64,/;
      return base64Regex.test(data);
    }, 'Invalid image data format'),
  prompt: z.string()
    .min(5, 'Drawing prompt must be at least 5 characters')
    .max(200, 'Drawing prompt must be less than 200 characters')
});

// Voice recording validation
export const voiceRecordingSchema = z.object({
  audioData: z.string()
    .refine((data) => {
      // Check if it's a valid base64 audio
      const base64Regex = /^data:audio\/(wav|mp3|ogg);base64,/;
      return base64Regex.test(data);
    }, 'Invalid audio data format'),
  transcription: z.string().optional(),
  prompt: z.string()
    .min(5, 'Voice prompt must be at least 5 characters')
    .max(200, 'Voice prompt must be less than 200 characters')
});

// Parental settings validation
export const parentalSettingsSchema = z.object({
  maxDailyUsage: z.number()
    .min(15, 'Minimum daily usage is 15 minutes')
    .max(180, 'Maximum daily usage is 180 minutes'),
  allowedThemes: z.array(z.nativeEnum(StoryTheme))
    .min(1, 'At least one theme must be allowed'),
  voiceRecordingEnabled: z.boolean(),
  drawingEnabled: z.boolean(),
  dataRetentionDays: z.number()
    .min(7, 'Minimum retention is 7 days')
    .max(365, 'Maximum retention is 365 days'),
  shareProgressWithEducators: z.boolean()
});

// API validation helpers
export const paginationSchema = z.object({
  page: z.number().min(1, 'Page must be at least 1').default(1),
  limit: z.number().min(1, 'Limit must be at least 1').max(100, 'Limit cannot exceed 100').default(20)
});

/**
 * Validates if a username is appropriate for children
 */
export function validateChildFriendlyUsername(username: string): boolean {
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
export function validateFileSize(base64Data: string, maxSizeMB: number): boolean {
  // Calculate size of base64 string (approximate)
  const sizeInBytes = (base64Data.length * 3) / 4;
  const sizeInMB = sizeInBytes / (1024 * 1024);
  return sizeInMB <= maxSizeMB;
}

/**
 * Sanitizes text content for child safety
 */
export function sanitizeTextContent(content: string): string {
  // Remove potentially harmful content
  return content
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '') // Remove scripts
    .replace(/<[^>]*>/g, '') // Remove HTML tags
    .trim();
}

// Basic email validation
export const EmailSchema = z.string().email({
  message: 'Invalid email address. Please enter a valid email.',
});

// Password validation: at least 8 characters, one uppercase, one lowercase, one number
export const PasswordSchema = z.string().min(8, {
  message: 'Password must be at least 8 characters long.',
}).regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/,
  'Password must contain at least one uppercase letter, one lowercase letter, and one number.');

// Parental email validation (custom refinement)
export const ParentalEmailSchema = z.string().email().refine((email: string) => {
  // For now, we just validate the format. In a real app, you might check for disposable email domains.
  return validateParentalEmail(email);
}, {
  message: 'A valid parental email is required for consent.',
});

// Function to be used in the refinement
function validateParentalEmail(email: string): boolean {
  if (!email) return false;
  return EmailSchema.safeParse(email).success;
}

// User registration schema with conditional validation for parental email
const baseUserRegistrationSchema = z.object({
  email: EmailSchema,
  password: PasswordSchema,
  birthDate: z.string().refine((birthDate) => {
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
  parentalEmail: z.string().email().optional(),
});

export const UserRegistrationSchema = baseUserRegistrationSchema.refine((data: z.infer<typeof baseUserRegistrationSchema>) => {
  // Calculate age from birthDate string
  const birthDate = new Date(data.birthDate);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  
  // Adjust age if birthday hasn't occurred yet this year
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  
  if (isSubjectToCOPPA(age)) {
    // If subject to COPPA, parentalEmail must be a valid email string
    return typeof data.parentalEmail === 'string' && data.parentalEmail.length > 0;
  }
  return true;
}, {
  message: 'Parental email is required for children under 13',
  path: ['parentalEmail']
});

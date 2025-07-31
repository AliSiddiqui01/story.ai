import { z } from 'zod';
import { StoryTheme, DifficultyLevel, AgeRange } from '../types/shared';
/**
 * Validation schemas for AI Storyteller data
 * Ensures data integrity and COPPA compliance
 */
export declare const userSchema: z.ZodObject<{
    username: z.ZodString;
    age: z.ZodNumber;
    parentEmail: z.ZodEffects<z.ZodOptional<z.ZodString>, string | undefined, string | undefined>;
}, "strip", z.ZodTypeAny, {
    username: string;
    age: number;
    parentEmail?: string | undefined;
}, {
    username: string;
    age: number;
    parentEmail?: string | undefined;
}>;
export declare const userPreferencesSchema: z.ZodObject<{
    favoriteThemes: z.ZodArray<z.ZodNativeEnum<typeof StoryTheme>, "many">;
    difficultyLevel: z.ZodNativeEnum<typeof DifficultyLevel>;
    voiceEnabled: z.ZodBoolean;
    drawingEnabled: z.ZodBoolean;
    parentalControlsEnabled: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    favoriteThemes: StoryTheme[];
    difficultyLevel: DifficultyLevel;
    voiceEnabled: boolean;
    drawingEnabled: boolean;
    parentalControlsEnabled: boolean;
}, {
    favoriteThemes: StoryTheme[];
    difficultyLevel: DifficultyLevel;
    voiceEnabled: boolean;
    drawingEnabled: boolean;
    parentalControlsEnabled: boolean;
}>;
export declare const storySchema: z.ZodObject<{
    title: z.ZodString;
    description: z.ZodString;
    theme: z.ZodNativeEnum<typeof StoryTheme>;
    difficulty: z.ZodNativeEnum<typeof DifficultyLevel>;
    estimatedDuration: z.ZodNumber;
    ageRange: z.ZodNativeEnum<typeof AgeRange>;
}, "strip", z.ZodTypeAny, {
    title: string;
    description: string;
    theme: StoryTheme;
    difficulty: DifficultyLevel;
    estimatedDuration: number;
    ageRange: AgeRange;
}, {
    title: string;
    description: string;
    theme: StoryTheme;
    difficulty: DifficultyLevel;
    estimatedDuration: number;
    ageRange: AgeRange;
}>;
export declare const storyChapterSchema: z.ZodObject<{
    title: z.ZodString;
    content: z.ZodString;
    illustrations: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    voiceNarration: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    title: string;
    content: string;
    illustrations?: string[] | undefined;
    voiceNarration?: string | undefined;
}, {
    title: string;
    content: string;
    illustrations?: string[] | undefined;
    voiceNarration?: string | undefined;
}>;
export declare const storyChoiceSchema: z.ZodObject<{
    text: z.ZodString;
    nextChapterId: z.ZodString;
    moralWeight: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    text: string;
    nextChapterId: string;
    moralWeight: number;
}, {
    text: string;
    nextChapterId: string;
    moralWeight: number;
}>;
export declare const drawingSchema: z.ZodObject<{
    imageData: z.ZodEffects<z.ZodString, string, string>;
    prompt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    imageData: string;
    prompt: string;
}, {
    imageData: string;
    prompt: string;
}>;
export declare const voiceRecordingSchema: z.ZodObject<{
    audioData: z.ZodEffects<z.ZodString, string, string>;
    transcription: z.ZodOptional<z.ZodString>;
    prompt: z.ZodString;
}, "strip", z.ZodTypeAny, {
    prompt: string;
    audioData: string;
    transcription?: string | undefined;
}, {
    prompt: string;
    audioData: string;
    transcription?: string | undefined;
}>;
export declare const parentalSettingsSchema: z.ZodObject<{
    maxDailyUsage: z.ZodNumber;
    allowedThemes: z.ZodArray<z.ZodNativeEnum<typeof StoryTheme>, "many">;
    voiceRecordingEnabled: z.ZodBoolean;
    drawingEnabled: z.ZodBoolean;
    dataRetentionDays: z.ZodNumber;
    shareProgressWithEducators: z.ZodBoolean;
}, "strip", z.ZodTypeAny, {
    drawingEnabled: boolean;
    maxDailyUsage: number;
    allowedThemes: StoryTheme[];
    voiceRecordingEnabled: boolean;
    dataRetentionDays: number;
    shareProgressWithEducators: boolean;
}, {
    drawingEnabled: boolean;
    maxDailyUsage: number;
    allowedThemes: StoryTheme[];
    voiceRecordingEnabled: boolean;
    dataRetentionDays: number;
    shareProgressWithEducators: boolean;
}>;
export declare const paginationSchema: z.ZodObject<{
    page: z.ZodDefault<z.ZodNumber>;
    limit: z.ZodDefault<z.ZodNumber>;
}, "strip", z.ZodTypeAny, {
    page: number;
    limit: number;
}, {
    page?: number | undefined;
    limit?: number | undefined;
}>;
/**
 * Validates if a username is appropriate for children
 */
export declare function validateChildFriendlyUsername(username: string): boolean;
/**
 * Validates file size for uploads (drawings, voice recordings)
 */
export declare function validateFileSize(base64Data: string, maxSizeMB: number): boolean;
/**
 * Sanitizes text content for child safety
 */
export declare function sanitizeTextContent(content: string): string;
export declare const EmailSchema: z.ZodString;
export declare const PasswordSchema: z.ZodString;
export declare const ParentalEmailSchema: z.ZodEffects<z.ZodString, string, string>;
export declare const UserRegistrationSchema: z.ZodEffects<z.ZodObject<{
    email: z.ZodString;
    password: z.ZodString;
    birthDate: z.ZodEffects<z.ZodString, string, string>;
    parentalEmail: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    email: string;
    password: string;
    birthDate: string;
    parentalEmail?: string | undefined;
}, {
    email: string;
    password: string;
    birthDate: string;
    parentalEmail?: string | undefined;
}>, {
    email: string;
    password: string;
    birthDate: string;
    parentalEmail?: string | undefined;
}, {
    email: string;
    password: string;
    birthDate: string;
    parentalEmail?: string | undefined;
}>;

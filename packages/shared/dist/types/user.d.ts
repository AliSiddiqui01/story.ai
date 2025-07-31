/**
 * User-related TypeScript interfaces for AI Storyteller
 * COPPA-compliant user profiles and preferences
 */
import { ReadingLevel, MoralCategory, AgeRange, StoryTheme, ContentFilterLevel } from './shared';
export interface UserProfile {
    id: string;
    username: string;
    age: number;
    ageRange: AgeRange;
    interests: UserInterest[];
    readingLevel: ReadingLevel;
    preferences: UserPreferences;
    progressStats: ProgressStats;
    safetySettings: SafetySettings;
    createdAt: Date;
    updatedAt: Date;
    lastActiveAt: Date;
}
export interface UserInterest {
    id: string;
    category: InterestCategory;
    name: string;
    weight: number;
    discoveredAt: Date;
    parentApproved: boolean;
}
export interface UserPreferences {
    favoriteThemes: StoryTheme[];
    preferredIllustrationStyle: IllustrationStyle[];
    voiceNarrationEnabled: boolean;
    backgroundMusicEnabled: boolean;
    animationsEnabled: boolean;
    autoAdvanceEnabled: boolean;
    fontSize: FontSize;
    colorTheme: ColorTheme;
    languagePreference: string;
}
export interface ProgressStats {
    storiesStarted: number;
    storiesCompleted: number;
    totalReadingTime: number;
    favoriteGenres: StoryTheme[];
    moralLessonsLearned: MoralCategory[];
    currentStreak: number;
    longestStreak: number;
    achievements: Achievement[];
    lastStoryId?: string;
    lastNodeId?: string;
}
export interface Achievement {
    id: string;
    name: string;
    description: string;
    icon: string;
    unlockedAt: Date;
    category: AchievementCategory;
    points: number;
}
export interface SafetySettings {
    contentFilterLevel: ContentFilterLevel;
    allowVoiceRecording: boolean;
    allowDrawing: boolean;
    allowSharing: boolean;
    reportInappropriateContent: boolean;
    emergencyContactEnabled: boolean;
}
export declare enum InterestCategory {
    ANIMALS = "animals",
    ADVENTURE = "adventure",
    SCIENCE = "science",
    FANTASY = "fantasy",
    SPORTS = "sports",
    MUSIC = "music",
    ART = "art",
    COOKING = "cooking",
    NATURE = "nature",
    SPACE = "space",
    HISTORY = "history",
    MYSTERY = "mystery"
}
export declare enum IllustrationStyle {
    CARTOON = "cartoon",
    REALISTIC = "realistic",
    SKETCH = "sketch",
    WATERCOLOR = "watercolor",
    DIGITAL = "digital",
    HAND_DRAWN = "hand_drawn"
}
export declare enum FontSize {
    SMALL = "small",
    MEDIUM = "medium",
    LARGE = "large",
    EXTRA_LARGE = "extra_large"
}
export declare enum ColorTheme {
    BRIGHT = "bright",
    PASTEL = "pastel",
    DARK = "dark",
    HIGH_CONTRAST = "high_contrast",
    RAINBOW = "rainbow"
}
export declare enum AchievementCategory {
    READING = "reading",
    CREATIVITY = "creativity",
    MORAL_LEARNING = "moral_learning",
    EXPLORATION = "exploration",
    CONSISTENCY = "consistency",
    SOCIAL = "social"
}

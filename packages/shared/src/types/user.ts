/**
 * User-related TypeScript interfaces for AI Storyteller
 * COPPA-compliant user profiles and preferences
 */

import { ReadingLevel, MoralCategory, AgeRange, StoryTheme, ContentFilterLevel } from './shared';

export interface UserProfile {
  id: string;
  username: string; // Display name only, no real names per COPPA
  age: number; // Age verification for COPPA compliance
  ageRange: AgeRange; // Derived from age for content filtering
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
  weight: number; // 1-10, how much the child likes this
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
  languagePreference: string; // ISO language code
}

export interface ProgressStats {
  storiesStarted: number;
  storiesCompleted: number;
  totalReadingTime: number; // in minutes
  favoriteGenres: StoryTheme[];
  moralLessonsLearned: MoralCategory[];
  currentStreak: number; // consecutive days of reading
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
  allowSharing: boolean; // Share stories with friends/family
  reportInappropriateContent: boolean;
  emergencyContactEnabled: boolean;
}

// User-related enums
export enum InterestCategory {
  ANIMALS = 'animals',
  ADVENTURE = 'adventure',
  SCIENCE = 'science',
  FANTASY = 'fantasy',
  SPORTS = 'sports',
  MUSIC = 'music',
  ART = 'art',
  COOKING = 'cooking',
  NATURE = 'nature',
  SPACE = 'space',
  HISTORY = 'history',
  MYSTERY = 'mystery'
}

export enum IllustrationStyle {
  CARTOON = 'cartoon',
  REALISTIC = 'realistic',
  SKETCH = 'sketch',
  WATERCOLOR = 'watercolor',
  DIGITAL = 'digital',
  HAND_DRAWN = 'hand_drawn'
}

export enum FontSize {
  SMALL = 'small',
  MEDIUM = 'medium',
  LARGE = 'large',
  EXTRA_LARGE = 'extra_large'
}

export enum ColorTheme {
  BRIGHT = 'bright',
  PASTEL = 'pastel',
  DARK = 'dark',
  HIGH_CONTRAST = 'high_contrast',
  RAINBOW = 'rainbow'
}

export enum AchievementCategory {
  READING = 'reading',
  CREATIVITY = 'creativity',
  MORAL_LEARNING = 'moral_learning',
  EXPLORATION = 'exploration',
  CONSISTENCY = 'consistency',
  SOCIAL = 'social'
}

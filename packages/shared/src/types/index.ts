// COPPA-compliant types for AI Storyteller

// Export all story-related types
export * from './story';

// Export all user-related types
export * from './user';

// Export all parental-related types
export * from './parental';

// Export shared types to resolve circular dependencies
export * from './shared';

// Enums
export enum StoryTheme {
  ADVENTURE = 'adventure',
  FRIENDSHIP = 'friendship',
  FAMILY = 'family',
  NATURE = 'nature',
  SCIENCE = 'science',
  FANTASY = 'fantasy',
  MYSTERY = 'mystery',
  ANIMALS = 'animals'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',     // Ages 6-7
  INTERMEDIATE = 'intermediate', // Ages 8-10
  ADVANCED = 'advanced'      // Ages 11-12
}

export enum MoralCategory {
  HONESTY = 'honesty',
  KINDNESS = 'kindness',
  COURAGE = 'courage',
  RESPONSIBILITY = 'responsibility',
  RESPECT = 'respect',
  PERSEVERANCE = 'perseverance',
  EMPATHY = 'empathy',
  FAIRNESS = 'fairness'
}

export enum AgeRange {
  EARLY_ELEMENTARY = '6-7',
  LATE_ELEMENTARY = '8-10',
  MIDDLE_SCHOOL = '11-12'
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  limit: number;
  hasNext: boolean;
  hasPrev: boolean;
}

// COPPA compliance utilities
export interface COPPACompliance {
  isUnder13: boolean;
  parentalConsentRequired: boolean;
  dataMinimizationApplied: boolean;
  retentionPolicyApplied: boolean;
}

export interface DataRetentionPolicy {
  userDataRetentionDays: number;
  voiceDataRetentionDays: number;
  drawingDataRetentionDays: number;
  automaticDeletionEnabled: boolean;
}

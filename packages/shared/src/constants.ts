/**
 * Application constants for AI Storyteller
 * COPPA-compliant settings and limits
 */

// COPPA Compliance Constants
export const COPPA_AGE_THRESHOLD = 13;
export const MIN_USER_AGE = 6;
export const MAX_USER_AGE = 12;

// Data Retention (COPPA compliant)
export const DATA_RETENTION = {
  USER_DATA_DAYS: 30,           // For children under 13
  USER_DATA_DAYS_TEEN: 365,     // For users 13+
  VOICE_DATA_DAYS: 7,           // Very short retention for voice
  DRAWING_DATA_DAYS: 14,        // Short retention for drawings
  SESSION_DATA_HOURS: 24,       // Session data cleanup
} as const;

// File Upload Limits
export const UPLOAD_LIMITS = {
  DRAWING_MAX_SIZE_MB: 5,       // 5MB max for drawings
  VOICE_MAX_SIZE_MB: 10,        // 10MB max for voice recordings
  VOICE_MAX_DURATION_SECONDS: 60, // 1 minute max recording
} as const;

// Story Content Limits
export const STORY_LIMITS = {
  TITLE_MIN_LENGTH: 3,
  TITLE_MAX_LENGTH: 100,
  DESCRIPTION_MIN_LENGTH: 10,
  DESCRIPTION_MAX_LENGTH: 500,
  CHAPTER_CONTENT_MIN_LENGTH: 50,
  CHAPTER_CONTENT_MAX_LENGTH: 2000,
  CHOICE_TEXT_MIN_LENGTH: 5,
  CHOICE_TEXT_MAX_LENGTH: 200,
  MAX_CHAPTERS_PER_STORY: 20,
  MAX_CHOICES_PER_CHAPTER: 4,
} as const;

// User Limits
export const USER_LIMITS = {
  USERNAME_MIN_LENGTH: 3,
  USERNAME_MAX_LENGTH: 20,
  MAX_FAVORITE_THEMES: 5,
  MAX_DAILY_USAGE_MINUTES: 180,  // 3 hours max per day
  MIN_DAILY_USAGE_MINUTES: 15,   // 15 minutes minimum setting
} as const;

// API Rate Limits
export const RATE_LIMITS = {
  REQUESTS_PER_WINDOW: 100,      // Requests per window
  WINDOW_DURATION_MINUTES: 15,   // Rate limit window
  AI_REQUESTS_PER_HOUR: 20,      // AI story generation limits
} as const;

// Security Settings
export const SECURITY = {
  JWT_EXPIRES_IN: '24h',
  BCRYPT_SALT_ROUNDS: 12,
  SESSION_TIMEOUT_MINUTES: 60,
} as const;

// Default User Preferences
export const DEFAULT_PREFERENCES = {
  difficultyLevel: 'beginner',
  voiceEnabled: true,
  drawingEnabled: true,
  parentalControlsEnabled: true,
  favoriteThemes: ['friendship', 'adventure'],
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  AUTH: '/api/auth',
  USERS: '/api/users',
  STORIES: '/api/stories',
  PARENT: '/api/parent',
  AI: '/api/ai',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  COPPA_VIOLATION: 'This action requires parental consent for users under 13',
  INVALID_AGE: 'Age must be between 6 and 12 years old',
  PARENTAL_CONSENT_REQUIRED: 'Parental email is required for children under 13',
  INAPPROPRIATE_CONTENT: 'Content is not appropriate for children',
  FILE_TOO_LARGE: 'File size exceeds the allowed limit',
  DAILY_LIMIT_EXCEEDED: 'Daily usage limit has been reached',
  UNAUTHORIZED: 'You are not authorized to perform this action',
} as const;

// Success Messages
export const SUCCESS_MESSAGES = {
  ACCOUNT_CREATED: 'Welcome to AI Storyteller! 🎉',
  STORY_COMPLETED: 'Great job completing the story! 🌟',
  DRAWING_SAVED: 'Your amazing artwork has been saved! 🎨',
  VOICE_RECORDED: 'Your voice has been recorded successfully! 🎤',
  PROGRESS_SAVED: 'Your progress has been saved! 💾',
} as const;

// Theme Colors (for UI consistency)
export const THEME_COLORS = {
  PRIMARY_PINK: '#FF6B9D',
  PRIMARY_BLUE: '#4ECDC4',
  PRIMARY_YELLOW: '#FFE66D',
  PRIMARY_ORANGE: '#FF8C42',
  PRIMARY_PURPLE: '#A8E6CF',
  PRIMARY_GREEN: '#88D8B0',
  SOFT_WHITE: '#FEFEFE',
  WARM_GRAY: '#F7F7F7',
  TEXT_DARK: '#2C3E50',
  TEXT_LIGHT: '#34495E',
} as const;

// Accessibility Settings
export const ACCESSIBILITY = {
  MIN_FONT_SIZE: 14,
  MAX_FONT_SIZE: 24,
  HIGH_CONTRAST_RATIO: 4.5,
  ANIMATION_DURATION_MS: 300,
  FOCUS_OUTLINE_WIDTH: 3,
} as const;

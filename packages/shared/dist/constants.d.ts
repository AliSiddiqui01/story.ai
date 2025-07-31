/**
 * Application constants for AI Storyteller
 * COPPA-compliant settings and limits
 */
export declare const COPPA_AGE_THRESHOLD = 13;
export declare const MIN_USER_AGE = 6;
export declare const MAX_USER_AGE = 12;
export declare const DATA_RETENTION: {
    readonly USER_DATA_DAYS: 30;
    readonly USER_DATA_DAYS_TEEN: 365;
    readonly VOICE_DATA_DAYS: 7;
    readonly DRAWING_DATA_DAYS: 14;
    readonly SESSION_DATA_HOURS: 24;
};
export declare const UPLOAD_LIMITS: {
    readonly DRAWING_MAX_SIZE_MB: 5;
    readonly VOICE_MAX_SIZE_MB: 10;
    readonly VOICE_MAX_DURATION_SECONDS: 60;
};
export declare const STORY_LIMITS: {
    readonly TITLE_MIN_LENGTH: 3;
    readonly TITLE_MAX_LENGTH: 100;
    readonly DESCRIPTION_MIN_LENGTH: 10;
    readonly DESCRIPTION_MAX_LENGTH: 500;
    readonly CHAPTER_CONTENT_MIN_LENGTH: 50;
    readonly CHAPTER_CONTENT_MAX_LENGTH: 2000;
    readonly CHOICE_TEXT_MIN_LENGTH: 5;
    readonly CHOICE_TEXT_MAX_LENGTH: 200;
    readonly MAX_CHAPTERS_PER_STORY: 20;
    readonly MAX_CHOICES_PER_CHAPTER: 4;
};
export declare const USER_LIMITS: {
    readonly USERNAME_MIN_LENGTH: 3;
    readonly USERNAME_MAX_LENGTH: 20;
    readonly MAX_FAVORITE_THEMES: 5;
    readonly MAX_DAILY_USAGE_MINUTES: 180;
    readonly MIN_DAILY_USAGE_MINUTES: 15;
};
export declare const RATE_LIMITS: {
    readonly REQUESTS_PER_WINDOW: 100;
    readonly WINDOW_DURATION_MINUTES: 15;
    readonly AI_REQUESTS_PER_HOUR: 20;
};
export declare const SECURITY: {
    readonly JWT_EXPIRES_IN: "24h";
    readonly BCRYPT_SALT_ROUNDS: 12;
    readonly SESSION_TIMEOUT_MINUTES: 60;
};
export declare const DEFAULT_PREFERENCES: {
    readonly difficultyLevel: "beginner";
    readonly voiceEnabled: true;
    readonly drawingEnabled: true;
    readonly parentalControlsEnabled: true;
    readonly favoriteThemes: readonly ["friendship", "adventure"];
};
export declare const API_ENDPOINTS: {
    readonly AUTH: "/api/auth";
    readonly USERS: "/api/users";
    readonly STORIES: "/api/stories";
    readonly PARENT: "/api/parent";
    readonly AI: "/api/ai";
};
export declare const ERROR_MESSAGES: {
    readonly COPPA_VIOLATION: "This action requires parental consent for users under 13";
    readonly INVALID_AGE: "Age must be between 6 and 12 years old";
    readonly PARENTAL_CONSENT_REQUIRED: "Parental email is required for children under 13";
    readonly INAPPROPRIATE_CONTENT: "Content is not appropriate for children";
    readonly FILE_TOO_LARGE: "File size exceeds the allowed limit";
    readonly DAILY_LIMIT_EXCEEDED: "Daily usage limit has been reached";
    readonly UNAUTHORIZED: "You are not authorized to perform this action";
};
export declare const SUCCESS_MESSAGES: {
    readonly ACCOUNT_CREATED: "Welcome to AI Storyteller! 🎉";
    readonly STORY_COMPLETED: "Great job completing the story! 🌟";
    readonly DRAWING_SAVED: "Your amazing artwork has been saved! 🎨";
    readonly VOICE_RECORDED: "Your voice has been recorded successfully! 🎤";
    readonly PROGRESS_SAVED: "Your progress has been saved! 💾";
};
export declare const THEME_COLORS: {
    readonly PRIMARY_PINK: "#FF6B9D";
    readonly PRIMARY_BLUE: "#4ECDC4";
    readonly PRIMARY_YELLOW: "#FFE66D";
    readonly PRIMARY_ORANGE: "#FF8C42";
    readonly PRIMARY_PURPLE: "#A8E6CF";
    readonly PRIMARY_GREEN: "#88D8B0";
    readonly SOFT_WHITE: "#FEFEFE";
    readonly WARM_GRAY: "#F7F7F7";
    readonly TEXT_DARK: "#2C3E50";
    readonly TEXT_LIGHT: "#34495E";
};
export declare const ACCESSIBILITY: {
    readonly MIN_FONT_SIZE: 14;
    readonly MAX_FONT_SIZE: 24;
    readonly HIGH_CONTRAST_RATIO: 4.5;
    readonly ANIMATION_DURATION_MS: 300;
    readonly FOCUS_OUTLINE_WIDTH: 3;
};

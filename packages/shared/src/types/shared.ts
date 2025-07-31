// Shared types to resolve circular dependencies

// Enums that are used in multiple files
export enum ContentFilterLevel {
  NONE = 'none',
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  STRICT = 'strict'
}

export enum DifficultyLevel {
  BEGINNER = 'beginner',     // Ages 6-7
  INTERMEDIATE = 'intermediate', // Ages 8-10
  ADVANCED = 'advanced'      // Ages 11-12
}

export enum DayOfWeek {
  MONDAY = 'monday',
  TUESDAY = 'tuesday',
  WEDNESDAY = 'wednesday',
  THURSDAY = 'thursday',
  FRIDAY = 'friday',
  SATURDAY = 'saturday',
  SUNDAY = 'sunday'
}

export enum ReportFrequency {
  DAILY = 'daily',
  WEEKLY = 'weekly',
  MONTHLY = 'monthly',
  NEVER = 'never'
}

export enum AlertType {
  INAPPROPRIATE_CONTENT = 'inappropriate_content',
  TIME_LIMIT_EXCEEDED = 'time_limit_exceeded',
  SAFETY_CONCERN = 'safety_concern',
  TECHNICAL_ISSUE = 'technical_issue'
}

export enum AlertSeverity {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  CRITICAL = 'critical'
}

export enum RecommendationType {
  STORY = 'story',
  ACTIVITY = 'activity',
  SETTING_CHANGE = 'setting_change',
  PARENTAL_GUIDANCE = 'parental_guidance'
}

export enum Priority {
  LOW = 'low',
  MEDIUM = 'medium',
  HIGH = 'high',
  URGENT = 'urgent'
}

// COPPA Compliance types
export interface COPPACompliance {
  isSubjectToCOPPA: boolean;
  parentalConsentGiven: boolean;
  parentalConsentDate?: Date;
  dataRetentionPolicy: DataRetentionPolicy;
  privacyNoticeAccepted: boolean;
  privacyNoticeDate: Date;
}

export interface DataRetentionPolicy {
  retentionPeriodDays: number;
  autoDeleteEnabled: boolean;
  lastCleanupDate?: Date;
  nextCleanupDate: Date;
}

export interface User {
  id: string;
  username: string;
  age: number;
  parentEmail?: string;
  preferences?: any;
  lastActiveAt?: Date;
  coppaCompliance: COPPACompliance;
  createdAt: Date;
  updatedAt: Date;
}

// Re-export enums from story.ts to avoid circular dependencies
export { MoralCategory, StoryTheme, ReadingLevel, AgeRange, StoryComplexity } from './story';

// Re-export enums from user.ts that are needed in other modules
export { 
  InterestCategory,
  IllustrationStyle,
  FontSize,
  ColorTheme,
  AchievementCategory
} from './user';

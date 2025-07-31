export declare enum ContentFilterLevel {
    NONE = "none",
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    STRICT = "strict"
}
export declare enum DifficultyLevel {
    BEGINNER = "beginner",// Ages 6-7
    INTERMEDIATE = "intermediate",// Ages 8-10
    ADVANCED = "advanced"
}
export declare enum DayOfWeek {
    MONDAY = "monday",
    TUESDAY = "tuesday",
    WEDNESDAY = "wednesday",
    THURSDAY = "thursday",
    FRIDAY = "friday",
    SATURDAY = "saturday",
    SUNDAY = "sunday"
}
export declare enum ReportFrequency {
    DAILY = "daily",
    WEEKLY = "weekly",
    MONTHLY = "monthly",
    NEVER = "never"
}
export declare enum AlertType {
    INAPPROPRIATE_CONTENT = "inappropriate_content",
    TIME_LIMIT_EXCEEDED = "time_limit_exceeded",
    SAFETY_CONCERN = "safety_concern",
    TECHNICAL_ISSUE = "technical_issue"
}
export declare enum AlertSeverity {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    CRITICAL = "critical"
}
export declare enum RecommendationType {
    STORY = "story",
    ACTIVITY = "activity",
    SETTING_CHANGE = "setting_change",
    PARENTAL_GUIDANCE = "parental_guidance"
}
export declare enum Priority {
    LOW = "low",
    MEDIUM = "medium",
    HIGH = "high",
    URGENT = "urgent"
}
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
export { MoralCategory, StoryTheme, ReadingLevel, AgeRange, StoryComplexity } from './story';
export { InterestCategory, IllustrationStyle, FontSize, ColorTheme, AchievementCategory } from './user';

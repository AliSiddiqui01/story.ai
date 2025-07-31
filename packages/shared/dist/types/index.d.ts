export * from './story';
export * from './user';
export * from './parental';
export * from './shared';
export declare enum StoryTheme {
    ADVENTURE = "adventure",
    FRIENDSHIP = "friendship",
    FAMILY = "family",
    NATURE = "nature",
    SCIENCE = "science",
    FANTASY = "fantasy",
    MYSTERY = "mystery",
    ANIMALS = "animals"
}
export declare enum DifficultyLevel {
    BEGINNER = "beginner",// Ages 6-7
    INTERMEDIATE = "intermediate",// Ages 8-10
    ADVANCED = "advanced"
}
export declare enum MoralCategory {
    HONESTY = "honesty",
    KINDNESS = "kindness",
    COURAGE = "courage",
    RESPONSIBILITY = "responsibility",
    RESPECT = "respect",
    PERSEVERANCE = "perseverance",
    EMPATHY = "empathy",
    FAIRNESS = "fairness"
}
export declare enum AgeRange {
    EARLY_ELEMENTARY = "6-7",
    LATE_ELEMENTARY = "8-10",
    MIDDLE_SCHOOL = "11-12"
}
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

/**
 * Parental control TypeScript interfaces for AI Storyteller
 * COPPA-compliant parental dashboard and settings
 */

import { 
  StoryTheme, 
  MoralCategory, 
  ContentFilterLevel, 
  ReadingLevel,
  StoryComplexity,
  DayOfWeek,
  ReportFrequency,
  AlertType,
  AlertSeverity,
  RecommendationType,
  Priority
} from './shared';

// Re-export types that are used in this module and may be needed by consumers
export {
  StoryTheme,
  MoralCategory,
  ContentFilterLevel,
  ReadingLevel,
  StoryComplexity,
  DayOfWeek,
  ReportFrequency,
  AlertType,
  AlertSeverity,
  RecommendationType,
  Priority
} from './shared';

export interface ParentalSettings {
  id: string;
  childId: string;
  parentEmail: string;
  ageFilters: AgeFilter;
  timeLimits: TimeLimit;
  contentRestrictions: ContentRestriction;
  monitoringSettings: MonitoringSettings;
  notificationSettings: NotificationSettings;
  emergencySettings: EmergencySettings;
  dataRetentionSettings: DataRetentionSettings;
  createdAt: Date;
  updatedAt: Date;
  lastReviewedAt: Date;
}

export interface AgeFilter {
  strictAgeVerification: boolean;
  allowedReadingLevels: ReadingLevel[];
  maxStoryComplexity: StoryComplexity;
  allowAdvancedMoralThemes: boolean;
  requireParentalApprovalForNewContent: boolean;
  customAgeOverride?: number; // For special needs or advanced readers
}

export interface TimeLimit {
  dailyLimitMinutes: number;
  weeklyLimitMinutes: number;
  sessionLimitMinutes: number;
  bedtimeRestrictions: BedtimeRestriction;
  schoolDayRestrictions: SchoolDayRestriction;
  breakReminders: BreakReminder;
  enforceTimeouts: boolean;
}

export interface BedtimeRestriction {
  enabled: boolean;
  bedtimeHour: number; // 24-hour format
  bedtimeMinute: number;
  wakeupHour: number;
  wakeupMinute: number;
  timezone: string;
  weekendDifferent: boolean;
  weekendBedtimeHour?: number;
  weekendWakeupHour?: number;
}

export interface SchoolDayRestriction {
  enabled: boolean;
  schoolDays: DayOfWeek[];
  allowedStartTime: string; // HH:MM format
  allowedEndTime: string;
  homeworkPriorityMode: boolean;
}

export interface BreakReminder {
  enabled: boolean;
  intervalMinutes: number;
  reminderMessage: string;
  enforceBreaks: boolean;
  breakDurationMinutes: number;
}

export interface ContentRestriction {
  allowedThemes: StoryTheme[];
  blockedThemes: StoryTheme[];
  allowedMoralCategories: MoralCategory[];
  contentFilterLevel: ContentFilterLevel;
  allowVoiceInteraction: boolean;
  allowDrawingFeatures: boolean;
  allowSocialFeatures: boolean;
  allowAIGeneration: boolean;
  customWordBlacklist: string[];
  requirePreApproval: boolean;
}

export interface MonitoringSettings {
  trackReadingProgress: boolean;
  trackTimeSpent: boolean;
  trackChoicesMade: boolean;
  trackInteractions: boolean;
  generateProgressReports: boolean;
  reportFrequency: ReportFrequency;
  shareWithEducators: boolean;
  educatorEmails: string[];
  alertOnConcerningContent: boolean;
  alertOnExcessiveUse: boolean;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  smsNotifications: boolean;
  phoneNumber?: string;
  dailySummary: boolean;
  weeklySummary: boolean;
  achievementAlerts: boolean;
  safetyAlerts: boolean;
  timeoutWarnings: boolean;
  newContentAlerts: boolean;
  preferredNotificationTime: string; // HH:MM format
}

export interface EmergencySettings {
  emergencyContactEnabled: boolean;
  emergencyContacts: EmergencyContact[];
  panicButtonEnabled: boolean;
  automaticScreenshotOnReport: boolean;
  immediateParentAlert: boolean;
  suspendAccountOnSafetyIssue: boolean;
}

export interface EmergencyContact {
  id: string;
  name: string;
  relationship: string;
  email: string;
  phone?: string;
  isPrimary: boolean;
}

export interface DataRetentionSettings {
  retainVoiceRecordings: boolean;
  voiceRetentionDays: number;
  retainDrawings: boolean;
  drawingRetentionDays: number;
  retainProgressData: boolean;
  progressRetentionDays: number;
  allowDataExport: boolean;
  automaticDeletion: boolean;
  parentCanDeleteAnytime: boolean;
}

// Parental dashboard interfaces
export interface ParentalDashboard {
  childProfile: ChildSummary;
  recentActivity: ActivitySummary[];
  progressOverview: ProgressOverview;
  safetyAlerts: SafetyAlert[];
  recommendations: ParentalRecommendation[];
  upcomingReviews: ReviewReminder[];
}

export interface ChildSummary {
  id: string;
  username: string;
  age: number;
  readingLevel: ReadingLevel;
  totalStoriesRead: number;
  currentStreak: number;
  lastActive: Date;
  overallProgress: number; // percentage
}

export interface ActivitySummary {
  date: Date;
  timeSpentMinutes: number;
  storiesRead: number;
  choicesMade: number;
  moralLessonsEncountered: MoralCategory[];
  concerningContent: boolean;
}

export interface ProgressOverview {
  readingSkillImprovement: number; // percentage
  moralDevelopmentScore: number;
  favoriteThemes: StoryTheme[];
  strugglingAreas: string[];
  achievements: string[];
  recommendedNextSteps: string[];
}

export interface SafetyAlert {
  id: string;
  type: AlertType;
  severity: AlertSeverity;
  message: string;
  timestamp: Date;
  resolved: boolean;
  actionTaken?: string;
}

export interface ParentalRecommendation {
  id: string;
  type: RecommendationType;
  title: string;
  description: string;
  actionRequired: boolean;
  priority: Priority;
  createdAt: Date;
}

export interface ReviewReminder {
  id: string;
  type: 'settings' | 'progress' | 'safety';
  dueDate: Date;
  description: string;
  importance: Priority;
}

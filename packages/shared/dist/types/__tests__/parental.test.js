"use strict";
/**
 * Jest tests for Parental control TypeScript interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
const parental_1 = require("../parental");
const shared_1 = require("../shared");
describe('ParentalSettings Interface', () => {
    const mockParentalSettings = {
        id: 'parental-123',
        childId: 'child-456',
        parentEmail: 'parent@example.com',
        ageFilters: {
            strictAgeVerification: true,
            allowedReadingLevels: [shared_1.ReadingLevel.BEGINNER, shared_1.ReadingLevel.ELEMENTARY],
            maxStoryComplexity: parental_1.StoryComplexity.SIMPLE,
            allowAdvancedMoralThemes: false,
            requireParentalApprovalForNewContent: true
        },
        timeLimits: {
            dailyLimitMinutes: 60,
            weeklyLimitMinutes: 300,
            sessionLimitMinutes: 30,
            bedtimeRestrictions: {
                enabled: true,
                bedtimeHour: 20,
                bedtimeMinute: 0,
                wakeupHour: 7,
                wakeupMinute: 0,
                timezone: 'America/New_York',
                weekendDifferent: false
            },
            schoolDayRestrictions: {
                enabled: true,
                schoolDays: [parental_1.DayOfWeek.MONDAY, parental_1.DayOfWeek.TUESDAY, parental_1.DayOfWeek.WEDNESDAY, parental_1.DayOfWeek.THURSDAY, parental_1.DayOfWeek.FRIDAY],
                allowedStartTime: '15:00',
                allowedEndTime: '18:00',
                homeworkPriorityMode: true
            },
            breakReminders: {
                enabled: true,
                intervalMinutes: 20,
                reminderMessage: 'Time for a break!',
                enforceBreaks: false,
                breakDurationMinutes: 5
            },
            enforceTimeouts: true
        },
        contentRestrictions: {
            allowedThemes: [shared_1.StoryTheme.FRIENDSHIP, shared_1.StoryTheme.ANIMALS],
            blockedThemes: [shared_1.StoryTheme.MYSTERY],
            allowedMoralCategories: [shared_1.MoralCategory.KINDNESS, shared_1.MoralCategory.FRIENDSHIP],
            contentFilterLevel: shared_1.ContentFilterLevel.STRICT,
            allowVoiceInteraction: false,
            allowDrawingFeatures: true,
            allowSocialFeatures: false,
            allowAIGeneration: false,
            customWordBlacklist: ['scary', 'frightening'],
            requirePreApproval: true
        },
        monitoringSettings: {
            trackReadingProgress: true,
            trackTimeSpent: true,
            trackChoicesMade: true,
            trackInteractions: false,
            generateProgressReports: true,
            reportFrequency: parental_1.ReportFrequency.WEEKLY,
            shareWithEducators: false,
            educatorEmails: [],
            alertOnConcerningContent: true,
            alertOnExcessiveUse: true
        },
        notificationSettings: {
            emailNotifications: true,
            smsNotifications: false,
            dailySummary: true,
            weeklySummary: true,
            achievementAlerts: true,
            safetyAlerts: true,
            timeoutWarnings: true,
            newContentAlerts: false,
            preferredNotificationTime: '18:00'
        },
        emergencySettings: {
            emergencyContactEnabled: true,
            emergencyContacts: [],
            panicButtonEnabled: true,
            automaticScreenshotOnReport: true,
            immediateParentAlert: true,
            suspendAccountOnSafetyIssue: true
        },
        dataRetentionSettings: {
            retainVoiceRecordings: false,
            voiceRetentionDays: 0,
            retainDrawings: true,
            drawingRetentionDays: 30,
            retainProgressData: true,
            progressRetentionDays: 365,
            allowDataExport: true,
            automaticDeletion: true,
            parentCanDeleteAnytime: true
        },
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01'),
        lastReviewedAt: new Date('2024-01-01')
    };
    test('should create a valid ParentalSettings', () => {
        expect(mockParentalSettings).toBeDefined();
        expect(mockParentalSettings.id).toBe('parental-123');
        expect(mockParentalSettings.childId).toBe('child-456');
        expect(mockParentalSettings.parentEmail).toBe('parent@example.com');
    });
    test('should have valid age filters', () => {
        expect(mockParentalSettings.ageFilters.strictAgeVerification).toBe(true);
        expect(mockParentalSettings.ageFilters.maxStoryComplexity).toBe(parental_1.StoryComplexity.SIMPLE);
        expect(mockParentalSettings.ageFilters.allowedReadingLevels).toContain(shared_1.ReadingLevel.BEGINNER);
    });
    test('should have valid time limits', () => {
        expect(mockParentalSettings.timeLimits.dailyLimitMinutes).toBe(60);
        expect(mockParentalSettings.timeLimits.sessionLimitMinutes).toBe(30);
        expect(mockParentalSettings.timeLimits.enforceTimeouts).toBe(true);
    });
    test('should have valid content restrictions', () => {
        expect(mockParentalSettings.contentRestrictions.contentFilterLevel).toBe(shared_1.ContentFilterLevel.STRICT);
        expect(mockParentalSettings.contentRestrictions.allowedThemes).toContain(shared_1.StoryTheme.FRIENDSHIP);
        expect(mockParentalSettings.contentRestrictions.blockedThemes).toContain(shared_1.StoryTheme.MYSTERY);
    });
});
describe('AgeFilter Interface', () => {
    const mockAgeFilter = {
        strictAgeVerification: true,
        allowedReadingLevels: [shared_1.ReadingLevel.BEGINNER],
        maxStoryComplexity: parental_1.StoryComplexity.SIMPLE,
        allowAdvancedMoralThemes: false,
        requireParentalApprovalForNewContent: true,
        customAgeOverride: 7
    };
    test('should create a valid AgeFilter', () => {
        expect(mockAgeFilter).toBeDefined();
        expect(mockAgeFilter.strictAgeVerification).toBe(true);
        expect(mockAgeFilter.maxStoryComplexity).toBe(parental_1.StoryComplexity.SIMPLE);
        expect(mockAgeFilter.customAgeOverride).toBe(7);
    });
    test('should have optional custom age override', () => {
        const filterWithoutOverride = {
            ...mockAgeFilter,
            customAgeOverride: undefined
        };
        expect(filterWithoutOverride.customAgeOverride).toBeUndefined();
    });
});
describe('TimeLimit Interface', () => {
    const mockTimeLimit = {
        dailyLimitMinutes: 90,
        weeklyLimitMinutes: 420,
        sessionLimitMinutes: 45,
        bedtimeRestrictions: {
            enabled: true,
            bedtimeHour: 21,
            bedtimeMinute: 30,
            wakeupHour: 7,
            wakeupMinute: 0,
            timezone: 'UTC',
            weekendDifferent: true,
            weekendBedtimeHour: 22,
            weekendWakeupHour: 8
        },
        schoolDayRestrictions: {
            enabled: false,
            schoolDays: [],
            allowedStartTime: '16:00',
            allowedEndTime: '19:00',
            homeworkPriorityMode: false
        },
        breakReminders: {
            enabled: true,
            intervalMinutes: 15,
            reminderMessage: 'Take a break!',
            enforceBreaks: true,
            breakDurationMinutes: 10
        },
        enforceTimeouts: false
    };
    test('should create a valid TimeLimit', () => {
        expect(mockTimeLimit).toBeDefined();
        expect(mockTimeLimit.dailyLimitMinutes).toBe(90);
        expect(mockTimeLimit.weeklyLimitMinutes).toBe(420);
        expect(mockTimeLimit.sessionLimitMinutes).toBe(45);
    });
    test('should validate time limit logic', () => {
        expect(mockTimeLimit.sessionLimitMinutes).toBeLessThanOrEqual(mockTimeLimit.dailyLimitMinutes);
        expect(mockTimeLimit.dailyLimitMinutes * 7).toBeGreaterThanOrEqual(mockTimeLimit.weeklyLimitMinutes);
    });
});
describe('BedtimeRestriction Interface', () => {
    const mockBedtimeRestriction = {
        enabled: true,
        bedtimeHour: 20,
        bedtimeMinute: 30,
        wakeupHour: 7,
        wakeupMinute: 0,
        timezone: 'America/New_York',
        weekendDifferent: true,
        weekendBedtimeHour: 21,
        weekendWakeupHour: 8
    };
    test('should create a valid BedtimeRestriction', () => {
        expect(mockBedtimeRestriction).toBeDefined();
        expect(mockBedtimeRestriction.enabled).toBe(true);
        expect(mockBedtimeRestriction.bedtimeHour).toBe(20);
        expect(mockBedtimeRestriction.bedtimeMinute).toBe(30);
    });
    test('should validate hour ranges', () => {
        expect(mockBedtimeRestriction.bedtimeHour).toBeGreaterThanOrEqual(0);
        expect(mockBedtimeRestriction.bedtimeHour).toBeLessThan(24);
        expect(mockBedtimeRestriction.wakeupHour).toBeGreaterThanOrEqual(0);
        expect(mockBedtimeRestriction.wakeupHour).toBeLessThan(24);
    });
    test('should validate minute ranges', () => {
        expect(mockBedtimeRestriction.bedtimeMinute).toBeGreaterThanOrEqual(0);
        expect(mockBedtimeRestriction.bedtimeMinute).toBeLessThan(60);
        expect(mockBedtimeRestriction.wakeupMinute).toBeGreaterThanOrEqual(0);
        expect(mockBedtimeRestriction.wakeupMinute).toBeLessThan(60);
    });
});
describe('EmergencyContact Interface', () => {
    const mockEmergencyContact = {
        id: 'contact-1',
        name: 'Mom',
        relationship: 'Mother',
        email: 'mom@example.com',
        phone: '+1-555-0123',
        isPrimary: true
    };
    test('should create a valid EmergencyContact', () => {
        expect(mockEmergencyContact).toBeDefined();
        expect(mockEmergencyContact.name).toBe('Mom');
        expect(mockEmergencyContact.relationship).toBe('Mother');
        expect(mockEmergencyContact.email).toBe('mom@example.com');
        expect(mockEmergencyContact.isPrimary).toBe(true);
    });
    test('should have optional phone number', () => {
        const contactWithoutPhone = {
            ...mockEmergencyContact,
            phone: undefined
        };
        expect(contactWithoutPhone.phone).toBeUndefined();
    });
});
describe('ParentalDashboard Interface', () => {
    const mockChildSummary = {
        id: 'child-123',
        username: 'little_reader',
        age: 8,
        readingLevel: shared_1.ReadingLevel.ELEMENTARY,
        totalStoriesRead: 15,
        currentStreak: 5,
        lastActive: new Date('2024-01-01'),
        overallProgress: 75
    };
    const mockActivitySummary = {
        date: new Date('2024-01-01'),
        timeSpentMinutes: 45,
        storiesRead: 2,
        choicesMade: 8,
        moralLessonsEncountered: [shared_1.MoralCategory.KINDNESS, shared_1.MoralCategory.FRIENDSHIP],
        concerningContent: false
    };
    const mockParentalDashboard = {
        childProfile: mockChildSummary,
        recentActivity: [mockActivitySummary],
        progressOverview: {
            readingSkillImprovement: 15,
            moralDevelopmentScore: 85,
            favoriteThemes: [shared_1.StoryTheme.ADVENTURE, shared_1.StoryTheme.ANIMALS],
            strugglingAreas: ['complex vocabulary'],
            achievements: ['First Story Completed', 'Reading Streak'],
            recommendedNextSteps: ['Try intermediate level stories']
        },
        safetyAlerts: [],
        recommendations: [],
        upcomingReviews: []
    };
    test('should create a valid ParentalDashboard', () => {
        expect(mockParentalDashboard).toBeDefined();
        expect(mockParentalDashboard.childProfile.username).toBe('little_reader');
        expect(mockParentalDashboard.recentActivity).toHaveLength(1);
        expect(mockParentalDashboard.progressOverview.readingSkillImprovement).toBe(15);
    });
    test('should validate child summary', () => {
        expect(mockChildSummary.age).toBeGreaterThan(0);
        expect(mockChildSummary.overallProgress).toBeGreaterThanOrEqual(0);
        expect(mockChildSummary.overallProgress).toBeLessThanOrEqual(100);
    });
    test('should validate activity summary', () => {
        expect(mockActivitySummary.timeSpentMinutes).toBeGreaterThanOrEqual(0);
        expect(mockActivitySummary.storiesRead).toBeGreaterThanOrEqual(0);
        expect(mockActivitySummary.choicesMade).toBeGreaterThanOrEqual(0);
    });
});
describe('SafetyAlert Interface', () => {
    const mockSafetyAlert = {
        id: 'alert-1',
        type: parental_1.AlertType.SAFETY,
        severity: parental_1.AlertSeverity.MEDIUM,
        message: 'Child reported inappropriate content',
        timestamp: new Date('2024-01-01'),
        resolved: false,
        actionTaken: 'Content reviewed and removed'
    };
    test('should create a valid SafetyAlert', () => {
        expect(mockSafetyAlert).toBeDefined();
        expect(mockSafetyAlert.type).toBe(parental_1.AlertType.SAFETY);
        expect(mockSafetyAlert.severity).toBe(parental_1.AlertSeverity.MEDIUM);
        expect(mockSafetyAlert.resolved).toBe(false);
    });
    test('should have optional action taken', () => {
        const alertWithoutAction = {
            ...mockSafetyAlert,
            actionTaken: undefined
        };
        expect(alertWithoutAction.actionTaken).toBeUndefined();
    });
});
describe('Enum Values', () => {
    test('StoryComplexity enum should have correct values', () => {
        expect(parental_1.StoryComplexity.SIMPLE).toBe('simple');
        expect(parental_1.StoryComplexity.MODERATE).toBe('moderate');
        expect(parental_1.StoryComplexity.COMPLEX).toBe('complex');
        expect(parental_1.StoryComplexity.ADVANCED).toBe('advanced');
    });
    test('DayOfWeek enum should have correct values', () => {
        expect(parental_1.DayOfWeek.MONDAY).toBe('monday');
        expect(parental_1.DayOfWeek.TUESDAY).toBe('tuesday');
        expect(parental_1.DayOfWeek.WEDNESDAY).toBe('wednesday');
        expect(parental_1.DayOfWeek.THURSDAY).toBe('thursday');
        expect(parental_1.DayOfWeek.FRIDAY).toBe('friday');
        expect(parental_1.DayOfWeek.SATURDAY).toBe('saturday');
        expect(parental_1.DayOfWeek.SUNDAY).toBe('sunday');
    });
    test('ReportFrequency enum should have correct values', () => {
        expect(parental_1.ReportFrequency.DAILY).toBe('daily');
        expect(parental_1.ReportFrequency.WEEKLY).toBe('weekly');
        expect(parental_1.ReportFrequency.MONTHLY).toBe('monthly');
        expect(parental_1.ReportFrequency.ON_DEMAND).toBe('on-demand');
    });
    test('AlertType enum should have correct values', () => {
        expect(parental_1.AlertType.SAFETY).toBe('safety');
        expect(parental_1.AlertType.TIME_LIMIT).toBe('time-limit');
        expect(parental_1.AlertType.CONTENT).toBe('content');
        expect(parental_1.AlertType.BEHAVIOR).toBe('behavior');
        expect(parental_1.AlertType.TECHNICAL).toBe('technical');
    });
    test('AlertSeverity enum should have correct values', () => {
        expect(parental_1.AlertSeverity.LOW).toBe('low');
        expect(parental_1.AlertSeverity.MEDIUM).toBe('medium');
        expect(parental_1.AlertSeverity.HIGH).toBe('high');
        expect(parental_1.AlertSeverity.CRITICAL).toBe('critical');
    });
    test('Priority enum should have correct values', () => {
        expect(parental_1.Priority.LOW).toBe('low');
        expect(parental_1.Priority.MEDIUM).toBe('medium');
        expect(parental_1.Priority.HIGH).toBe('high');
        expect(parental_1.Priority.URGENT).toBe('urgent');
    });
});

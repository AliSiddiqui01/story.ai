"use strict";
/**
 * Jest tests for User-related TypeScript interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = require("../user");
const shared_1 = require("../shared");
describe('UserProfile Interface', () => {
    const mockUserProfile = {
        id: 'user-123',
        username: 'brave_reader',
        age: 8,
        ageRange: shared_1.AgeRange.AGES_8_9,
        interests: [],
        readingLevel: shared_1.ReadingLevel.ELEMENTARY,
        preferences: {
            favoriteThemes: [shared_1.StoryTheme.ADVENTURE, shared_1.StoryTheme.ANIMALS],
            preferredIllustrationStyle: [user_1.IllustrationStyle.CARTOON],
            voiceNarrationEnabled: true,
            backgroundMusicEnabled: true,
            animationsEnabled: true,
            autoAdvanceEnabled: false,
            fontSize: user_1.FontSize.MEDIUM,
            colorTheme: user_1.ColorTheme.BRIGHT,
            languagePreference: 'en'
        },
        progressStats: {
            storiesStarted: 5,
            storiesCompleted: 3,
            totalReadingTime: 120,
            favoriteGenres: [shared_1.StoryTheme.ADVENTURE],
            moralLessonsLearned: [shared_1.MoralCategory.COURAGE],
            currentStreak: 3,
            longestStreak: 7,
            achievements: []
        },
        safetySettings: {
            contentFilterLevel: shared_1.ContentFilterLevel.MEDIUM,
            allowVoiceRecording: true,
            allowDrawing: true,
            allowSharing: false,
            reportInappropriateContent: true,
            emergencyContactEnabled: true
        },
        createdAt: new Date(),
        updatedAt: new Date(),
        lastActiveAt: new Date()
    };
    test('should create a valid UserProfile', () => {
        expect(mockUserProfile).toBeDefined();
        expect(mockUserProfile.id).toBe('user-123');
        expect(mockUserProfile.username).toBe('brave_reader');
        expect(mockUserProfile.age).toBe(8);
        expect(mockUserProfile.ageRange).toBe(shared_1.AgeRange.AGES_8_9);
        expect(mockUserProfile.readingLevel).toBe(shared_1.ReadingLevel.ELEMENTARY);
    });
    test('should have valid preferences', () => {
        expect(mockUserProfile.preferences.favoriteThemes).toContain(shared_1.StoryTheme.ADVENTURE);
        expect(mockUserProfile.preferences.voiceNarrationEnabled).toBe(true);
        expect(mockUserProfile.preferences.fontSize).toBe(user_1.FontSize.MEDIUM);
    });
    test('should have valid progress stats', () => {
        expect(mockUserProfile.progressStats.storiesStarted).toBe(5);
        expect(mockUserProfile.progressStats.storiesCompleted).toBe(3);
        expect(mockUserProfile.progressStats.currentStreak).toBe(3);
    });
    test('should have valid safety settings', () => {
        expect(mockUserProfile.safetySettings.contentFilterLevel).toBe(shared_1.ContentFilterLevel.MEDIUM);
        expect(mockUserProfile.safetySettings.allowVoiceRecording).toBe(true);
        expect(mockUserProfile.safetySettings.emergencyContactEnabled).toBe(true);
    });
});
describe('UserInterest Interface', () => {
    const mockUserInterest = {
        id: 'interest-1',
        category: user_1.InterestCategory.ANIMALS,
        name: 'Dogs and Cats',
        weight: 8,
        discoveredAt: new Date(),
        parentApproved: true
    };
    test('should create a valid UserInterest', () => {
        expect(mockUserInterest).toBeDefined();
        expect(mockUserInterest.category).toBe(user_1.InterestCategory.ANIMALS);
        expect(mockUserInterest.name).toBe('Dogs and Cats');
        expect(mockUserInterest.weight).toBe(8);
        expect(mockUserInterest.parentApproved).toBe(true);
    });
    test('should validate weight range', () => {
        expect(mockUserInterest.weight).toBeGreaterThanOrEqual(1);
        expect(mockUserInterest.weight).toBeLessThanOrEqual(10);
    });
});
describe('UserPreferences Interface', () => {
    const mockPreferences = {
        favoriteThemes: [shared_1.StoryTheme.ADVENTURE, shared_1.StoryTheme.FRIENDSHIP],
        preferredIllustrationStyle: [user_1.IllustrationStyle.CARTOON, user_1.IllustrationStyle.WATERCOLOR],
        voiceNarrationEnabled: true,
        backgroundMusicEnabled: false,
        animationsEnabled: true,
        autoAdvanceEnabled: false,
        fontSize: user_1.FontSize.LARGE,
        colorTheme: user_1.ColorTheme.PASTEL,
        languagePreference: 'en-US'
    };
    test('should create valid UserPreferences', () => {
        expect(mockPreferences).toBeDefined();
        expect(mockPreferences.favoriteThemes).toHaveLength(2);
        expect(mockPreferences.preferredIllustrationStyle).toHaveLength(2);
        expect(mockPreferences.fontSize).toBe(user_1.FontSize.LARGE);
        expect(mockPreferences.colorTheme).toBe(user_1.ColorTheme.PASTEL);
    });
    test('should validate boolean preferences', () => {
        expect(typeof mockPreferences.voiceNarrationEnabled).toBe('boolean');
        expect(typeof mockPreferences.backgroundMusicEnabled).toBe('boolean');
        expect(typeof mockPreferences.animationsEnabled).toBe('boolean');
        expect(typeof mockPreferences.autoAdvanceEnabled).toBe('boolean');
    });
});
describe('ProgressStats Interface', () => {
    const mockProgressStats = {
        storiesStarted: 10,
        storiesCompleted: 7,
        totalReadingTime: 240,
        favoriteGenres: [shared_1.StoryTheme.ADVENTURE, shared_1.StoryTheme.FANTASY],
        moralLessonsLearned: [shared_1.MoralCategory.COURAGE, shared_1.MoralCategory.FRIENDSHIP],
        currentStreak: 5,
        longestStreak: 12,
        achievements: []
    };
    test('should create valid ProgressStats', () => {
        expect(mockProgressStats).toBeDefined();
        expect(mockProgressStats.storiesStarted).toBe(10);
        expect(mockProgressStats.storiesCompleted).toBe(7);
        expect(mockProgressStats.totalReadingTime).toBe(240);
        expect(mockProgressStats.currentStreak).toBe(5);
        expect(mockProgressStats.longestStreak).toBe(12);
    });
    test('should validate completion rate logic', () => {
        const completionRate = mockProgressStats.storiesCompleted / mockProgressStats.storiesStarted;
        expect(completionRate).toBeLessThanOrEqual(1);
        expect(completionRate).toBeGreaterThanOrEqual(0);
    });
});
describe('Achievement Interface', () => {
    const mockAchievement = {
        id: 'achievement-1',
        name: 'First Story Completed',
        description: 'Congratulations on completing your first story!',
        icon: '🏆',
        unlockedAt: new Date(),
        category: user_1.AchievementCategory.READING,
        points: 100
    };
    test('should create a valid Achievement', () => {
        expect(mockAchievement).toBeDefined();
        expect(mockAchievement.name).toBe('First Story Completed');
        expect(mockAchievement.category).toBe(user_1.AchievementCategory.READING);
        expect(mockAchievement.points).toBe(100);
        expect(mockAchievement.icon).toBe('🏆');
    });
    test('should have valid points value', () => {
        expect(mockAchievement.points).toBeGreaterThan(0);
        expect(typeof mockAchievement.points).toBe('number');
    });
});
describe('SafetySettings Interface', () => {
    const mockSafetySettings = {
        contentFilterLevel: shared_1.ContentFilterLevel.MEDIUM,
        allowVoiceRecording: false,
        allowDrawing: true,
        allowSharing: false,
        reportInappropriateContent: true,
        emergencyContactEnabled: true
    };
    test('should create valid SafetySettings', () => {
        expect(mockSafetySettings).toBeDefined();
        expect(mockSafetySettings.contentFilterLevel).toBe(shared_1.ContentFilterLevel.MEDIUM);
        expect(mockSafetySettings.allowVoiceRecording).toBe(false);
        expect(mockSafetySettings.emergencyContactEnabled).toBe(true);
    });
    test('should validate boolean safety flags', () => {
        expect(typeof mockSafetySettings.allowVoiceRecording).toBe('boolean');
        expect(typeof mockSafetySettings.allowDrawing).toBe('boolean');
        expect(typeof mockSafetySettings.allowSharing).toBe('boolean');
        expect(typeof mockSafetySettings.reportInappropriateContent).toBe('boolean');
        expect(typeof mockSafetySettings.emergencyContactEnabled).toBe('boolean');
    });
});
describe('Enum Values', () => {
    test('InterestCategory enum should have correct values', () => {
        expect(user_1.InterestCategory.ANIMALS).toBe('animals');
        expect(user_1.InterestCategory.ADVENTURE).toBe('adventure');
        expect(user_1.InterestCategory.SCIENCE).toBe('science');
        expect(user_1.InterestCategory.FANTASY).toBe('fantasy');
    });
    test('StoryTheme enum should have correct values', () => {
        expect(shared_1.StoryTheme.ADVENTURE).toBe('adventure');
        expect(shared_1.StoryTheme.FRIENDSHIP).toBe('friendship');
        expect(shared_1.StoryTheme.FAMILY).toBe('family');
        expect(shared_1.StoryTheme.ANIMALS).toBe('animals');
    });
    test('IllustrationStyle enum should have correct values', () => {
        expect(user_1.IllustrationStyle.CARTOON).toBe('cartoon');
        expect(user_1.IllustrationStyle.REALISTIC).toBe('realistic');
        expect(user_1.IllustrationStyle.SKETCH).toBe('sketch');
        expect(user_1.IllustrationStyle.WATERCOLOR).toBe('watercolor');
    });
    test('FontSize enum should have correct values', () => {
        expect(user_1.FontSize.SMALL).toBe('small');
        expect(user_1.FontSize.MEDIUM).toBe('medium');
        expect(user_1.FontSize.LARGE).toBe('large');
        expect(user_1.FontSize.EXTRA_LARGE).toBe('extra-large');
    });
    test('ColorTheme enum should have correct values', () => {
        expect(user_1.ColorTheme.BRIGHT).toBe('bright');
        expect(user_1.ColorTheme.PASTEL).toBe('pastel');
        expect(user_1.ColorTheme.DARK).toBe('dark');
        expect(user_1.ColorTheme.HIGH_CONTRAST).toBe('high-contrast');
    });
    test('AchievementCategory enum should have correct values', () => {
        expect(user_1.AchievementCategory.READING).toBe('reading');
        expect(user_1.AchievementCategory.CREATIVITY).toBe('creativity');
        expect(user_1.AchievementCategory.MORAL_LEARNING).toBe('moral_learning');
        expect(user_1.AchievementCategory.EXPLORATION).toBe('exploration');
    });
    test('ContentFilterLevel enum should have correct values', () => {
        expect(shared_1.ContentFilterLevel.NONE).toBe('none');
        expect(shared_1.ContentFilterLevel.LOW).toBe('low');
        expect(shared_1.ContentFilterLevel.MEDIUM).toBe('medium');
        expect(shared_1.ContentFilterLevel.HIGH).toBe('high');
        expect(shared_1.ContentFilterLevel.STRICT).toBe('strict');
    });
});

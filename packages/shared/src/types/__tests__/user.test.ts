/**
 * Jest tests for User-related TypeScript interfaces
 */

import {
  UserProfile,
  UserInterest,
  UserPreferences,
  ProgressStats,
  Achievement,
  SafetySettings,
  InterestCategory,
  IllustrationStyle,
  FontSize,
  ColorTheme,
  AchievementCategory
} from '../user';
import { ReadingLevel, MoralCategory, AgeRange, StoryTheme, ContentFilterLevel } from '../shared';

describe('UserProfile Interface', () => {
  const mockUserProfile: UserProfile = {
    id: 'user-123',
    username: 'brave_reader',
    age: 8,
    ageRange: AgeRange.AGES_8_9,
    interests: [],
    readingLevel: ReadingLevel.ELEMENTARY,
    preferences: {
      favoriteThemes: [StoryTheme.ADVENTURE, StoryTheme.ANIMALS],
      preferredIllustrationStyle: [IllustrationStyle.CARTOON],
      voiceNarrationEnabled: true,
      backgroundMusicEnabled: true,
      animationsEnabled: true,
      autoAdvanceEnabled: false,
      fontSize: FontSize.MEDIUM,
      colorTheme: ColorTheme.BRIGHT,
      languagePreference: 'en'
    },
    progressStats: {
      storiesStarted: 5,
      storiesCompleted: 3,
      totalReadingTime: 120,
      favoriteGenres: [StoryTheme.ADVENTURE],
      moralLessonsLearned: [MoralCategory.COURAGE],
      currentStreak: 3,
      longestStreak: 7,
      achievements: []
    },
    safetySettings: {
      contentFilterLevel: ContentFilterLevel.MEDIUM,
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
    expect(mockUserProfile.ageRange).toBe(AgeRange.AGES_8_9);
    expect(mockUserProfile.readingLevel).toBe(ReadingLevel.ELEMENTARY);
  });

  test('should have valid preferences', () => {
    expect(mockUserProfile.preferences.favoriteThemes).toContain(StoryTheme.ADVENTURE);
    expect(mockUserProfile.preferences.voiceNarrationEnabled).toBe(true);
    expect(mockUserProfile.preferences.fontSize).toBe(FontSize.MEDIUM);
  });

  test('should have valid progress stats', () => {
    expect(mockUserProfile.progressStats.storiesStarted).toBe(5);
    expect(mockUserProfile.progressStats.storiesCompleted).toBe(3);
    expect(mockUserProfile.progressStats.currentStreak).toBe(3);
  });

  test('should have valid safety settings', () => {
    expect(mockUserProfile.safetySettings.contentFilterLevel).toBe(ContentFilterLevel.MEDIUM);
    expect(mockUserProfile.safetySettings.allowVoiceRecording).toBe(true);
    expect(mockUserProfile.safetySettings.emergencyContactEnabled).toBe(true);
  });
});

describe('UserInterest Interface', () => {
  const mockUserInterest: UserInterest = {
    id: 'interest-1',
    category: InterestCategory.ANIMALS,
    name: 'Dogs and Cats',
    weight: 8,
    discoveredAt: new Date(),
    parentApproved: true
  };

  test('should create a valid UserInterest', () => {
    expect(mockUserInterest).toBeDefined();
    expect(mockUserInterest.category).toBe(InterestCategory.ANIMALS);
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
  const mockPreferences: UserPreferences = {
    favoriteThemes: [StoryTheme.ADVENTURE, StoryTheme.FRIENDSHIP],
    preferredIllustrationStyle: [IllustrationStyle.CARTOON, IllustrationStyle.WATERCOLOR],
    voiceNarrationEnabled: true,
    backgroundMusicEnabled: false,
    animationsEnabled: true,
    autoAdvanceEnabled: false,
    fontSize: FontSize.LARGE,
    colorTheme: ColorTheme.PASTEL,
    languagePreference: 'en-US'
  };

  test('should create valid UserPreferences', () => {
    expect(mockPreferences).toBeDefined();
    expect(mockPreferences.favoriteThemes).toHaveLength(2);
    expect(mockPreferences.preferredIllustrationStyle).toHaveLength(2);
    expect(mockPreferences.fontSize).toBe(FontSize.LARGE);
    expect(mockPreferences.colorTheme).toBe(ColorTheme.PASTEL);
  });

  test('should validate boolean preferences', () => {
    expect(typeof mockPreferences.voiceNarrationEnabled).toBe('boolean');
    expect(typeof mockPreferences.backgroundMusicEnabled).toBe('boolean');
    expect(typeof mockPreferences.animationsEnabled).toBe('boolean');
    expect(typeof mockPreferences.autoAdvanceEnabled).toBe('boolean');
  });
});

describe('ProgressStats Interface', () => {
  const mockProgressStats: ProgressStats = {
    storiesStarted: 10,
    storiesCompleted: 7,
    totalReadingTime: 240,
    favoriteGenres: [StoryTheme.ADVENTURE, StoryTheme.FANTASY],
    moralLessonsLearned: [MoralCategory.COURAGE, MoralCategory.FRIENDSHIP],
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
  const mockAchievement: Achievement = {
    id: 'achievement-1',
    name: 'First Story Completed',
    description: 'Congratulations on completing your first story!',
    icon: '🏆',
    unlockedAt: new Date(),
    category: AchievementCategory.READING,
    points: 100
  };

  test('should create a valid Achievement', () => {
    expect(mockAchievement).toBeDefined();
    expect(mockAchievement.name).toBe('First Story Completed');
    expect(mockAchievement.category).toBe(AchievementCategory.READING);
    expect(mockAchievement.points).toBe(100);
    expect(mockAchievement.icon).toBe('🏆');
  });

  test('should have valid points value', () => {
    expect(mockAchievement.points).toBeGreaterThan(0);
    expect(typeof mockAchievement.points).toBe('number');
  });
});

describe('SafetySettings Interface', () => {
  const mockSafetySettings: SafetySettings = {
    contentFilterLevel: ContentFilterLevel.MEDIUM,
    allowVoiceRecording: false,
    allowDrawing: true,
    allowSharing: false,
    reportInappropriateContent: true,
    emergencyContactEnabled: true
  };

  test('should create valid SafetySettings', () => {
    expect(mockSafetySettings).toBeDefined();
    expect(mockSafetySettings.contentFilterLevel).toBe(ContentFilterLevel.MEDIUM);
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
    expect(InterestCategory.ANIMALS).toBe('animals');
    expect(InterestCategory.ADVENTURE).toBe('adventure');
    expect(InterestCategory.SCIENCE).toBe('science');
    expect(InterestCategory.FANTASY).toBe('fantasy');
  });

  test('StoryTheme enum should have correct values', () => {
    expect(StoryTheme.ADVENTURE).toBe('adventure');
    expect(StoryTheme.FRIENDSHIP).toBe('friendship');
    expect(StoryTheme.FAMILY).toBe('family');
    expect(StoryTheme.ANIMALS).toBe('animals');
  });

  test('IllustrationStyle enum should have correct values', () => {
    expect(IllustrationStyle.CARTOON).toBe('cartoon');
    expect(IllustrationStyle.REALISTIC).toBe('realistic');
    expect(IllustrationStyle.SKETCH).toBe('sketch');
    expect(IllustrationStyle.WATERCOLOR).toBe('watercolor');
  });

  test('FontSize enum should have correct values', () => {
    expect(FontSize.SMALL).toBe('small');
    expect(FontSize.MEDIUM).toBe('medium');
    expect(FontSize.LARGE).toBe('large');
    expect(FontSize.EXTRA_LARGE).toBe('extra-large');
  });

  test('ColorTheme enum should have correct values', () => {
    expect(ColorTheme.BRIGHT).toBe('bright');
    expect(ColorTheme.PASTEL).toBe('pastel');
    expect(ColorTheme.DARK).toBe('dark');
    expect(ColorTheme.HIGH_CONTRAST).toBe('high-contrast');
  });

  test('AchievementCategory enum should have correct values', () => {
    expect(AchievementCategory.READING).toBe('reading');
    expect(AchievementCategory.CREATIVITY).toBe('creativity');
    expect(AchievementCategory.MORAL_LEARNING).toBe('moral_learning');
    expect(AchievementCategory.EXPLORATION).toBe('exploration');
  });

  test('ContentFilterLevel enum should have correct values', () => {
    expect(ContentFilterLevel.NONE).toBe('none');
    expect(ContentFilterLevel.LOW).toBe('low');
    expect(ContentFilterLevel.MEDIUM).toBe('medium');
    expect(ContentFilterLevel.HIGH).toBe('high');
    expect(ContentFilterLevel.STRICT).toBe('strict');
  });
});

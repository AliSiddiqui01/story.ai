/**
 * Story-related TypeScript interfaces for AI Storyteller
 * COPPA-compliant story structure with moral guidance
 */
export interface StoryNode {
    id: string;
    title: string;
    text: string;
    illustrations: StoryIllustration[];
    choices: StoryChoice[];
    moralTags: MoralTag[];
    readingLevel: ReadingLevel;
    estimatedReadTime: number;
    voiceNarration?: string;
    interactiveElements?: InteractiveElement[];
    parentGuidance?: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface StoryIllustration {
    id: string;
    url: string;
    altText: string;
    position: 'top' | 'middle' | 'bottom' | 'inline';
    style: 'cartoon' | 'realistic' | 'sketch' | 'watercolor';
    safetyApproved: boolean;
}
export interface StoryChoice {
    id: string;
    text: string;
    nextNodeId: string | null;
    moralWeight: MoralWeight;
    consequences?: string;
    difficulty: ChoiceDifficulty;
    requiresParentalGuidance: boolean;
}
export interface MoralTag {
    id: string;
    category: MoralCategory;
    lesson: string;
    description: string;
    ageAppropriate: AgeRange[];
    weight: 'light' | 'medium' | 'heavy';
}
export interface InteractiveElement {
    id: string;
    type: 'drawing' | 'voice' | 'quiz' | 'puzzle' | 'memory-game';
    prompt: string;
    instructions: string;
    data?: any;
    timeLimit?: number;
    required: boolean;
}
export declare enum ReadingLevel {
    BEGINNER = "beginner",// Ages 6-7
    ELEMENTARY = "elementary",// Ages 8-9
    INTERMEDIATE = "intermediate",// Ages 10-11
    ADVANCED = "advanced"
}
export declare enum MoralCategory {
    KINDNESS = "kindness",
    HONESTY = "honesty",
    COURAGE = "courage",
    FRIENDSHIP = "friendship",
    RESPONSIBILITY = "responsibility",
    EMPATHY = "empathy",
    PERSEVERANCE = "perseverance",
    RESPECT = "respect",
    SHARING = "sharing",
    FORGIVENESS = "forgiveness"
}
export declare enum MoralWeight {
    POSITIVE = "positive",// Good moral choice
    NEUTRAL = "neutral",// No moral implication
    NEGATIVE = "negative",// Poor moral choice (learning opportunity)
    TEACHING = "teaching"
}
export declare enum ChoiceDifficulty {
    EASY = "easy",// Clear right/wrong
    MEDIUM = "medium",// Requires some thought
    HARD = "hard"
}
export declare enum AgeRange {
    AGES_6_7 = "6-7",
    AGES_8_9 = "8-9",
    AGES_10_11 = "10-11",
    AGE_12 = "12"
}
export declare enum StoryTheme {
    ADVENTURE = "adventure",
    FANTASY = "fantasy",
    SCIENCE = "science",
    ANIMALS = "animals",
    FRIENDSHIP = "friendship",
    FAMILY = "family",
    MYSTERY = "mystery",
    COMEDY = "comedy",
    EDUCATIONAL = "educational",
    HISTORICAL = "historical",
    NATURE = "nature",
    SPACE = "space"
}
export declare enum StoryComplexity {
    SIMPLE = "simple",
    MODERATE = "moderate",
    COMPLEX = "complex"
}

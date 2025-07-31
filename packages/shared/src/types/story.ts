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
  estimatedReadTime: number; // in minutes
  voiceNarration?: string; // Base64 encoded audio or URL
  interactiveElements?: InteractiveElement[];
  parentGuidance?: string; // Optional guidance for parents
  createdAt: Date;
  updatedAt: Date;
}

export interface StoryIllustration {
  id: string;
  url: string;
  altText: string; // Accessibility description
  position: 'top' | 'middle' | 'bottom' | 'inline';
  style: 'cartoon' | 'realistic' | 'sketch' | 'watercolor';
  safetyApproved: boolean; // Content moderation flag
}

export interface StoryChoice {
  id: string;
  text: string;
  nextNodeId: string | null; // null for story endings
  moralWeight: MoralWeight;
  consequences?: string; // Brief description of choice outcome
  difficulty: ChoiceDifficulty;
  requiresParentalGuidance: boolean;
}

export interface MoralTag {
  id: string;
  category: MoralCategory;
  lesson: string;
  description: string;
  ageAppropriate: AgeRange[];
  weight: 'light' | 'medium' | 'heavy'; // Impact level
}

export interface InteractiveElement {
  id: string;
  type: 'drawing' | 'voice' | 'quiz' | 'puzzle' | 'memory-game';
  prompt: string;
  instructions: string;
  data?: any; // Element-specific configuration
  timeLimit?: number; // in seconds
  required: boolean;
}

// Supporting enums and types
export enum ReadingLevel {
  BEGINNER = 'beginner',     // Ages 6-7
  ELEMENTARY = 'elementary', // Ages 8-9
  INTERMEDIATE = 'intermediate', // Ages 10-11
  ADVANCED = 'advanced'      // Age 12
}

export enum MoralCategory {
  KINDNESS = 'kindness',
  HONESTY = 'honesty',
  COURAGE = 'courage',
  FRIENDSHIP = 'friendship',
  RESPONSIBILITY = 'responsibility',
  EMPATHY = 'empathy',
  PERSEVERANCE = 'perseverance',
  RESPECT = 'respect',
  SHARING = 'sharing',
  FORGIVENESS = 'forgiveness'
}

export enum MoralWeight {
  POSITIVE = 'positive',   // Good moral choice
  NEUTRAL = 'neutral',     // No moral implication
  NEGATIVE = 'negative',   // Poor moral choice (learning opportunity)
  TEACHING = 'teaching'    // Explicitly educational
}

export enum ChoiceDifficulty {
  EASY = 'easy',       // Clear right/wrong
  MEDIUM = 'medium',   // Requires some thought
  HARD = 'hard'        // Complex moral reasoning
}

export enum AgeRange {
  AGES_6_7 = '6-7',
  AGES_8_9 = '8-9',
  AGES_10_11 = '10-11',
  AGE_12 = '12'
}

export enum StoryTheme {
  ADVENTURE = 'adventure',
  FANTASY = 'fantasy',
  SCIENCE = 'science',
  ANIMALS = 'animals',
  FRIENDSHIP = 'friendship',
  FAMILY = 'family',
  MYSTERY = 'mystery',
  COMEDY = 'comedy',
  EDUCATIONAL = 'educational',
  HISTORICAL = 'historical',
  NATURE = 'nature',
  SPACE = 'space'
}

export enum StoryComplexity {
  SIMPLE = 'simple',
  MODERATE = 'moderate',
  COMPLEX = 'complex'
}

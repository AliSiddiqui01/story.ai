"use strict";
/**
 * Jest tests for Story-related TypeScript interfaces
 */
Object.defineProperty(exports, "__esModule", { value: true });
const story_1 = require("../story");
describe('StoryNode Interface', () => {
    const mockStoryNode = {
        id: 'story-node-1',
        title: 'The Brave Little Mouse',
        text: 'Once upon a time, in a small village, there lived a brave little mouse named Pip.',
        illustrations: [],
        choices: [],
        moralTags: [],
        readingLevel: story_1.ReadingLevel.BEGINNER,
        estimatedReadTime: 5,
        createdAt: new Date('2024-01-01'),
        updatedAt: new Date('2024-01-01')
    };
    test('should create a valid StoryNode', () => {
        expect(mockStoryNode).toBeDefined();
        expect(mockStoryNode.id).toBe('story-node-1');
        expect(mockStoryNode.title).toBe('The Brave Little Mouse');
        expect(mockStoryNode.readingLevel).toBe(story_1.ReadingLevel.BEGINNER);
        expect(mockStoryNode.estimatedReadTime).toBe(5);
    });
    test('should have optional properties', () => {
        expect(mockStoryNode.voiceNarration).toBeUndefined();
        expect(mockStoryNode.interactiveElements).toBeUndefined();
        expect(mockStoryNode.parentGuidance).toBeUndefined();
    });
    test('should accept optional properties', () => {
        const nodeWithOptionals = {
            ...mockStoryNode,
            voiceNarration: 'base64-audio-data',
            parentGuidance: 'This story teaches about courage and helping others.'
        };
        expect(nodeWithOptionals.voiceNarration).toBe('base64-audio-data');
        expect(nodeWithOptionals.parentGuidance).toBe('This story teaches about courage and helping others.');
    });
});
describe('StoryIllustration Interface', () => {
    const mockIllustration = {
        id: 'illustration-1',
        url: 'https://example.com/image.jpg',
        altText: 'A brave little mouse standing in a village square',
        position: 'top',
        style: 'cartoon',
        safetyApproved: true
    };
    test('should create a valid StoryIllustration', () => {
        expect(mockIllustration).toBeDefined();
        expect(mockIllustration.id).toBe('illustration-1');
        expect(mockIllustration.altText).toBe('A brave little mouse standing in a village square');
        expect(mockIllustration.safetyApproved).toBe(true);
    });
    test('should validate position enum values', () => {
        const positions = ['top', 'middle', 'bottom', 'inline'];
        positions.forEach(position => {
            const illustration = { ...mockIllustration, position: position };
            expect(['top', 'middle', 'bottom', 'inline']).toContain(illustration.position);
        });
    });
    test('should validate style enum values', () => {
        const styles = ['cartoon', 'realistic', 'sketch', 'watercolor'];
        styles.forEach(style => {
            const illustration = { ...mockIllustration, style: style };
            expect(['cartoon', 'realistic', 'sketch', 'watercolor']).toContain(illustration.style);
        });
    });
});
describe('StoryChoice Interface', () => {
    const mockChoice = {
        id: 'choice-1',
        text: 'Help the lost kitten find its way home',
        nextNodeId: 'story-node-2',
        moralWeight: story_1.MoralWeight.POSITIVE,
        difficulty: story_1.ChoiceDifficulty.EASY,
        requiresParentalGuidance: false
    };
    test('should create a valid StoryChoice', () => {
        expect(mockChoice).toBeDefined();
        expect(mockChoice.id).toBe('choice-1');
        expect(mockChoice.text).toBe('Help the lost kitten find its way home');
        expect(mockChoice.moralWeight).toBe(story_1.MoralWeight.POSITIVE);
        expect(mockChoice.difficulty).toBe(story_1.ChoiceDifficulty.EASY);
    });
    test('should allow null nextNodeId for story endings', () => {
        const endingChoice = {
            ...mockChoice,
            nextNodeId: null
        };
        expect(endingChoice.nextNodeId).toBeNull();
    });
    test('should have optional consequences', () => {
        expect(mockChoice.consequences).toBeUndefined();
        const choiceWithConsequences = {
            ...mockChoice,
            consequences: 'The kitten will be reunited with its family'
        };
        expect(choiceWithConsequences.consequences).toBe('The kitten will be reunited with its family');
    });
});
describe('MoralTag Interface', () => {
    const mockMoralTag = {
        id: 'moral-1',
        category: story_1.MoralCategory.KINDNESS,
        lesson: 'Helping others in need',
        description: 'This choice demonstrates kindness by helping someone who needs assistance',
        ageAppropriate: [story_1.AgeRange.AGES_6_7, story_1.AgeRange.AGES_8_9],
        weight: 'medium'
    };
    test('should create a valid MoralTag', () => {
        expect(mockMoralTag).toBeDefined();
        expect(mockMoralTag.category).toBe(story_1.MoralCategory.KINDNESS);
        expect(mockMoralTag.lesson).toBe('Helping others in need');
        expect(mockMoralTag.weight).toBe('medium');
    });
    test('should validate age appropriate ranges', () => {
        expect(mockMoralTag.ageAppropriate).toContain(story_1.AgeRange.AGES_6_7);
        expect(mockMoralTag.ageAppropriate).toContain(story_1.AgeRange.AGES_8_9);
        expect(mockMoralTag.ageAppropriate).toHaveLength(2);
    });
    test('should validate weight values', () => {
        const weights = ['light', 'medium', 'heavy'];
        weights.forEach(weight => {
            const tag = { ...mockMoralTag, weight: weight };
            expect(['light', 'medium', 'heavy']).toContain(tag.weight);
        });
    });
});
describe('InteractiveElement Interface', () => {
    const mockInteractiveElement = {
        id: 'interactive-1',
        type: 'drawing',
        prompt: 'Draw what you think the brave mouse looks like',
        instructions: 'Use the drawing tools to create your own version of Pip the mouse',
        required: false
    };
    test('should create a valid InteractiveElement', () => {
        expect(mockInteractiveElement).toBeDefined();
        expect(mockInteractiveElement.type).toBe('drawing');
        expect(mockInteractiveElement.prompt).toBe('Draw what you think the brave mouse looks like');
        expect(mockInteractiveElement.required).toBe(false);
    });
    test('should have optional properties', () => {
        expect(mockInteractiveElement.data).toBeUndefined();
        expect(mockInteractiveElement.timeLimit).toBeUndefined();
    });
    test('should accept optional properties', () => {
        const elementWithOptionals = {
            ...mockInteractiveElement,
            data: { colors: ['red', 'blue', 'green'] },
            timeLimit: 300
        };
        expect(elementWithOptionals.data).toEqual({ colors: ['red', 'blue', 'green'] });
        expect(elementWithOptionals.timeLimit).toBe(300);
    });
    test('should validate type enum values', () => {
        const types = ['drawing', 'voice', 'quiz', 'puzzle', 'memory-game'];
        types.forEach(type => {
            const element = { ...mockInteractiveElement, type: type };
            expect(['drawing', 'voice', 'quiz', 'puzzle', 'memory-game']).toContain(element.type);
        });
    });
});
describe('Enum Values', () => {
    test('ReadingLevel enum should have correct values', () => {
        expect(story_1.ReadingLevel.BEGINNER).toBe('beginner');
        expect(story_1.ReadingLevel.ELEMENTARY).toBe('elementary');
        expect(story_1.ReadingLevel.INTERMEDIATE).toBe('intermediate');
        expect(story_1.ReadingLevel.ADVANCED).toBe('advanced');
    });
    test('MoralCategory enum should have correct values', () => {
        expect(story_1.MoralCategory.KINDNESS).toBe('kindness');
        expect(story_1.MoralCategory.HONESTY).toBe('honesty');
        expect(story_1.MoralCategory.COURAGE).toBe('courage');
        expect(story_1.MoralCategory.FRIENDSHIP).toBe('friendship');
    });
    test('MoralWeight enum should have correct values', () => {
        expect(story_1.MoralWeight.POSITIVE).toBe('positive');
        expect(story_1.MoralWeight.NEUTRAL).toBe('neutral');
        expect(story_1.MoralWeight.NEGATIVE).toBe('negative');
        expect(story_1.MoralWeight.TEACHING).toBe('teaching');
    });
    test('ChoiceDifficulty enum should have correct values', () => {
        expect(story_1.ChoiceDifficulty.EASY).toBe('easy');
        expect(story_1.ChoiceDifficulty.MEDIUM).toBe('medium');
        expect(story_1.ChoiceDifficulty.HARD).toBe('hard');
    });
    test('AgeRange enum should have correct values', () => {
        expect(story_1.AgeRange.AGES_6_7).toBe('6-7');
        expect(story_1.AgeRange.AGES_8_9).toBe('8-9');
        expect(story_1.AgeRange.AGES_10_11).toBe('10-11');
        expect(story_1.AgeRange.AGE_12).toBe('12');
    });
});

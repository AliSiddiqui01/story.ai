"use strict";
/**
 * Story-related TypeScript interfaces for AI Storyteller
 * COPPA-compliant story structure with moral guidance
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.StoryComplexity = exports.StoryTheme = exports.AgeRange = exports.ChoiceDifficulty = exports.MoralWeight = exports.MoralCategory = exports.ReadingLevel = void 0;
// Supporting enums and types
var ReadingLevel;
(function (ReadingLevel) {
    ReadingLevel["BEGINNER"] = "beginner";
    ReadingLevel["ELEMENTARY"] = "elementary";
    ReadingLevel["INTERMEDIATE"] = "intermediate";
    ReadingLevel["ADVANCED"] = "advanced"; // Age 12
})(ReadingLevel || (exports.ReadingLevel = ReadingLevel = {}));
var MoralCategory;
(function (MoralCategory) {
    MoralCategory["KINDNESS"] = "kindness";
    MoralCategory["HONESTY"] = "honesty";
    MoralCategory["COURAGE"] = "courage";
    MoralCategory["FRIENDSHIP"] = "friendship";
    MoralCategory["RESPONSIBILITY"] = "responsibility";
    MoralCategory["EMPATHY"] = "empathy";
    MoralCategory["PERSEVERANCE"] = "perseverance";
    MoralCategory["RESPECT"] = "respect";
    MoralCategory["SHARING"] = "sharing";
    MoralCategory["FORGIVENESS"] = "forgiveness";
})(MoralCategory || (exports.MoralCategory = MoralCategory = {}));
var MoralWeight;
(function (MoralWeight) {
    MoralWeight["POSITIVE"] = "positive";
    MoralWeight["NEUTRAL"] = "neutral";
    MoralWeight["NEGATIVE"] = "negative";
    MoralWeight["TEACHING"] = "teaching"; // Explicitly educational
})(MoralWeight || (exports.MoralWeight = MoralWeight = {}));
var ChoiceDifficulty;
(function (ChoiceDifficulty) {
    ChoiceDifficulty["EASY"] = "easy";
    ChoiceDifficulty["MEDIUM"] = "medium";
    ChoiceDifficulty["HARD"] = "hard"; // Complex moral reasoning
})(ChoiceDifficulty || (exports.ChoiceDifficulty = ChoiceDifficulty = {}));
var AgeRange;
(function (AgeRange) {
    AgeRange["AGES_6_7"] = "6-7";
    AgeRange["AGES_8_9"] = "8-9";
    AgeRange["AGES_10_11"] = "10-11";
    AgeRange["AGE_12"] = "12";
})(AgeRange || (exports.AgeRange = AgeRange = {}));
var StoryTheme;
(function (StoryTheme) {
    StoryTheme["ADVENTURE"] = "adventure";
    StoryTheme["FANTASY"] = "fantasy";
    StoryTheme["SCIENCE"] = "science";
    StoryTheme["ANIMALS"] = "animals";
    StoryTheme["FRIENDSHIP"] = "friendship";
    StoryTheme["FAMILY"] = "family";
    StoryTheme["MYSTERY"] = "mystery";
    StoryTheme["COMEDY"] = "comedy";
    StoryTheme["EDUCATIONAL"] = "educational";
    StoryTheme["HISTORICAL"] = "historical";
    StoryTheme["NATURE"] = "nature";
    StoryTheme["SPACE"] = "space";
})(StoryTheme || (exports.StoryTheme = StoryTheme = {}));
var StoryComplexity;
(function (StoryComplexity) {
    StoryComplexity["SIMPLE"] = "simple";
    StoryComplexity["MODERATE"] = "moderate";
    StoryComplexity["COMPLEX"] = "complex";
})(StoryComplexity || (exports.StoryComplexity = StoryComplexity = {}));

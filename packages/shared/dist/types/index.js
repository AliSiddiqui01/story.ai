"use strict";
// COPPA-compliant types for AI Storyteller
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AgeRange = exports.MoralCategory = exports.DifficultyLevel = exports.StoryTheme = void 0;
// Export all story-related types
__exportStar(require("./story"), exports);
// Export all user-related types
__exportStar(require("./user"), exports);
// Export all parental-related types
__exportStar(require("./parental"), exports);
// Export shared types to resolve circular dependencies
__exportStar(require("./shared"), exports);
// Enums
var StoryTheme;
(function (StoryTheme) {
    StoryTheme["ADVENTURE"] = "adventure";
    StoryTheme["FRIENDSHIP"] = "friendship";
    StoryTheme["FAMILY"] = "family";
    StoryTheme["NATURE"] = "nature";
    StoryTheme["SCIENCE"] = "science";
    StoryTheme["FANTASY"] = "fantasy";
    StoryTheme["MYSTERY"] = "mystery";
    StoryTheme["ANIMALS"] = "animals";
})(StoryTheme || (exports.StoryTheme = StoryTheme = {}));
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["BEGINNER"] = "beginner";
    DifficultyLevel["INTERMEDIATE"] = "intermediate";
    DifficultyLevel["ADVANCED"] = "advanced"; // Ages 11-12
})(DifficultyLevel || (exports.DifficultyLevel = DifficultyLevel = {}));
var MoralCategory;
(function (MoralCategory) {
    MoralCategory["HONESTY"] = "honesty";
    MoralCategory["KINDNESS"] = "kindness";
    MoralCategory["COURAGE"] = "courage";
    MoralCategory["RESPONSIBILITY"] = "responsibility";
    MoralCategory["RESPECT"] = "respect";
    MoralCategory["PERSEVERANCE"] = "perseverance";
    MoralCategory["EMPATHY"] = "empathy";
    MoralCategory["FAIRNESS"] = "fairness";
})(MoralCategory || (exports.MoralCategory = MoralCategory = {}));
var AgeRange;
(function (AgeRange) {
    AgeRange["EARLY_ELEMENTARY"] = "6-7";
    AgeRange["LATE_ELEMENTARY"] = "8-10";
    AgeRange["MIDDLE_SCHOOL"] = "11-12";
})(AgeRange || (exports.AgeRange = AgeRange = {}));

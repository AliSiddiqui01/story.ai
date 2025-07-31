"use strict";
/**
 * User-related TypeScript interfaces for AI Storyteller
 * COPPA-compliant user profiles and preferences
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementCategory = exports.ColorTheme = exports.FontSize = exports.IllustrationStyle = exports.InterestCategory = void 0;
// User-related enums
var InterestCategory;
(function (InterestCategory) {
    InterestCategory["ANIMALS"] = "animals";
    InterestCategory["ADVENTURE"] = "adventure";
    InterestCategory["SCIENCE"] = "science";
    InterestCategory["FANTASY"] = "fantasy";
    InterestCategory["SPORTS"] = "sports";
    InterestCategory["MUSIC"] = "music";
    InterestCategory["ART"] = "art";
    InterestCategory["COOKING"] = "cooking";
    InterestCategory["NATURE"] = "nature";
    InterestCategory["SPACE"] = "space";
    InterestCategory["HISTORY"] = "history";
    InterestCategory["MYSTERY"] = "mystery";
})(InterestCategory || (exports.InterestCategory = InterestCategory = {}));
var IllustrationStyle;
(function (IllustrationStyle) {
    IllustrationStyle["CARTOON"] = "cartoon";
    IllustrationStyle["REALISTIC"] = "realistic";
    IllustrationStyle["SKETCH"] = "sketch";
    IllustrationStyle["WATERCOLOR"] = "watercolor";
    IllustrationStyle["DIGITAL"] = "digital";
    IllustrationStyle["HAND_DRAWN"] = "hand_drawn";
})(IllustrationStyle || (exports.IllustrationStyle = IllustrationStyle = {}));
var FontSize;
(function (FontSize) {
    FontSize["SMALL"] = "small";
    FontSize["MEDIUM"] = "medium";
    FontSize["LARGE"] = "large";
    FontSize["EXTRA_LARGE"] = "extra_large";
})(FontSize || (exports.FontSize = FontSize = {}));
var ColorTheme;
(function (ColorTheme) {
    ColorTheme["BRIGHT"] = "bright";
    ColorTheme["PASTEL"] = "pastel";
    ColorTheme["DARK"] = "dark";
    ColorTheme["HIGH_CONTRAST"] = "high_contrast";
    ColorTheme["RAINBOW"] = "rainbow";
})(ColorTheme || (exports.ColorTheme = ColorTheme = {}));
var AchievementCategory;
(function (AchievementCategory) {
    AchievementCategory["READING"] = "reading";
    AchievementCategory["CREATIVITY"] = "creativity";
    AchievementCategory["MORAL_LEARNING"] = "moral_learning";
    AchievementCategory["EXPLORATION"] = "exploration";
    AchievementCategory["CONSISTENCY"] = "consistency";
    AchievementCategory["SOCIAL"] = "social";
})(AchievementCategory || (exports.AchievementCategory = AchievementCategory = {}));

"use strict";
// Shared types to resolve circular dependencies
Object.defineProperty(exports, "__esModule", { value: true });
exports.AchievementCategory = exports.ColorTheme = exports.FontSize = exports.IllustrationStyle = exports.InterestCategory = exports.StoryComplexity = exports.AgeRange = exports.ReadingLevel = exports.StoryTheme = exports.MoralCategory = exports.Priority = exports.RecommendationType = exports.AlertSeverity = exports.AlertType = exports.ReportFrequency = exports.DayOfWeek = exports.DifficultyLevel = exports.ContentFilterLevel = void 0;
// Enums that are used in multiple files
var ContentFilterLevel;
(function (ContentFilterLevel) {
    ContentFilterLevel["NONE"] = "none";
    ContentFilterLevel["LOW"] = "low";
    ContentFilterLevel["MEDIUM"] = "medium";
    ContentFilterLevel["HIGH"] = "high";
    ContentFilterLevel["STRICT"] = "strict";
})(ContentFilterLevel || (exports.ContentFilterLevel = ContentFilterLevel = {}));
var DifficultyLevel;
(function (DifficultyLevel) {
    DifficultyLevel["BEGINNER"] = "beginner";
    DifficultyLevel["INTERMEDIATE"] = "intermediate";
    DifficultyLevel["ADVANCED"] = "advanced"; // Ages 11-12
})(DifficultyLevel || (exports.DifficultyLevel = DifficultyLevel = {}));
var DayOfWeek;
(function (DayOfWeek) {
    DayOfWeek["MONDAY"] = "monday";
    DayOfWeek["TUESDAY"] = "tuesday";
    DayOfWeek["WEDNESDAY"] = "wednesday";
    DayOfWeek["THURSDAY"] = "thursday";
    DayOfWeek["FRIDAY"] = "friday";
    DayOfWeek["SATURDAY"] = "saturday";
    DayOfWeek["SUNDAY"] = "sunday";
})(DayOfWeek || (exports.DayOfWeek = DayOfWeek = {}));
var ReportFrequency;
(function (ReportFrequency) {
    ReportFrequency["DAILY"] = "daily";
    ReportFrequency["WEEKLY"] = "weekly";
    ReportFrequency["MONTHLY"] = "monthly";
    ReportFrequency["NEVER"] = "never";
})(ReportFrequency || (exports.ReportFrequency = ReportFrequency = {}));
var AlertType;
(function (AlertType) {
    AlertType["INAPPROPRIATE_CONTENT"] = "inappropriate_content";
    AlertType["TIME_LIMIT_EXCEEDED"] = "time_limit_exceeded";
    AlertType["SAFETY_CONCERN"] = "safety_concern";
    AlertType["TECHNICAL_ISSUE"] = "technical_issue";
})(AlertType || (exports.AlertType = AlertType = {}));
var AlertSeverity;
(function (AlertSeverity) {
    AlertSeverity["LOW"] = "low";
    AlertSeverity["MEDIUM"] = "medium";
    AlertSeverity["HIGH"] = "high";
    AlertSeverity["CRITICAL"] = "critical";
})(AlertSeverity || (exports.AlertSeverity = AlertSeverity = {}));
var RecommendationType;
(function (RecommendationType) {
    RecommendationType["STORY"] = "story";
    RecommendationType["ACTIVITY"] = "activity";
    RecommendationType["SETTING_CHANGE"] = "setting_change";
    RecommendationType["PARENTAL_GUIDANCE"] = "parental_guidance";
})(RecommendationType || (exports.RecommendationType = RecommendationType = {}));
var Priority;
(function (Priority) {
    Priority["LOW"] = "low";
    Priority["MEDIUM"] = "medium";
    Priority["HIGH"] = "high";
    Priority["URGENT"] = "urgent";
})(Priority || (exports.Priority = Priority = {}));
// Re-export enums from story.ts to avoid circular dependencies
var story_1 = require("./story");
Object.defineProperty(exports, "MoralCategory", { enumerable: true, get: function () { return story_1.MoralCategory; } });
Object.defineProperty(exports, "StoryTheme", { enumerable: true, get: function () { return story_1.StoryTheme; } });
Object.defineProperty(exports, "ReadingLevel", { enumerable: true, get: function () { return story_1.ReadingLevel; } });
Object.defineProperty(exports, "AgeRange", { enumerable: true, get: function () { return story_1.AgeRange; } });
Object.defineProperty(exports, "StoryComplexity", { enumerable: true, get: function () { return story_1.StoryComplexity; } });
// Re-export enums from user.ts that are needed in other modules
var user_1 = require("./user");
Object.defineProperty(exports, "InterestCategory", { enumerable: true, get: function () { return user_1.InterestCategory; } });
Object.defineProperty(exports, "IllustrationStyle", { enumerable: true, get: function () { return user_1.IllustrationStyle; } });
Object.defineProperty(exports, "FontSize", { enumerable: true, get: function () { return user_1.FontSize; } });
Object.defineProperty(exports, "ColorTheme", { enumerable: true, get: function () { return user_1.ColorTheme; } });
Object.defineProperty(exports, "AchievementCategory", { enumerable: true, get: function () { return user_1.AchievementCategory; } });

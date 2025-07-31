import React from 'react';
import StorytellingIllustration from '../assets/illustrations/StorytellingIllustration';

const Hero: React.FC = () => {
  return (
    <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-pink-50 dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <StorytellingIllustration className="w-64 h-64 md:w-80 md:h-80 mx-auto mb-6 text-pink-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 dark:text-white leading-tight">
          Welcome to <span className="text-pink-500">Story.AI</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Unleash your imagination and create wonderful stories with the help of AI. Let's begin a magical journey together!
        </p>
      </div>
    </section>
  );
};

export default Hero;

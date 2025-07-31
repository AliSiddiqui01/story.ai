import React, { useState } from 'react';

const CreateStoryPage: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleGenerateStory = (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    console.log('Generating story for prompt:', prompt);

    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      // Here you would navigate to the story player page with the new story
      console.log('Story generated!');
    }, 3000);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-gray-800 dark:text-white">Create Your Own Adventure</h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300">What amazing story do you want to create today? Enter a prompt below to get started.</p>
      </div>

      <form onSubmit={handleGenerateStory} className="mt-8 max-w-xl mx-auto">
        <textarea
          className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:ring-pink-500 focus:border-pink-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white"
          rows={4}
          placeholder="e.g., A brave knight and a friendly dragon on a quest to find a hidden treasure..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          disabled={isLoading}
        />
        <div className="text-center mt-6">
          <button
            type="submit"
            disabled={isLoading || !prompt.trim()}
            className="inline-flex items-center justify-center px-8 py-4 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-full transition duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:scale-100"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Generating...
              </>
            ) : (
              '✨ Tell Me a Story'
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateStoryPage;

import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero'; // Import the Hero component

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero /> {/* Add the Hero component here */}

      <div className="py-12 bg-white dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-pink-600 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              A better way to create stories
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
              Our platform is packed with features to make storytelling fun, safe, and educational for kids.
            </p>
          </div>

          <div className="mt-10">
            {/* Feature list can go here */}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/create"
              className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105"
            >
              Start Creating Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

import React from 'react';

const StorytellingIllustration: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
    {/* This is a placeholder SVG. I will replace it with a real illustration from Storyset. */}
    <path fill="#B2D7EF" d="M0 0h512v512H0z" />
    <path d="M256 100l-50 100h100z" fill="#FFD700" />
    <circle cx="256" cy="350" r="100" fill="#FF6347" />
    <rect x="150" y="400" width="212" height="50" fill="#32CD32" />
  </svg>
);

export default StorytellingIllustration;

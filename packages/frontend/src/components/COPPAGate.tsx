import React from 'react';

const COPPAGate: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const isCompliant = true; // Replace with actual COPPA compliance logic
  return isCompliant ? <>{children}</> : <div>COPPA Compliance Check Failed</div>;
};

export default COPPAGate;

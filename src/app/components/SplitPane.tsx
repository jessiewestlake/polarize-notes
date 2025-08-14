import React from 'react';

interface SplitPaneProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const SplitPane: React.FC<SplitPaneProps> = ({ left, right }) => {
  return (
    <div className="flex h-screen">
      <div className="w-1/2 border-r border-gray-300">{left}</div>
      <div className="w-1/2">{right}</div>
    </div>
  );
};

export default SplitPane;

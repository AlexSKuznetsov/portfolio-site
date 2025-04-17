import React, { useState, useRef } from 'react';
import type { ReactNode } from 'react';

interface PopoverProps {
  text: string;
  children: ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ text, children }) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    console.log('Popover hovered');
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div 
      className="relative inline-block"
      ref={containerRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onFocus={handleMouseEnter}
      onBlur={handleMouseLeave}
      tabIndex={0}
    >
      <div className="cursor-pointer">
        {children}
      </div>
      
      {/* Tooltip/Popover content */}
      <div 
        className="absolute z-50 min-w-[180px] max-w-xs p-3 rounded-lg bg-slate-900/90 text-slate-100 text-sm shadow-lg border border-slate-700 left-1/2 -translate-x-1/2 mt-2 transition-all duration-200 backdrop-blur-sm"
        style={{
          opacity: isHovered ? 1 : 0,
          visibility: isHovered ? 'visible' : 'hidden',
          pointerEvents: isHovered ? 'auto' : 'none',
          bottom: 'calc(100% + 5px)', // Position above the element
          transform: isHovered ? 'translateY(0) translateX(-50%)' : 'translateY(2px) translateX(-50%)',
        }}
      >
        {text}
        {/* Arrow */}
        <div className="absolute w-3 h-3 bg-slate-900/90 border-b border-r border-slate-700 transform rotate-45 left-1/2 -translate-x-1/2 -bottom-1.5"></div>
      </div>
    </div>
  );
};

export default Popover;

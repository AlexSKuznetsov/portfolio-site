import React from 'react';

export const Button = () => {
  const handleClick = () => {
    window.location.href = 'https://cal.com/alexander-kuznetsov-wb1vqy/15min';
  };

  return (
    <button
      onClick={handleClick}
      className="group relative px-4 py-2 bg-slate-800/50 text-slate-200 rounded-full hover:bg-slate-700/50 transition-all duration-200 overflow-hidden"
    >
      <span className="flex items-center gap-2">
        <span className="px-2 py-0.5 text-xs uppercase bg-blue-800 rounded-full">
          Hire me
        </span>
        <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200">
          Let's discuss future opportunities
        </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
      </span>
    </button>
  );
};

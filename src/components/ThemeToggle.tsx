import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <button
      onClick={toggleDarkMode}
      className="relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 bg-gray-200 dark:bg-gray-700"
    >
      <span className="sr-only">Toggle theme</span>
      <span
        aria-hidden="true"
        className={`${isDarkMode ? 'translate-x-9' : 'translate-x-0'}
          pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out dark:bg-gray-800`}
      >
        <span className="flex h-full w-full items-center justify-center">
          {isDarkMode ? (
            <Moon className="h-4 w-4 text-indigo-500" />
          ) : (
            <Sun className="h-4 w-4 text-amber-500" />
          )}
        </span>
      </span>
    </button>
  );
};

export default ThemeToggle;
import { HiSun, HiMoon } from 'react-icons/hi';

type ThemeToggleProps = {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
};

export default function ThemeToggle({ theme, toggleTheme }: ThemeToggleProps) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed top-4 right-4 p-3 rounded-full bg-white/80 hover:bg-white/90 
                 backdrop-blur-lg transition-all duration-300 shadow-lg
                 dark:bg-gray-900/80 dark:hover:bg-gray-900/90 z-50"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      {theme === 'light' ? (
        <HiMoon className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      ) : (
        <HiSun className="w-6 h-6 text-gray-800 dark:text-gray-200" />
      )}
    </button>
  );
}
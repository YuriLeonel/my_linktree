import { useEffect } from 'react';
import useTheme from './hooks/useTheme';
import ThemeToggle from './components/ThemeToggle';
import SocialLinks from './components/SocialLinks';
import links from './links.config';
import LinkButton from './components/LinkButton';

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const name = 'Yuri Leonel';
  const title = 'Software Engineer';
  const copyright = `© ${new Date().getFullYear()} All rights reserved`;

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
  }, [theme]); 

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300`}>
      <div className="max-w-4xl mx-auto p-4 md:p-8">
        <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
        
        <header className="mb-8 text-center">
          <img 
            src="/profile.jpg"
            alt="Profile picture"
            className="w-32 h-32 rounded-full mx-auto border-4 border-white/80 
                     shadow-xl dark:border-gray-800/80 mb-6 object-cover"
          />
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-2">
            { name }
          </h1>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            { title }
          </p>
        </header>

        <main className="space-y-4 mb-8">
          {links.map((link, index) => (
            <LinkButton key={index} {...link} />
          ))}
        </main>

        <footer className="pt-8 border-t border-gray-200 dark:border-gray-800">
          <SocialLinks />
          <p className="text-center mt-4 text-gray-600 dark:text-gray-400 text-sm">
            { copyright}
          </p>
        </footer>
      </div>
    </div>
  );
}
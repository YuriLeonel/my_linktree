import { FiExternalLink } from 'react-icons/fi';
import type { Link } from '../links.config';

type LinkButtonProps = Link & {
  children?: React.ReactNode;
};

export default function LinkButton({
  text,
  url,
  icon: Icon,
  variant = 'primary',
  children
}: LinkButtonProps) {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary/80 dark:bg-primary-dark dark:hover:bg-primary-dark/80',
    secondary: 'bg-secondary text-white hover:bg-secondary/80 dark:bg-secondary-dark dark:hover:bg-secondary-dark/80'
  };
  return (
    <a
      href={url}
      className={`group relative flex items-center justify-between p-6 w-full
                 ${variantClasses[variant]} 
                 rounded-xl shadow-lg transition-all duration-300
                 hover:translate-y-[-2px] hover:shadow-xl`}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="flex items-center gap-6">
        <Icon className="w-8 h-8 transition-transform group-hover:scale-110" />
        <div className="text-left">
          <p className="font-semibold text-lg">{text}</p>
          {children && <p className="text-sm opacity-90 mt-1">{children}</p>}
        </div>
      </div>
      <FiExternalLink className="w-6 h-6 opacity-75" />
    </a>
  );
}
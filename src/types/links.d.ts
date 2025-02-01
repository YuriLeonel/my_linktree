import { IconType } from 'react-icons';

export type Link = {
  text: string;
  url: string;
  icon: IconType;
  variant?: 'primary' | 'secondary';
  description?: string; // Optional description field
};
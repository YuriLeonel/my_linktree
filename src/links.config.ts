import { IconType } from 'react-icons';
import { FaGithub, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

export type Link = {
  text: string;
  url: string;
  icon: IconType;
  variant?: 'primary' | 'secondary';
};

const links: Link[] = [
  {
    text: "GitHub",
    url: 'https://github.com/yurileonel',
    icon: FaGithub,
    variant:"primary"
  },
  {
    text: "LinkedIn",
    url: 'https://www.linkedin.com/in/yurileonel/',
    icon: FaLinkedin,
    variant: "secondary"
  },
  {
    text: "Instagram",
    url: 'https://www.instagram.com/yurileonel_yl/?igsh=MXdsa3d5aWhwMjNueQ%3D%3D#',
    icon: FaInstagram,
  },
  {
    text: "Email",
    url: 'mailto:yurileonel.001@gmail.com',
    icon: FaEnvelope,
    variant: "secondary"
  },
];

export default links;
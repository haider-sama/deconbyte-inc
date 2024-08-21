import { FaCode, FaGamepad, FaMobileAlt, FaDatabase, FaLaptopCode, FaUnity } from 'react-icons/fa';
import { IconType } from 'react-icons';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

interface Job {
    icon: IconType;
    title: string;
    description: string;
    address: string;
    employmentType: string;
    href: string;
}
  


export const services: Service[] = [
  {
    icon: FaCode,
    title: 'Web Development',
    href: "/services/web-dev",
    description: 'We enjoy working with discerning clients, people for whom quality, service, integrity & aesthetics matter.',
  },
  {
    icon: FaGamepad,
    title: 'Game Development',
    href: "/services/game-dev",
    description: 'Creating immersive gaming experiences with cutting-edge technology and innovative designs.',
  },
  {
    icon: FaMobileAlt,
    title: 'Mobile Development',
    href: "/services/app-dev",
    description: 'Crafting mobile solutions that are both user-friendly and feature-rich for all platforms.',
  },
  // Add more services here
];

export const jobs: Job[] = [
  {
    icon: FaDatabase,  // Database icon for Back-end Developer
    title: 'Back-end Developer',
    href: "https://www.linkedin.com/company/deconbyte-inc/",
    address: "Lahore, Punjab",
    employmentType: "Full Time",
    description: 'PKR 80,000/- to PKR 120,000/-',  // Updated salary range
  },
  {
    icon: FaLaptopCode,  // Laptop code icon for Front-end Developer
    title: 'Front-end Developer',
    href: "https://www.linkedin.com/company/deconbyte-inc/",
    address: "Lahore, Punjab",
    employmentType: "Full Time",
    description: 'PKR 70,000/- to PKR 100,000/-',  // Updated salary range
  },
  {
    icon: FaUnity,  // Unity icon for Unity3D Developer
    title: 'Unity3D Developer',
    href: "https://www.linkedin.com/company/deconbyte-inc/",
    address: "Lahore, Punjab",
    employmentType: "Full Time",
    description: 'PKR 90,000/- to PKR 130,000/-',  // Updated salary range
  },
];

export const navLinks = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/careers", title: "Careers" },
    { 
        title: "Services", 
        dropdown: [
            { href: "/services/web-dev", title: "Web Development" },
            { href: "/services/ui-ux", title: "UI / UX Design" },
            { href: "/services/qa", title: "Quality assurance (QA)" },
            { href: "/services/app-dev", title: "App Development" },
            { href: "/services/game-dev", title: "Game Development" },
        ] 
    },
    { href: "/contact", title: "Contact" }
];

export const contactList = [
    { title: "info@deconbyteinc.com" },
    { title: "+92 309 1445377" },
    { title: "Corporate Headquarters 54000, Samanabad, Lahore, Punjab" }
];

export const infoLinks = [
    {
    name: "React",
    src: "img/icons8-react-native-48.png", 
    },
    {
    name: "Next.JS",
    src: "img/icons8-nextjs-48.png", 
    },
    {
    name: "Node",
    src: "img/icons8-nodejs-48.png", 
    },
    {
    name: "Unity3d",
    src: "img/icons8-unity-50.png", 
    },
];

export const socialLinks = [
    {
    name: 'Facebook',
    href: '#',
    svgPath:
        'M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z',
    },
    {
    name: 'Instagram',
    href: '#',
    svgPath:
        'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z',
    },
    {
    name: 'Twitter',
    href: '#',
    svgPath:
        'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84',
    },
    {
    name: 'Linkedin',
    href: 'https://www.linkedin.com/company/deconbyte-inc/',
    svgPath:
        'M24,4H6C4.895,4,4,4.895,4,6v18c0,1.105,0.895,2,2,2h18c1.105,0,2-0.895,2-2V6C26,4.895,25.105,4,24,4z M10.954,22h-2.95 v-9.492h2.95V22z M9.449,11.151c-0.951,0-1.72-0.771-1.72-1.72c0-0.949,0.77-1.719,1.72-1.719c0.948,0,1.719,0.771,1.719,1.719 C11.168,10.38,10.397,11.151,9.449,11.151z M22.004,22h-2.948v-4.616c0-1.101-0.02-2.517-1.533-2.517 c-1.535,0-1.771,1.199-1.771,2.437V22h-2.948v-9.492h2.83v1.297h0.04c0.394-0.746,1.356-1.533,2.791-1.533 c2.987,0,3.539,1.966,3.539,4.522V22z',
    },
];

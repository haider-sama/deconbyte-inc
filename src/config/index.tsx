import { FaCode, FaGamepad, FaMobileAlt,
  FaCogs, FaLightbulb, FaShieldAlt, FaPalette, FaUsers, FaRegListAlt, FaRocket, 
  FaSearch,
  FaWordpress
} from 'react-icons/fa';
import { IconType } from 'react-icons';
import { FiCheckCircle, FiCoffee, FiSmile, FiUser } from 'react-icons/fi';

interface Service {
  icon: IconType;
  title: string;
  description: string;
  href: string;
}

interface Testimonial {
  profilePic: string;
  name: string;
  role: string;
  testimonial: string;
}


type StatItem = {
  icon: JSX.Element;
  number: number;
  heading: string;
};

export const services: Service[] = [
  {
    icon: FaCode,
    title: 'Web Development',
    href: "/services/website-development",
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
    href: "/services/app-development",
    description: 'Crafting mobile solutions that are both user-friendly and feature-rich for all platforms.',
  },
  {
    icon: FaSearch,
    title: 'Search Engine Optimization',
    href: "/services/seo",
    description: 'Maximize online visibility with expert SEO services to boost your search rankings and traffic.',
  },
  {
    icon: FaCogs,
    title: 'Software Development',
    href: "/services/software-development",
    description: 'Delivering custom software solutions tailored to meet unique business needs and industry requirements.',
  },
  {
    icon: FaWordpress,
    title: 'WordPress Development',
    href: "/services/wordpress-development",
    description: 'Building responsive, customizable, and SEO-friendly WordPress websites for businesses of all sizes.',
  }
];

export const navLinks = [
    { href: "/", title: "Home" },
    { href: "/about", title: "About" },
    { href: "/team", title: "Team" },
    { href: "/projects", title: "Projects" },
    { 
        title: "Services", 
        dropdown: [
            { href: "/services/website-development", title: "Web Development" },
            { href: "/services/wordpress-development", title: "Wordpress Development" },
            { href: "/services/software-development", title: "Software Development" },
            { href: "/services/app-development", title: "App Development" },
            { href: "/services/seo", title: "Search Engine Optimization" },
        ] 
    },
    { href: "/contact", title: "Contact" }
];

export const contactList = [
    { title: "info@deconbyteinc.com" },
    { title: "+1 (347) 223 6184" },
    { title: "2104 - Unit 2, Ardmore Blvd, Pittsburgh, PA 15221" }
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

export const statsData: StatItem[] = [
  { icon: <FiUser size={32} />, number: 100, heading: "Customers" },
  { icon: <FiSmile size={32} />, number: 95, heading: "Happy Clients" },
  { icon: <FiCheckCircle size={32} />, number: 150, heading: "Projects Completed" },
  { icon: <FiCoffee size={32} />, number: 50, heading: "Coffees with Clients" },
];

export const teamMembers = [
  {
    profilePic: 'img/blank-profile.png',
    name: 'Haider Ali',
    role: 'CEO',
    description: 'Haider is the visionary driving our company forward, leveraging years of leadership and technical expertise to guide our strategic direction.',
    linkedin: 'https://www.linkedin.com/in/haider-sama/',
    github: 'https://github.com/haider-sama',
    facebook: 'https://www.facebook.com/saiyajinhaider/'
  },
  {
    profilePic: 'img/cto.jpg',
    name: 'Muhammad Burhan',
    role: 'CTO',
    description: 'Burhan is the technical mastermind behind our operations, utilizing his extensive knowledge to ensure our technology remains cutting-edge and reliable.',
    linkedin: '/',
    github: '/',
    facebook: '/'
  },
  {
    profilePic: 'img/blank-profile.png',
    name: 'Fasih ur Rehman',
    role: 'Designer',
    description: 'Fasih is the creative force shaping our visual identity, bringing his design skills to craft innovative and engaging user experiences.',
    linkedin: 'https://www.linkedin.com/in/fasih-ur-rehman-b8101828a/',
    github: '/',
    facebook: '/'
  },
  // Add more team members as needed
];

export const testimonials: Testimonial[] = [
  {
    profilePic: 'img/customer1.jpeg',
    name: 'Rayan',
    role: 'Restaurant Owner',
    testimonial: 'Working with deconByte Inc. has transformed our online presence. Their attention to detail and commitment to their quality are unmatched.'
  },
  {
    profilePic: 'img/customer2.jpg',
    name: 'Jeffrey L.',
    role: 'Retail Manager',
    testimonial: 'The team at deconByte Inc. delivered a stunning website that has significantly boosted our sales. Highly recommended!'
  },
  {
    profilePic: 'img/blank-profile.png',
    name: 'Dawid',
    role: 'Tech Startup Founder',
    testimonial: 'Excellent service and support. The website they built for us is not only visually appealing but also highly functional.'
  },
  // Add more testimonials as needed
];

export const homeFaqs = [
  {
    header: "What services do you offer?",
    text: (
      <>
        We offer full coverage for <strong>web development, WordPress development, full-stack app development, e-commerce stores, brand marketing, digital marketing</strong>, and more. Our goal is to help you build an online presence that really lasts. Plus, our team will support your business growth with strategies that turn your website into a valuable asset.
      </>
    ),
  },
  {
    header: "How does building an online presence help my brand?",
    text: (
      <>
        Having an online presence these days is key to reaching more potential customers, which helps you grow over time. It lets you get recognition, not just locally but globally. A strong web design can boost your brand’s visibility and promote your products to a wider audience. The better your website, the more eyes on your business!
      </>
    ),
  },
  {
    header: "How can you guarantee success through Web Design and Digital Marketing?",
    text: (
      <>
        Digital marketing is crucial for any business wanting to get its brand known. Finding the right agency to handle your digital needs is a challenge, but that's where <strong>DeconByte Inc.</strong> steps in. We provide the right tools to help you boost your online presence and grow your business, all in one place.
      </>
    ),
  },
  {
    header: "Why should I choose DeconByte Inc. for my business?",
    text: (
      <>
        DeconByte Inc. is your all-in-one solution for everything from IT and software development to web building and graphic design. We’re committed to delivering top-quality work without cutting corners. Our team is here to elevate your business and take it to new heights of success.
      </>
    ),
  },
  {
    header: "How can I contact DeconByte Inc. for my business?",
    text: (
      <>
        You can easily reach out to us! Contact our friendly team through our form on the website, or get in touch via email at <br /><strong className="text-blue-600">info@deconbyteinc.com</strong><br /> or call us at <br /><strong className="text-blue-600">(347) 223 6184</strong>. <br />We’d love to hear from you!
      </>
    ),
  }
];


export const webFaqs = [
  {
    header: "What services besides web development do you offer?",
    text: "We don’t just stop at web development! Whether it's design, backend, front-end, full-stack solutions, or even CMS integration, we’ve got you covered. We can also help you shape a full business plan from scratch, making sure everything works smoothly with your website."
  },
  {
    header: "I don’t have a website to start my business, what should I do?",
    text: "No worries at all! Just reach out to us, and we’ll happily give you a personalized quote based on what you need. We handle everything from building the website to business strategy, marketing, and helping you generate revenue—so you're all set for success."
  },
  {
    header: "Why does my business need a website? I’m doing just fine without one!",
    text: "You might be doing great, but a website can take your business to the next level! It helps your brand get recognized, whether locally or even globally. If you're thinking about expanding or reaching new markets, a website can really boost your visibility and credibility."
  },
  {
    header: "What technologies do you use to build websites? Do you work with specific frameworks?",
    text: "We work with a variety of technologies like Next.js, React, Node.js, and TypeScript to build fast, custom websites. We also use Laravel, Django, and WordPress, so whatever your project needs, we’ve got the right tools and frameworks to make it happen!"
  }
];

export const cardsData = [
  {
      icon: <FaCode size={36} className="text-blue-500" />,
      title: 'Programming & Testing',
      description: 'We take care of all programming and thorough testing to ensure robust and efficient solutions tailored to your business.'
  },
  {
      icon: <FaCogs size={36} className="text-blue-500" />,
      title: 'Customization & Flexibility',
      description: 'Our solutions are customized to meet your needs, with a flexible approach that adapts as your business grows.'
  },
  {
      icon: <FaLightbulb size={36} className="text-blue-500" />,
      title: 'Innovative Solutions',
      description: 'We provide cutting-edge technology solutions, keeping your business at the forefront of the digital landscape.'
  },
  {
      icon: <FaShieldAlt size={36} className="text-blue-500" />,
      title: 'Security & Reliability',
      description: 'With a focus on security and reliability, we ensure that your systems are safe, secure, and always up and running.'
  },
];


export const cardDataAbout = [
  {
      icon: <FaPalette size={36} className="text-blue-500" />, // Design Choices
      title: 'Complete Design Choices',
      description: 'We offer a comprehensive range of design options, ensuring that your website reflects your brand identity and captivates your audience from the first glance.'
  },
  {
      icon: <FaUsers size={36} className="text-blue-500" />, // Team Support
      title: 'Full Stack Team Support',
      description: 'Our skilled team provides end-to-end support across the full technology stack, from frontend design to backend development, ensuring seamless integration and functionality.'
  },
  {
      icon: <FaRegListAlt size={36} className="text-blue-500" />, // End-to-End Solution
      title: 'End-to-End Solution',
      description: 'We deliver holistic solutions that cover every aspect of your project, from initial planning and design to implementation and ongoing support, ensuring a smooth and successful execution.'
  },
  {
      icon: <FaRocket size={36} className="text-blue-500" />, // Start-Up Choices
      title: 'Start-Up Choices',
      description: 'We specialize in providing tailored solutions for startups, offering guidance and resources to help you establish a strong foundation and navigate the early stages of growth.'
  },
];

export const WebBenefitData = [
  {
    title: "Affordable Pricing",
    description: "Looking for a tailored quote for your business needs? Contact our DeconByte team today, and we will guide you on how to optimize your budget effectively."
  },
  {
    title: "Everyday 24/7 Support",
    description: "We provide 24/7 dedicated support to all our clients. Our team collaborates closely with you to ensure your business is spearheaded into success."
  },
  {
    title: "Digitally Secured",
    description: "DeconByte emphasizes security-first mechanisms in every project, ensuring long-term reliability and protection for your business."
  },
  {
    title: "Supporting Platforms",
    description: "Our expertise spans across platforms such as Laravel, Django, React.js, and more, offering flexible and scalable solutions for your development."
  },
  {
    title: "High Performance",
    description: "We focus on building high-performance websites using lightweight technologies, delivering fast load times and optimal user experiences."
  },
  {
    title: "SEO Friendly",
    description: "DeconByte ensures your website is fully optimized for search engines, giving your business the edge to rank higher and attract more customers."
  }
];

export const WebRoadmapData = [
  {
      title: "Planning",
      description:
          "We firstly prioritize our resources to allocate and research the ideal version of the website you want for your business concerns.",
  },
  {
      title: "Strategizing",
      description:
          "We then strategize and start a development roadmap as well as create testing for your business website, ensuring perfect workflow.",
  },
  {
      title: "Coding",
      description:
          "We put in the hard work and design the backend framework for your website. The skeleton framework will be the bare bones of your website.",
  },
  {
      title: "Designing",
      description:
          "We then add the finishing touches to beautify while also making it look attractive. We ensure that the designing is done to give your website the final look.",
  },
  {
      title: "Launch",
      description:
          "We launch the website and ensure proper control by fixing bugs, testing features and fishing out any errors. Your website will be as good as a pea in a pond.",
  },
  {
      title: "Maintenance",
      description:
          "We take care of your website for long-term planning and ensure that it is up-to-date with more features as time goes on.",
  },
];

export const projects = [
  {
    projectImage: "/img/projects/unitsdispatch.png",
    projectName: "Units Dispatch Trucking",
    projectLink: "https://unitsdispatch.com/",
  },
  {
    projectImage: "/img/projects/vinsol.png",
    projectName: "Vintage Solutions",
    projectLink: "https://vinsol.net",
  },
  {
    projectImage: "/img/projects/asinternational.png",
    projectName: "AS International LLC.",
    projectLink: "/",
  },
];
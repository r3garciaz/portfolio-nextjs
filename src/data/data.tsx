import {
  // AcademicCapIcon,
  ArrowDownTrayIcon,
  // BuildingOffice2Icon,
  // CalendarIcon,
  EnvelopeIcon,
  // FlagIcon,
  // MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Reinaldo García',
  description: "Professional Portfolio - r3garciaz",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `I'm Reinaldo García.`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        <strong className="text-stone-100">Full Stack Software Developer</strong>
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://pub-69491211ff1b4b7a852b79efc883f329.r2.dev/resume.pdf',
      text: 'Resume',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
      Icon:EnvelopeIcon
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  // description: `I am proud to have a unique background that combines system administration, cloud computing, computer networking and software development. In my journey as a computer scientist, I have regularly faced technical challenges, solved IT problems, collaborated with multi-disciplinary teams of people. My love for software development drives me internally and I enjoy every opportunity to tackle deeper technical challenges and continue to learn. I have worked in many different industries, from one of the world's largest copper cathode production companies to falling back in love with software development, working methodologies such as DevOps and the cloud. I also have experience in cross-platform mobile application development.`,
  description: `I take pride in my distinctive background, seamlessly blending system administration, cloud computing, computer networking, and software development. Throughout my career, I've embraced diverse technical challenges, resolving complicated IT issues, and collaborating with cross-functional teams. My passion for software development propels me, and I enthusiastically tackle complex technical hurdles while maintaining a commitment to continuous learning.

I've navigated diverse industries, from a major copper cathode production company to rekindling my love for software development, where I embraced methodologies such as DevOps and leveraged the power of the cloud. One of my strengths lies in backend development.

In each endeavor, I prioritize tangible results, striving for positive impacts on projects. I invite you to explore my journey, where my unique skill set and dedication to innovation can contribute to your team's success.
`,
  aboutItems: [
    // {label: 'Location', text: 'Chile', Icon: MapIcon},
    // {label: 'Age', text: '40', Icon: CalendarIcon},
    // {label: 'Nationality', text: 'Chilean', Icon: FlagIcon},
    {label: 'Interests', text: 'Automobiles, Sciences, Nature, Understanding the "why" of things', Icon: SparklesIcon},
    // {label: 'Study', text: 'INACAP', Icon: AcademicCapIcon},
    // {label: 'Employment', text: 'BailacThor.', Icon: BuildingOffice2Icon},
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Spoken languages',
    skills: [
      {name: 'Spanish', level: 10},
      {name: 'English', level: 6}
    ],
  },
  {
    name: 'Programming languages',
    skills: [
      {name: 'C#', level: 9},
      {name: 'JavaScript', level: 7},
      {name: 'TypeScript', level: 7},
    ]
  },
  {
    name: 'Frontend',
    skills: [
      {name: 'HTML/CSS', level: 8},
      {name: 'Angular', level: 6},
      {name: 'Blazor', level: 6},
      {name: 'jQuery', level: 8},
    ]
  },
  {
    name: 'Backend',
    skills: [
      {name: '.NET', level: 9},
      {name: 'ASP.NET', level: 9},
    ]
  },
  {
    name: 'Mobile development',
    skills: [
      {name: 'React Native', level: 6},
      {name: 'Ionic', level: 8},
      {name: 'Cordova', level: 8},
    ],
  },
  {
    name: 'Cloud',
    skills: [
      {name: 'AWS', level: 8},
      {name:'Azure', level: 8},

    ]
  },
  {
    name: 'DevOps',
    skills: [
      {name: 'Docker', level: 9},
      {name: 'CI/CD', level: 8},
    ]
  },
  {
    name: 'Databases',
    skills: [
      {name: 'SQL', level: 8},
      {name: 'NoSQL', level: 6},
    ]
  },
  {
    name: 'Other',
    skills: [
      {name: 'Communication skills', level: 8},
      {name: 'Teamwork', level: 8},
      {name: 'Problem solving', level: 8}
    ]
  }
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Project title 1',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage1,
  },
  {
    title: 'Project title 2',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage2,
  },
  {
    title: 'Project title 3',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage3,
  },
  {
    title: 'Project title 4',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage4,
  },
  {
    title: 'Project title 5',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage5,
  },
  {
    title: 'Project title 6',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage6,
  },
  {
    title: 'Project title 7',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage7,
  },
  {
    title: 'Project title 8',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage8,
  },
  {
    title: 'Project title 9',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage9,
  },
  {
    title: 'Project title 10',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage10,
  },
  {
    title: 'Project title 11',
    description: 'Give a short description of your project here.',
    url: 'https://reactresume.com',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: '2005',
    location: 'INACAP, Copiapó. Chile',
    title: 'Programmer Analyst',
    content: <p>Graduated with Honors.</p>,
  },
  {
    date: '2001',
    location: 'Escuela Técnico Profesional (ETM), Copiapó. Chile',
    title: 'Administration and Services. Computer Specialty',
    content: <p>First steps in the world of programming. Graduated with Honors.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date:'April 2021 - Present',
    location:'Bailac Thor',
    title:'Senior Developer',
    content:(
      <div className='whitespace-pre-wrap'>
        <span>
          <ul className="list-disc">
            <li>Principal developer PascualETM, an asset management system for international use.</li>
            <li>Migration of PascualETM system from monolithic architecture to distributed monolith with implementation of multiple AWS services.</li>
            <li>Migration PascualETM to highly available and reliable redundant cloud architecture</li>
            <li>Implemented a DevOps culture and integrated CI/CD pipelines using Azure DevOps across AWS platforms</li>
            <li>Responsible for maintaining and developing new functionalities for Pascual Mobile and Pascual Mobile OT mobile applications on both
              <a href='https://play.google.com/store/apps/developer?id=Bailac+Thor' target='_blank'><span> Android</span></a> and
              <a href='https://apps.apple.com/cl/developer/bailac-thor/id1484989464'><span> iOS</span></a> operating systems.</li>
          </ul>
        </span>
        <br />
        <span className="flex-1 text-sm font-medium italic sm:flex-none">
          Skills: .NET • C# • API • JQuery • CSS • Fullstack • Javascript • GNU/Linux • AWS • Azure DevOps 
          • SQL • NoSQL • DevOps • Cloud Architecture • CI/CD • Docker • Ionic/Cordova • Android • iOS
        </span>
      </div>
    )
  },
  {
    date: 'March 2018 - April 2021',
    location: 'Bailac Thor',
    title: 'Developer',
    content: (
      <div>
        <span className="text-gray-500">Back to my developer path</span>...
        <br />
        <ul className='list-disc'>
          <li>
            Development of <a href="https://catalogo.pascualetm.com" target="_blank"><span
            className="text-orange-600 italic">PascualETM</span></a> <span className="text-gray-500">(Enterprise Tire Management)</span>system,
            a unique world-class asset management software for off-highway mining equipment.
          </li>
          <li>
            Development of <a href="https://wms.pascualetm.com" target="_blank"><span
            className="text-orange-600 italic">PascualWMS</span></a><span className="text-gray-500"> (Welding Management System)</span>,
            a welding work order control system for large-scale mining.
          </li>
          <li>
            PascualETM System commercial promotion website development.
          </li>
        </ul>
        <br />
        <span className="flex-1 text-sm font-medium italic sm:flex-none">
          Skills: .NET • C# • JQuery • CSS • Fullstack • Javascript • GNU/Linux • AWS • Azure DevOps • SQL • NoSQL
        </span>
      </div>
    )
  },
  {
    date:'September 2011 - March 2017',
    location:'Corporación Nacional del Cobre, Codelco',
    title:'Analyst',
    content:(
      <div>
        <ul className='list-disc'>
          <li>Area budget manager</li>
          <li>Statistician, Mine Maintenance Planning Department</li>
          <li>Implementation of CalemEAM, software for asset management and KPI for mining equipment</li>
          <li>Development and implementation of a KPI control system for reconciliation of payment statements of collaborating companies for the mine maintenance area.</li>
        </ul>
      </div>
    )
  },
  {
    date:'May 2008 - September 2011',
    location:'SQM Nitratos S.A',
    title:'IBM Maximo Administrator',
    content:(
      <div>
        <ul className='list-disc'>
          <li>In charge of IBM MAXIMO Asset Management System</li>
          <li>Head of the digitization area Maximo.</li>
          <li>Leader reimplementation of IBM MAXIMO system for the entire mine maintenance area.</li>
        </ul>
      </div>
    )
  },
  {
    date: 'February 2006 - December 2007',
    location: 'Pesquera Bahía Caldera',
    title: 'Advisor - Computer and Information Technology Department Manager',
    content: (
      <div>
        <ul className='list-disc'>
          <li>Responsible for the Computer and Information Technology department and its computer networks.</li>
          <li>Implementation and administration of GNU/Linux Server.</li>
        </ul>
      </div>
    ),
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {
      name: 'John Doe',
      text: 'Use this as an opportunity to promote what it is like to work with you. High value testimonials include ones from current or past co-workers, managers, or from happy clients.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/169.jpg',
    },
    {
      name: 'Jane Doe',
      text: 'Here you should write some nice things that someone has said about you. Encourage them to be specific and include important details (notes about a project you were on together, impressive quality produced, etc).',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/14.jpg',
    },
    {
      name: 'Someone else',
      text: 'Add several of these, and keep them as fresh as possible, but be sure to focus on quality testimonials with strong highlights of your skills/work ethic.',
      image: 'https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/69.jpg',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'Feel free to contact me for any consultation or discussion about a project. Your ideas are important and I am here to help you make them a reality. Let\'s get in touch.',
  items: [
    {
      type: ContactType.Email,
      text: 'garcia.reinaldo@gmail.com',
      href: 'mailto:garcia.reinaldo@gmail.com',
    },
    {
      type: ContactType.Location,
      text: 'Chile',
      href: '',
    },
    {
      type: ContactType.Github,
      text: 'r3garciaz',
      href: 'https://github.com/r3garciaz',
    },
    {
      type: ContactType.LinkedIn,
      text: 'r3garciaz',
      href: 'https://www.linkedin.com/in/r3garciaz/',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/r3garciaz'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/r3garciaz/'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/r3garciaz'},
];

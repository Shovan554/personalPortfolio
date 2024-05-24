import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Shovan Raut",
  title: "Innovative Tech Enthusiast",
  description:
    "A dedicated computer science student skilled in Python, SQL, React, web development and  Passionate about Robotics.",
  resumeLink: "resume.pdf",
};

export const openSource = {
  githubUserName: "shovan554",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:shovan.rautt@gmail.com",
  linkedin: "https://www.linkedin.com/in/shovan-raut-81537b18a/",
  github: "https://github.com/shovan554",
  instagram: "https://www.instagram.com/shovan._._",
  
};
export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "A student exploring every aspect of tech as possible",
  data: [
    {
      title: "Skills and Interests",
      lottieAnimationFile: "/lottie/exploring.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Programming in Python and SQL"),
        emoji("⚡ Web development using HTML, CSS, JavaScript and React"),
        emoji("⚡ Building projects with ReactJS Currently"),
        emoji("⚡ Database management with Oracle and SQLite"),
        emoji("⚡ Arduino programming (C/C++)"),
        emoji("⚡ Creating applications with Visual Basic and ASP.NET"),
        emoji("⚡ Designing with Fusion 360"),
        emoji("⚡ Research Assistant"),
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "SQL",
          iconifyTag: "vscode-icons:file-type-sql",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "ReactJS",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "HTML-CSS",
          iconifyTag: "vscode-icons:file-type-html",
        },
        {
          skillName: "ASP-NET",
          iconifyTag: "logos:aspnet",
        },
        {
          skillName: "Arduino",
          iconifyTag: "logos:arduino",
        },
        {
          skillName: "Oracle",
          iconifyTag: "logos:oracle",
        },
        {
          skillName: "SQLite",
          iconifyTag: "logos:sqlite",
        },
        {
          skillName: "Visual Basic",
          iconifyTag: "logos:visual-basic",
        },
        {
          skillName: "Fusion 360",
          iconifyTag: "logos:fusion-360",
        },
        {
          skillName: "Microsoft Office",
          iconifyTag: "logos:microsoft-office",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  
  {
    Stack: "Python",
    progressPercentage: "80",
  },
  {
    Stack: "C#",
    progressPercentage: "65",
  },
  {
    Stack: "Frontend/Design", 
    progressPercentage: "50", 
  },
  {
    Stack: "Database Management",
    progressPercentage: "70",
  },
  {
    Stack: "Arduino C++",
    progressPercentage: "70",
  },
  {
    Stack: "Data Structures and Algorithms", 
    progressPercentage: "60", 
  },
  {
    Stack: "ASP.NET",
    progressPercentage: "60",
  },
];



export const experience: ExperienceType[] = [
  {
    role: "Research Assistant",
    company: "CogAI",
    companyLogo: "/img/icons/common/cogai.png", 
    date: "Sep 2023 - Present",
    desc: "Designed and implemented experiments to evaluate the impact of backpropagation on CNN performance. Worked on a device enhancing mobility and environmental awareness for visually impaired individuals.",
  },
  {
    role: "Technical Lead",
    company: "Caldwell Robotics",
    companyLogo: "/img/icons/common/Caldwell.png", 
    date: "Feb 2024 - Present",
    desc: "Leading the technical team in the development of robotic solutions, focusing on innovation and practical applications.",
  },
  {
    role: "Media Analyst",
    company: "South Dakota Science Olympiad",
    companyLogo: "/img/icons/common/sdsci.png", 
    date: "Sep 2022 - Dec 2022",
    desc: "Built a website for the science Olympiad team. Managed and handled the social media accounts to increase visibility and engagement.",
  },
  {
    role: "Junior Developer",
    company: "E Automations",
    companyLogo: "/img/icons/common/e.webp", 
    date: "Jan 2022 - Jul 2022",
    desc: "Automated data import to a database built in Visual Basic. Developed a SaaS framework for managing, generating, and reporting commissions for dealers authorized by Ncell Pvt Ltd.",
  },
  {
    role: "Intern",
    company: "Silver Lining Pvt. Ltd.",
    companyLogo: "/img/icons/common/silverlining.png", // Leave blank as requested
    date: "Apr 2019 - Jun 2019",
    desc: "Built a help page for the SaaS framework using HTML and Bootstrap.",
  },
];
export const educationInfo: EducationType[] = [
  {
    schoolName: "Caldwell University",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "December 2022 - May 2026 (Expected)",
    desc: "Current GPA: 3.76",
    grade: "",
    descBullets: [
    ],
  },
  {
    schoolName: "University of South Dakota",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "August 2022 - December 2022",
    desc: "",
    grade: "",
    descBullets: [],
  },
  {
    schoolName: "Saint Xavier’s Maitighar",
    subHeader: "Cambridge International AS & A Levels",
    duration: "June 2019 - August 2021",
    desc: "",
    grade: "",
    descBullets: [],
  },
];


export const projects: ProjectType[] = [
//   {
//     name: "developer-portfolio",
//     desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
//     github: "https://github.com/1hanzla100/developer-portfolio",
//     link: "https://developer-portfolio-1hanzla100.vercel.app/",
//   },
//   {
//     name: "Giebo",
//     desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
//     link: "https://gibeo.io/",
//   },
//   {
//     name: "O Mejor Oferta",
//     desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
//     link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
//   },
//   {
//     name: "Hooligan Culture",
//     desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
//     link: "https://hooliganculture.com/",
//   },
];

export const feedbacks: FeedbackType[] = [
  // {
  //   name: "Syed Jamal",
  //   role: "Frontend Developer at Meganos Software",
  //   feedback:
  //     "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  // },
  // {
  //   name: "Wajahat Malek",
  //   role: "CEO at Duseca Software",
  //   feedback:
  //     "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  // },
  // {
  //   name: "Zaid Zaffar",
  //   role: "CEO at ZR Technologies",
  //   feedback:
  //     "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  // },
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Shovan Raut",
  description: greetings.description,
  author: "Shovan Raut",
  image: "img/dog.jpeg",
  url: "https://personal-portfolio-ivory-alpha.vercel.app/",
  keywords: [
    "Shovan",
    "Shovan Raut",
    "@shovan554",
    
  ],
};

import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const JOBS = [
  {
    company: "LinkedIn",
    startDate: "sep 2022",
    endDate: "nov 2023",
    role: "UI Frontend Engineer",
    description: [
      "Developed client-side features for the Online Jobs team, enhancing the job posting experience for recruiters and businesses seeking potential candidates for hire",
      "Integrated AI-generated job descriptions on the job-posting page, dramatically reducing the time and effort expended by businesses while posting job listings",
      "Enhanced developer experience with heavy contribution to the team’s migration from legacy API query to GraphQL, fostering agility and collaboration with a more intuitive API",
      "Ensured code quality and stability through comprehensive testing with Ember.js testing suite (based on QUnit)",
      "Heightened user experience and accessibility to be more inclusive through the use of assistive technology",
    ],
  },
  {
    company: "Age of Learning",
    startDate: "aug 2018",
    endDate: "aug 2022",
    role: "Software Engineer II",
    description: [
      "Built and managed the frontend for core products like ABCmouse, ABCmouse.jp, Adventure Academy, and ReadingIQ with some work on the backend (PHP)",
      "Increased opportunities for product growth by routinely conducting A/B testing, integrating iTunes/Amazon/Paypal IAP (In-App Purchase) payment methods, and updating design/legal copies",
      "Optimized team collaboration by developing internal tools for managing surveys, A/B testing, and ad campaigns",
      "Improved Google Lighthouse website performance scores to 90+ by hosting modern image formats (webp) over Cloudfront CDN (Content Delivery Network) and lazy-loading them on the client side",
    ],
  },
  {
    company: "Radial3D",
    startDate: "jul 2018",
    endDate: "aug 2023",
    role: "Software Engineering Intern",
    description: [
      "Spearheaded the early development phase in coordination with the CTO",
      "Protected reliability of code by writing and maintaining tests using Mocha/Chai",
    ],
  },
];

export const NAVBAR_BUTTONS = [
  {
    NAME: "LinkedIn",
    HREF: "https://www.linkedin.com/in/bghong/",
    ICON: FaLinkedin,
    COLOR: "#0077b5",
  },
  {
    NAME: "Github",
    HREF: "https://github.com/ebrianhong",
    ICON: FaGithub,
    COLOR: "#000000",
  },
  {
    NAME: "Email",
    HREF: "mailto:ebrianhong@gmail.com",
    ICON: HiOutlineMail,
    COLOR: "#e45656",
  },
  {
    NAME: "Resume",
    HREF: "/Resume_Hong_Brian.pdf",
    ICON: BsFillPersonLinesFill,
    COLOR: "#2eac65",
  },
];

export const SKILLS = {
  LANGUAGES: ["JavaScript", "TypeScript", "HTML", "CSS"],
  FRONTEND: [
    "React",
    "Redux",
    "Next.js",
    "Ember",
    "Vue",
    "Web Components",
    "lit-HTML (Polymer)",
    "Tailwind CSS",
  ],
  BACKEND: [
    "Node.js",
    "PHP",
    "Rest API",
    "GraphQL",
    "SQL (PostgreSQL, MySQL)",
    "NoSQL (MongoDB)",
    "Redis",
  ],
  TOOLS: [
    "Git",
    "npm",
    "Docker",
    "VS Code",
    "Test Driven Development (Jest, Mocha, Chai, QUnit)",
    "AWS",
    "Jenkins",
    "Gitlab CI (Continuous Integration)",
    "Cloudfront CDN (Continuous Delivery Network)",
    "Agile",
    "Figma",
  ],
};

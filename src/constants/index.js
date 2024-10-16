import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  framer,
  python,
  mysql,
  ss,
  bs,
  z2b
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "ML Engineer",
    icon: mobile,
  },
  {
    title: "Designer",
    icon: backend,
  },
  {
    title: "Prompt Engineer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "framer",
    icon: framer,
  },
];

const projects = [
  {
    name: "Scrible Sense",
    description:
      " This project significantly improved text detection accuracy in various real-world scenarios.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "transformer",
        color: "green-text-gradient",
      },
      {
        name: "flask",
        color: "pink-text-gradient",
      },
    ],
    image: ss,
    source_code_link: "https://github.com/Pavadareni/Handwritten-text-detector.git",
  },
  {
    name: "Z2b",
    description:
      " Reconstructed their existing website with modern design principles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: z2b,
    source_code_link: "https://github.com/Pavadareni/Zero2Billion.git",
  },
  {
    name: "Business-Strategy-Evaluation-Model",
    description:
      "predict the effectiveness of business strategies based on user data",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "streamlit",
        color: "green-text-gradient",
      },
    ],
    image: bs,
    source_code_link: "https://github.com/Pavadareni/Business-Strategy-Evaluation-Model-.git",
  },
];

export { services, technologies, projects };

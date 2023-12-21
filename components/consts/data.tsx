import { PhoneCall, User, Mail, GithubIcon, LinkedinIcon } from "lucide-react";

export const navLinks = [
  {
    path: "/",
    name: "home",
  },
  {
    path: "/projects",
    name: "my projects",
  },
  {
    path: "/contact",
    name: "contact",
  },
];

export const socialLinks = [
  { path: "/", name: <LinkedinIcon /> },
  { path: "/", name: <GithubIcon /> },
];

export const infoData = [
  { icon: <User />, text: "Ha Quyen" },
  { icon: <PhoneCall />, text: "+358417163232" },
  { icon: <Mail />, text: "quyentrankhanhha@gmail.com" },
];

export const qualificationData = [
  {
    title: "Education",
    data: [
      {
        university: "Oulu University of Applied Science",
        qualification: "Bachelor of Engineering",
        year: "08/2019-03/2023",
      },
    ],
  },
  {
    title: "Experience",
    data: [
      {
        company: "Fatman Oy",
        location: "Espoo, Finland",
        qualification: "Software Developer Trainee",
        year: "05/2023-present",
        tech: "JavaScript/ TypeScript, HTML/CSS, SCSS, Git, Svelte, SvelteKit, Svelte MUI, and Svelte Testing Library",
      },
      {
        company: "Keyloop (Finland) Oy",
        location: "Oulu, Finland",
        qualification: "Front-end Student Internship",
        year: "01/2022-09/2022",
        tech: "Javascript/ Typescript, HTML/CSS, React, MaterialUI, Git, Mock Service Worker, React Router, react-query, React Testing Library and Cypress",
      },
      {
        company: "thuocsi.vn",
        location: "Ho Chi Minh City, Viet Nam",
        qualification: "Associate Software Engineer",
        year: "11/2021-01-2022",
        tech: "Technologies consisting of Javascript, HTML/CSS, React, MaterialUI, NextJs, Git, Atlassian toolset (Jira, Confluence)",
      },
      {
        company: "thuocsi.vn",
        location: "Ho Chi Minh City, Viet Nam",
        qualification: "Software Developer Internship",
        year: "08/2021-11/2021",
      },
    ],
  },
];

export const certificateData = [
  {
    title: "certificate",
    data: [
      {
        title: "Understanding TypeScript - 2022 Edition",
        source: "Udemy",
        date: "Issed March 2022",
        description:
          "Learn what TypeScript is, what its features are and how to use it, how it improves JavaScript code, and how it helps avoid nasty bugs and errors.",
        link: "https://www.udemy.com/certificate/UC-53e70738-4669-4aea-ba41-b12e49054cc0/",
      },
      {
        title: "Fullstack open",
        source: "University of Helsinki",
        date: "Issed May 2021",
        description:
          "This course introduces me to mordern JavaScript-based web development. The main focus is on building single page applications with ReactJs that use RESTful APIs build with NodeJs",
        link: "https://studies.cs.helsinki.fi/stats/api/certificate/fullstackopen/en/533aacdf1a7d0784c67ac6c2593a883f",
      },
      {
        title: "CS50's Introduction to to Computer Sciece",
        date: "Issed Jun 2020",
        description:
          "How to think algorithmically and solve programming problems efficiently. Concepts like abstraction, algorithms, data structures, encapsulation, resource management, security, software engineering, and web development.",
        link: "https://certificates.cs50.io/a18072ac-6406-4362-aa6f-a96294de1827.pdf?size=A4",
      },
    ],
  },
];

export const skillData = [
  {
    title: "skills",
    data: [
      "HTML/ CSS",
      "SCSS",
      "Git",
      "JavaScript/ TypeScript",
      "Svelte",
      "SvelteKit",
      "Svelte MUI",
      "React",
      "Redux",
      "Nextjs",
      "Material UI",
      "Tailwind CSS",
      "shadcn/ui",
      "jQuery",
      "NodeJs",
      "ExpressJS",
      "Python",
      "Confluence",
      "Jira",
      "Postman",
      "C# (learning)",
    ],
  },
];

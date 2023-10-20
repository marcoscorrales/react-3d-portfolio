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
    vue,
    tailwind,
    bootstrap,
    mongodb,
    git,
    php,
    laravel,
    cysval,
    viajesreina,
    safecapital,
    festivalmusica,
    blogweb,
    sql,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "Acerca de mí",
    },
    {
      id: "work",
      title: "Experiencia",
    },
    {
      id: "contact",
      title: "Contacto",
    },
  ];
  
  const services = [
    {
      title: "Front end Developer",
      icon: web,
    },
    {
      title: "Responsive Design",
      icon: mobile,
    },
    {
      title: "Multilingual Development",
      icon: backend,
    },
    {
      title: "Project Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Vue",
      icon: vue,
    },
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
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Bootstrap",
      icon: bootstrap,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "php",
      icon: php,
    },
    {
      name: "laravel",
      icon: laravel,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      name: "viajesreina",
      company_name: "Viajes Reina SL",
      icon: viajesreina,
      iconBg: "#383E56",
      points: [
        "01",
        "02",
      ],
    },
    {
      name: "cysval",
      company_name: "Cysval SL",
      icon: cysval,
      iconBg: "#383E56",
      points: [
        "01",
        "02",
        "03",
        "04",
      ],
    },
  ];
    
  const projects = [
    {
      name: "Safe Capital",
      id: "01",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: safecapital,
      source_code_link: "https://github.com/marcoscorrales/safecapital-nextjs",
    },
    {
      name: "Festival Música",
      id: "02",
      tags: [
        {
          name: "html",
          color: "blue-text-gradient",
        },
        {
          name: "gulp",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: festivalmusica,
      source_code_link: "https://github.com/marcoscorrales/festivalMusica",
    },
    {
      name: "Blog web",
      id: "03",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "graphql",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: blogweb,
      source_code_link: "https://github.com/marcoscorrales/main-blog-nextjs",
    },
  ];
  
  export { services, technologies, experiences, projects };
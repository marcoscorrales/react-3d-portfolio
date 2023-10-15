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
      title: "Backend Developer",
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
      title: "Desarrollador de front-end",
      company_name: "Viajes Reina SL",
      icon: viajesreina,
      iconBg: "#383E56",
      date: "Septiembre 2023 - Actualidad",
      points: [
        "Creación de componentes reutilizables: Desarrollé componentes Vue.js reutilizables para acelerar el desarrollo y mantener la coherencia en la interfaz.",
        "Mejora de la experiencia de compra y la adaptación a dispositivos móviles: Identifiqué y solucioné errores en el proceso de compra, garantizando una experiencia sin problemas para los usuarios. Además, trabajé en la optimización de la interfaz de usuario para dispositivos móviles, asegurando que la aplicación web sea funcional y atractiva en pantallas de diferentes tamaños.",
      ],
    },
    {
      title: "Desarrollador de front-end",
      company_name: "CYSVAL SL",
      icon: cysval,
      iconBg: "#383E56",
      date: "Abril 2022 - Septiembre 2023",
      points: [
        "Mantenimiento y actualización de contenido: Realicé el mantenimiento y la actualización de sitios web existentes, garantizando que el contenido estuviera actualizado y alineado con los objetivos del negocio",
        "Traducción a inglés de la web: Encargado de la implementación de la traducción al inglés de la interfaz de usuario de la aplicación web, lo que permitió expandir el alcance a un público internacional y mejorar la usabilidad para usuarios de habla inglesa.",
        "Implementación de funcionalidades en gestor de productos: Colaboré en la implementación de mejoras  y funcionalidades en el gestor de productos, mejorando la eficiencia y la experiencia del usuario.",
        "Mantenimiento y actualización de endpoints API: Participé en el mantenimiento regular de los endpoints de la API, asegurando que la aplicación Vue.js pudiera acceder a datos actualizados y funcionar sin problemas.",
      ],
    },
  ];
    
  const projects = [
    {
      name: "Safe Capital",
      description:
        "Este proyecto es un portal web que ofrece información detallada sobre fondos de inversión, los usuarios pueden explorar datos de rendimiento histórico, comparar fondos y utilizar herramientas de filtrado.",
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
      description:
        "Este proyecto es un sitio web que presenta los horarios y detalles de un festival de música, permitiendo a los asistentes acceder fácilmente a la información esencial para su experiencia en el evento.",
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
      description:
        "Este proyecto es un blog de desarrollo web que ofrece una variedad de artículos para entusiastas del desarrollo. Los visitantes pueden explorar contenido sobre tendencias para mejorar en la programación web.",
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
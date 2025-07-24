import { createNav } from "../nav/nav";
import "./main.css";

export const main = () => {
  // ───── CREACIÓN DE ELEMENTOS ─────
  const main = document.createElement("section");

  // Contacto
  const contactInfo = document.createElement("section");
  const titleInformationContact = document.createElement("h2");
  const listIcon = document.createElement("ul");

  // Resumen
  const summary = document.createElement("section");
  const titleSummary = document.createElement("h2");
  const pDescription = document.createElement("p");

  // Experiencia
  const experience = document.createElement("section");
  const titleExperience = document.createElement("h2");
  const jobEntry = document.createElement("div");
  const textRol = document.createElement("h3");
  const listDescription = document.createElement("ul");

  // Skills
  const skills = document.createElement("section");
  const tituloSkills = document.createElement("h2");

  // Educación
  const education = document.createElement("section");
  const titleEducation = document.createElement("h2");
  const eduEntry = document.createElement("div");
  const eduTitle = document.createElement("h3");
  const universityDate = document.createElement("p");
  const eduList = document.createElement("ul");

  // ───── ASIGNACIÓN DE CLASES Y ATRIBUTOS ─────
  contactInfo.classList.add("contact-info");
  titleInformationContact.textContent = "Información de Contacto";

  summary.classList.add("summary");
  titleSummary.textContent = "Mi Sueño";
  pDescription.textContent =
    "Con el sueño de convertirme en un gran programador de software, busco cada día nuevos retos que me permitan crecer, aprender y poner en práctica lo que he venido construyendo. Me apasiona el desarrollo, disfruto resolver problemas y trabajar en equipo, y siempre estoy dispuesto a seguir mejorando mis habilidades. Sé que con disciplina, constancia y actitud puedo llegar lejos en este camino.";

  experience.classList.add("experience");
  titleExperience.textContent = "Mi Viaje Profesional";
  jobEntry.classList.add("job-entry");
  textRol.textContent = "Capitán de los Piratas del Sombrero de Paja";
  skills.classList.add("skills");
  tituloSkills.textContent = "Mis Frutas del Diablo (Habilidades)";

  education.classList.add("education");
  titleEducation.textContent = "Mi Entrenamiento";
  eduEntry.classList.add("edu-entry");
  eduTitle.textContent = "Academia de Entrenamiento Pirata";
  universityDate.classList.add("university-date");
  universityDate.textContent = "Isla CIMI SENA - 2 años de formación intensa";

  // Contacto
  const contactos = [
    {
      icon: "icon-mail",
      label: "Correo Electronico",
      value: "juancamilo.campobarrios@gmail.com",
    },
    { icon: "icon-phone", label: "Teléfono", value: "3013183474" },
    { icon: "icon-location", label: "Ubicación", value: "Santander/Giron" },
    { icon: "icon-location", label: "GitHub", value: "Junkamilo" },
  ];
  contactos.forEach(({ icon, label, value }) => {
    const li = document.createElement("li");
    const i = document.createElement("i");
    i.classList.add(icon);
    li.append(i, ` ${label}: ${value}`);
    listIcon.appendChild(li);
  });
  contactInfo.append(titleInformationContact, listIcon);

  // Resumen
  summary.append(titleSummary, pDescription);

  // Experiencia
  const descriptionItems = [
    "Desarrollo de una aplicación web musical utilizando HTML, CSS, JavaScript y consumo de API, enfocada en la visualización de artistas, géneros y canciones.",
    "Implementación de un diseño modular y responsive para mejorar la experiencia del usuario en diferentes dispositivos.",
    "Construcción de una aplicación de escritorio en Java (Swing) para digitalizar la toma y gestión de pedidos en un restaurante, adaptada a diferentes roles como administrador, mesero y cocina.",
    "Integración de base de datos con JDBC, creación de clases DAO, manejo de estados de pedidos y registro detallado de productos, observaciones y porciones.",
  ];
  descriptionItems.forEach((text) => {
    const li = document.createElement("li");
    li.textContent = text;
    listDescription.appendChild(li);
  });
  jobEntry.append(textRol,listDescription);
  experience.append(titleExperience, jobEntry);

  // Skills
  const skillCategories = [
    {
      title: "Desarrollo Web",
      logos: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
          alt: "HTML5",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
          alt: "CSS3",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
          alt: "JavaScript",
        },
      ],
    },
    {
      title: "Backend & Bases de Datos",
      logos: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
          alt: "Java",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
          alt: "Node.js",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
          alt: "MySQL",
        },
      ],
    },
    {
      title: "Herramientas & Control de Versiones",
      logos: [
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
          alt: "Git",
        },
        {
          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
          alt: "GitHub",
        },
      ],
    },
  ];

  skills.appendChild(tituloSkills);
  skillCategories.forEach(({ title, logos }) => {
    const skillCategory = document.createElement("div");
    skillCategory.classList.add("skill-category");

    const h3 = document.createElement("h3");
    h3.textContent = title;

    const logosContainer = document.createElement("div");
    logosContainer.classList.add("skill-logos");

    logos.forEach(({ src, alt }) => {
      const img = document.createElement("img");
      img.setAttribute("src", src);
      img.setAttribute("alt", alt);
      img.setAttribute("title", alt);
      logosContainer.appendChild(img);
    });

    skillCategory.append(h3, logosContainer);
    skills.appendChild(skillCategory);
  });

// Educación
const eduItems = [
  "Formación en Análisis y Desarrollo de Software en el SENA – CIMI Girón.",
  "Aprendizaje de lenguajes como Java, HTML, CSS y JavaScript, con enfoque práctico.",
  "Diseño, desarrollo e implementación de aplicaciones web y de escritorio.",
  "Uso de bases de datos relacionales y principios de programación orientada a objetos.",
];
eduItems.forEach((text) => {
  const li = document.createElement("li");
  li.textContent = text;
  eduList.appendChild(li);
});

eduEntry.append(eduTitle, universityDate, eduList);
education.append(titleEducation, eduEntry);


  // ───── UNIR TODO ─────
  main.append(contactInfo, summary, experience, skills, education);
  return main;
};

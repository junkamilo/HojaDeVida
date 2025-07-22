import { createNav } from "../nav/nav";
import "./main.css";

export const main = () => {
  // ───── CREACIÓN DE ELEMENTOS ─────
  const main = document.createElement("section");

  const nav = createNav();

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
  const companyDate = document.createElement("p");
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
  pDescription.textContent = "Con la ambición de un futuro Rey Pirata y la determinación inquebrantable para superar cualquier obstáculo, busco nuevos desafíos para expandir mis horizontes y dominar nuevas habilidades. Mi espíritu aventurero y mi capacidad de liderazgo me permiten adaptarme rápidamente y liderar equipos hacia el éxito, siempre con una sonrisa. ¡Seré el Rey de los Desarrolladores!";

  experience.classList.add("experience");
  titleExperience.textContent = "Mi Viaje Profesional";
  jobEntry.classList.add("job-entry");
  textRol.textContent = "Capitán de los Piratas del Sombrero de Paja";
  companyDate.classList.add("company-date");
  companyDate.textContent = "Gran Line - Desde 2000";

  skills.classList.add("skills");
  tituloSkills.textContent = "Mis Frutas del Diablo (Habilidades)";

  education.classList.add("education");
  titleEducation.textContent = "Mi Entrenamiento";
  eduEntry.classList.add("edu-entry");
  eduTitle.textContent = "Academia de Entrenamiento Pirata";
  universityDate.classList.add("university-date");
  universityDate.textContent = "Isla Rusukaina - 2 años de formación intensa";

  // Contacto
  const contactos = [
    { icon: "icon-mail", label: "Email", value: "junkabeltran@gmail.com" },
    { icon: "icon-phone", label: "Teléfono", value: "3013183474" },
    { icon: "icon-linkedin", label: "LinkedIn", value: "linkedin.com/in/luffy-pirateking" },
    { icon: "icon-location", label: "Ubicación", value: "Santander/Giron" },
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
    "Liderazgo y gestión de un equipo multidisciplinario para superar desafíos complejos en entornos dinámicos.",
    "Planificación estratégica y ejecución de misiones de alto riesgo, siempre con resultados exitosos.",
    "Negociación efectiva con diversas facciones para asegurar recursos y alianzas estratégicas.",
    "Resolución creativa de problemas bajo presión, manteniendo la moral del equipo.",
  ];
  descriptionItems.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    listDescription.appendChild(li);
  });
  jobEntry.append(textRol, companyDate, listDescription);
  experience.append(titleExperience, jobEntry);

  // Skills
  const skillCategories = [
    {
      title: "Desarrollo Web",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", alt: "HTML5" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", alt: "CSS3" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", alt: "JavaScript" },
      ],
    },
    {
      title: "Backend & Bases de Datos",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg", alt: "Java" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", alt: "Node.js" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg", alt: "MySQL" },
      ],
    },
    {
      title: "Herramientas & Control de Versiones",
      logos: [
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", alt: "Git" },
        { src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg", alt: "GitHub" },
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
    "Maestría en Haki de Armamento y Observación.",
    "Desarrollo de resistencia y fuerza para desafíos a gran escala.",
    "Estrategias de supervivencia y trabajo en equipo en entornos hostiles.",
  ];
  eduItems.forEach(text => {
    const li = document.createElement("li");
    li.textContent = text;
    eduList.appendChild(li);
  });

  eduEntry.append(eduTitle, universityDate, eduList);
  education.append(titleEducation, eduEntry);

  // ───── UNIR TODO ─────
  main.append(nav,contactInfo, summary, experience, skills, education);
  return main;
};



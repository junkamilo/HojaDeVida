// nav.js
import "./nav.css";

export const createNav = () => {
  const navElement = document.querySelector("nav");

  if (!navElement) {
    console.warn("⚠️ No se encontró el <nav> en el HTML.");
    return;
  }

  // Limpia el contenido anterior sin eliminar el <nav>
  navElement.innerHTML = "";

  const ul = document.createElement("ul");

  const navItems = [
    { text: "Inicio", href: "#" },
    { text: "Proyectos Java", href: "#ProyectoJava" },
    { text: "Proyectos Web", href: "#Proyectoweb" }
  ];

  navElement.classList.add("main-nav");
  ul.classList.add("nav-list");

  navItems.forEach(item => {
    const li = document.createElement("li");
    const a = document.createElement("a");

    li.classList.add("nav-item");
    a.classList.add("nav-link");

    a.textContent = item.text;
    a.href = item.href;

    li.appendChild(a);
    ul.appendChild(li);
  });

  navElement.appendChild(ul);
};


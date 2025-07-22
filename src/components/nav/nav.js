import "./nav.css";

export const createNav = () => {
    // Creamos los elementos del nav
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    // Array de objetos para las secciones de navegación
    const navItems = [
        { text: "Inicio", href: "#" },
        { text: "Proyectos Java", href: "#ProyectoJava" },
        { text: "Proyectos Web", href: "#Proyectoweb" }
    ];

    // Agregamos clases y contenido a los elementos creados
    nav.classList.add("main-nav");
    ul.classList.add("nav-list");

    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        li.classList.add("nav-item");
        a.classList.add("nav-link");

        a.textContent = item.text;
        a.href = item.href;

        // NO añadimos ningún evento, dejamos que el navegador cambie el hash normalmente

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    return nav;
};

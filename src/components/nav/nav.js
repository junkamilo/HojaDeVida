import "./nav.css";
export const createNav = () => {
    //Creamos los elementos del nav
    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    // Array de objetos para las secciones de navegación
    const navItems = [
        { text: "Inicio", href: "#" },
        { text: "Proyectos Java", href: "#java-projects" },
        { text: "Proyectos Web", href: "#web-projects" }
    ];

    //Agregamos clases y contenido a los elementos creados
    nav.classList.add("main-nav");
    ul.classList.add("nav-list");

    navItems.forEach(item => {
        const li = document.createElement("li");
        const a = document.createElement("a");

        li.classList.add("nav-item");
        a.classList.add("nav-link");

        a.textContent = item.text;
        a.href = item.href;

        // Añadir evento de click para scroll suave si las secciones existen en la página
        a.addEventListener("click", (e) => {
            if (item.href.startsWith("#") && item.href !== "#") {
                e.preventDefault();
                const targetId = item.href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: "smooth"
                    });
                }
            }
        });

        li.appendChild(a);
        ul.appendChild(li);
    });

    nav.appendChild(ul);

    return nav;
};
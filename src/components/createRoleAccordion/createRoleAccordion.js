import "./createRoleAccordion.css";

/**
 * Crea un componente de acordeón para un rol específico.
 * @param {string} id - Un ID único para este panel del acordeón (ej: "adminRole", "userRole").
 * @param {string} title - El título del rol (ej: "Rol Administrador").
 * @param {Array<string>} imageUrls - Un array de URLs de imágenes para este rol.
 * @param {Array<string>} functionsList - Un array de strings describiendo las funciones de este rol.
 * @returns {HTMLElement} El elemento HTML del acordeón del rol.
 */
export const createRoleAccordion = (id, title, imageUrls = [], functionsList = []) => {
    // 1. Crear los elementos principales
    const accordionContainer = document.createElement("div");
    accordionContainer.classList.add("role-accordion");
    accordionContainer.setAttribute("id", id);

    const header = document.createElement("div");
    header.classList.add("accordion-header");

    const titleSpan = document.createElement("span");
    titleSpan.classList.add("accordion-title");
    titleSpan.textContent = title;

    const toggleIcon = document.createElement("i");
    toggleIcon.classList.add("fas", "fa-chevron-down", "accordion-icon"); // Font Awesome icon para flecha hacia abajo

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.style.maxHeight = "0"; // Inicialmente colapsado
    content.style.overflow = "hidden"; // Ocultar el contenido desbordado
    content.style.transition = "max-height 0.4s ease-out, padding 0.4s ease-out"; // Transición suave

    // 2. Llenar el contenido con imágenes y funciones
    if (imageUrls.length > 0) {
        const imageGallery = document.createElement("div");
        imageGallery.classList.add("role-image-gallery");
        imageUrls.forEach(url => {
            const img = document.createElement("img");
            img.src = url;
            img.alt = `Imagen de función de ${title}`;
            img.classList.add("role-image");
            imageGallery.appendChild(img);
        });
        content.appendChild(imageGallery);
    }

    if (functionsList.length > 0) {
        const functionsUl = document.createElement("ul");
        functionsUl.classList.add("role-functions-list");
        functionsList.forEach(func => {
            const li = document.createElement("li");
            li.textContent = func;
            functionsUl.appendChild(li);
        });
        content.appendChild(functionsUl);
    }

    // 3. Ensamblar el header
    header.appendChild(titleSpan);
    header.appendChild(toggleIcon);

    // 4. Añadir evento de clic para expandir/colapsar
    header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight !== "0px"; // Comprobamos si está abierto

        if (isOpen) {
            content.style.maxHeight = "0";
            content.style.padding = "0 1em"; // Elimina el padding cuando está colapsado
            toggleIcon.classList.remove("fa-chevron-up");
            toggleIcon.classList.add("fa-chevron-down");
        } else {
            // Para expandir, calculamos la altura real del contenido.
            // Esto es necesario para la transición de max-height.
            content.style.maxHeight = content.scrollHeight + "px";
            content.style.padding = "1em"; // Añade padding cuando se expande
            toggleIcon.classList.remove("fa-chevron-down");
            toggleIcon.classList.add("fa-chevron-up");
        }
    });

    // 5. Añadir elementos al contenedor principal del acordeón
    accordionContainer.appendChild(header);
    accordionContainer.appendChild(content);

    return accordionContainer;
};
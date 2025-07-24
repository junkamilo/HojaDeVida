// createRoleAccordion.js (No necesita cambios funcionales aquí)

import "./createRoleAccordion.css";

/**
 * Crea un componente de acordeón para un rol específico.
 * @param {string} id - Un ID único para este panel del acordeón (ej: "adminRole", "userRole").
 * @param {string} title - El título del rol (ej: "Rol Administrador").
 * @param {Array<{ descripcion: string, imagen: string }>} items - Lista de funciones con sus imágenes.
 * @returns {HTMLElement} El elemento HTML del acordeón del rol.
 */
export const createRoleAccordion = (id, title, items = []) => {
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
    // Usamos Font Awesome para el icono
    toggleIcon.classList.add("fas", "fa-chevron-down", "accordion-icon");

    const content = document.createElement("div");
    content.classList.add("accordion-content");
    content.style.maxHeight = "0";
    content.style.overflow = "hidden";
    content.style.transition = "max-height 0.4s ease-out, padding 0.4s ease-out";


    // 2. Llenar contenido con items (texto + imagen)
    if (items.length > 0) {
        const itemsContainer = document.createElement("div");
        itemsContainer.classList.add("role-items-container");

        items.forEach(({ descripcion, imagen }) => {
            const itemDiv = document.createElement("div");
            itemDiv.classList.add("role-item");

            const descP = document.createElement("p");
            descP.classList.add("role-description");
            descP.textContent = descripcion;

            if (imagen) {
                const img = document.createElement("img");
                img.src = imagen;
                img.alt = descripcion;
                img.classList.add("role-image");
                // Asegúrate de que la descripción y la imagen estén dentro del mismo itemDiv
                itemDiv.appendChild(descP); // Descripción primero
                itemDiv.appendChild(img);   // Luego la imagen
            } else {
                itemDiv.appendChild(descP);
            }

            itemsContainer.appendChild(itemDiv);
        });

        content.appendChild(itemsContainer);
    }

    // 3. Ensamblar encabezado y evento
    header.appendChild(titleSpan);
    header.appendChild(toggleIcon);

    header.addEventListener("click", () => {
        const isOpen = content.style.maxHeight !== "0px";

        // Calcula la altura del contenido dinámicamente
        // Asegúrate de que el padding se aplique y sume al scrollHeight
        if (isOpen) {
            content.style.maxHeight = "0";
            content.style.padding = "0 1.5em"; // Restaura el padding inicial (sin padding top/bottom visible)
            toggleIcon.classList.remove("fa-chevron-up");
            toggleIcon.classList.add("fa-chevron-down");
        } else {
            // Establece un padding temporal para calcular el scrollHeight con el padding deseado
            content.style.padding = "1.5em"; // Aplica el padding deseado
            content.style.maxHeight = content.scrollHeight + "px"; // Calcula la altura con el padding
            toggleIcon.classList.remove("fa-chevron-down");
            toggleIcon.classList.add("fa-chevron-up");
        }
    });

    // 4. Armar todo
    accordionContainer.appendChild(header);
    accordionContainer.appendChild(content);

    return accordionContainer;
};

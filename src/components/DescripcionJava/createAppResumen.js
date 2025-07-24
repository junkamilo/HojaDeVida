// createAppResumen.js (Actualizado)

import "./createAppResumen.css";

export const createAppResumen = () => {
    const resumenContainer = document.createElement("div");
    resumenContainer.className = "app-resumen";

    const title = document.createElement("h2");
    title.textContent = "Resumen del Proyecto Restaurante en Java";

    const paragraph = document.createElement("p");
    paragraph.textContent = `Este aplicativo de escritorio es un prototipo funcional desarrollado en Java utilizando Swing y conexión con base de datos relacional (JDBC). Su objetivo es digitalizar y optimizar el proceso de toma y gestión de pedidos dentro de un restaurante real.`;

    const listTitle = document.createElement("h3");
    listTitle.textContent = "Funciones Clave por Rol:"; // Título ligeramente mejorado

    const list = document.createElement("ul");

    const items = [
        "🧩 <span class=\"role-name\">Administrador</span>: configura el menú del día, visualiza los pedidos, gestiona su estado y tiene acceso completo a las funcionalidades del sistema.",
        "🧾 <span class=\"role-name\">Mesero</span>: toma pedidos por mesa, selecciona tipo de menú, sopa y registra observaciones personalizadas.",
        "🍳 <span class=\"role-name\">Cocina</span>: recibe los pedidos en tiempo real, visualiza los detalles y actualiza su estado a Listo o Entregado.",
        "🧑‍🍽️ <span class=\"role-name\">Mesero Auxiliar</span>: apoya al mesero principal en el servicio, visualiza pedidos asignados y ayuda en la atención de las mesas.",
    ];

    items.forEach(text => {
        const li = document.createElement("li");
        li.innerHTML = text;
        list.appendChild(li);
    });

    const finalNote = document.createElement("p");
    finalNote.textContent = `Este sistema mejora la comunicación entre áreas, reduce errores manuales y facilita el control de los pedidos en tiempo real. Actualmente está en proceso de implementación en un entorno real para evaluar su impacto y funcionamiento en el día a día del restaurante.`;
    finalNote.classList.add("final-note"); // Clase para estilizar la nota final

    resumenContainer.append(title, paragraph, listTitle, list, finalNote);
    return resumenContainer;
};


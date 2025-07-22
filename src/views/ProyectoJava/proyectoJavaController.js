import { createRoleAccordion } from "../../components/createRoleAccordion/createRoleAccordion";

export const proyectoJava = () => {
    const app = document.getElementById("app");

    // Limpiar contenido anterior (opcional si `loadView` ya lo hace)
    app.innerHTML = "";

    // Crear un título o encabezado (opcional)
    const heading = document.createElement("h2");
    heading.textContent = "Roles en Proyecto Java";
    app.appendChild(heading);

    // Crear acordeones
    const adminAccordion = createRoleAccordion(
        "adminRole",
        "Rol Administrador",
        [
            "https://via.placeholder.com/150",
            "https://via.placeholder.com/150"
        ],
        [
            "Gestionar productos del menú",
            "Ver estadísticas de ventas",
            "Administrar usuarios"
        ]
    );

    const meseroAccordion = createRoleAccordion(
        "meseroRole",
        "Rol Mesero",
        [
            "https://via.placeholder.com/150"
        ],
        [
            "Tomar pedidos",
            "Enviar órdenes a cocina",
            "Ver menú del día"
        ]
    );

    const cocinaAccordion = createRoleAccordion(
        "cocinaRole",
        "Rol Cocina",
        [],
        [
            "Ver pedidos pendientes",
            "Cambiar estado del pedido",
            "Marcar como entregado"
        ]
    );
    const meseroAuxiliar = createRoleAccordion(
        "cocinaRole",
        "Rol Mesero Auxiliar",
        [],
        [
            "Ver pedidos pendientes",
            "Cambiar estado del pedido",
            "Marcar como entregado"
        ]
    );

    // Agregar acordeones al contenedor
    app.appendChild(adminAccordion);
    app.appendChild(meseroAccordion);
    app.appendChild(cocinaAccordion);
    app.appendChild(meseroAuxiliar);
};

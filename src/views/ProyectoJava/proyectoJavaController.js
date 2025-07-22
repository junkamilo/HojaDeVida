import { createRoleAccordion } from "../../components/createRoleAccordion/createRoleAccordion";
import adminImg1 from '../../assets/roles/admin1.png';
import adminImg2 from '../../assets/roles/admin2.png';
import adminImg3 from '../../assets/roles/admin3.png';
import adminImg4 from '../../assets/roles/admin4.png';
import adminImg5 from '../../assets/roles/admin5.png';
import adminImg6 from '../../assets/roles/admin6.png';
import mesero1 from '../../assets/roles/mesero1.png';
import mesero2 from '../../assets/roles/mesero2.png';
import mesero3 from '../../assets/roles/mesero3.png';
import cocinero1 from '../../assets/roles/cocinero1.png';
import meseroAuxiliar1 from '../../assets/roles/meseroAuxiliar1.png';

export const proyectoJava = () => {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Roles en Proyecto Java";
    app.appendChild(heading);

    const adminAccordion = createRoleAccordion(
        "adminRole",
        "Rol Administrador",
        [
            { descripcion: "Gestionar productos del menú", imagen: adminImg1 },
            { descripcion: "Tomar pedidos", imagen: adminImg2 },
            { descripcion: "Ver detalles de los pedidos", imagen: adminImg3 },
            { descripcion: "Getion del monto total del dia", imagen: adminImg4 },
            { descripcion: "Gestion del inventario", imagen: adminImg5 },
            { descripcion: "Gestion de usuarios", imagen: adminImg6 }
        ]
    );

    const meseroAccordion = createRoleAccordion(
        "meseroRole",
        "Rol Mesero",
        [
            { descripcion: "Tomar pedidos", imagen:mesero1 },
            { descripcion: "Enviar órdenes a cocina", imagen:mesero2  },
            { descripcion: "Ver menú del día", imagen: mesero3 }
        ]
    );

    const cocinaAccordion = createRoleAccordion(
        "cocinaRole",
        "Rol Cocina",
        [
            { descripcion: "Ver pedidos pendientes", imagen: cocinero1 }
        ]
    );

    const meseroAuxiliar = createRoleAccordion(
        "meseroAuxiliarRole",
        "Rol Mesero Auxiliar",
        [
            { descripcion: "Ver pedidos pendientes", imagen: meseroAuxiliar1}
        ]
    );

    app.appendChild(adminAccordion);
    app.appendChild(meseroAccordion);
    app.appendChild(cocinaAccordion);
    app.appendChild(meseroAuxiliar);
};


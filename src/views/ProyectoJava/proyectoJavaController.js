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
import { createAppResumen } from "../../components/DescripcionJava/createAppResumen";

export const proyectoJava = () => {
    const app = document.getElementById("app");
    app.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Roles en Proyecto Java";
    app.appendChild(heading);

    const descripcionJava = createAppResumen();

const adminAccordion = createRoleAccordion(
    "adminRole",
    "Rol Administrador",
    [
        { descripcion: "Interfaz para gestionar los productos disponibles en el menú del día, organizados por categorías.", imagen: adminImg1 },
        { descripcion: "Formulario accesible para tomar pedidos desde el rol administrador en caso de ser necesario.", imagen: adminImg2 },
        { descripcion: "Vista detallada de cada pedido realizado, incluyendo mesa, productos, estado y observaciones.", imagen: adminImg3 },
        { descripcion: "Panel que muestra el monto total recaudado durante el día, desglosado por pedidos realizados.", imagen: adminImg4 },
        { descripcion: "Gestión de inventario para registrar y actualizar las existencias de productos del restaurante.", imagen: adminImg5 },
        { descripcion: "Módulo para crear, editar o eliminar usuarios en el sistema y asignarles sus respectivos roles.", imagen: adminImg6 }
    ]
);

const meseroAccordion = createRoleAccordion(
    "meseroRole",
    "Rol Mesero",
    [
        { descripcion: "Formulario para registrar pedidos por mesa, seleccionando menú, sopas y observaciones.", imagen: mesero3 },
        { descripcion: "Funcionalidad para enviar pedidos directamente a cocina en tiempo real.", imagen: mesero1 },
        { descripcion: "Vista en solo lectura del menú del día, para facilitar la toma de pedidos.", imagen: mesero2 }
    ]
);

const cocinaAccordion = createRoleAccordion(
    "cocinaRole",
    "Rol Cocina",
    [
        { descripcion: "Panel donde se listan los pedidos pendientes por preparar, con detalles y opción para marcar como Listo o Entregado.", imagen: cocinero1 }
    ]
);

const meseroAuxiliar = createRoleAccordion(
    "meseroAuxiliarRole",
    "Rol Mesero Auxiliar",
    [
        { descripcion: "Interfaz para visualizar pedidos asignados y asistir en la atención de las mesas.", imagen: meseroAuxiliar1 }
    ]
);


    app.append(descripcionJava,adminAccordion,meseroAccordion,cocinaAccordion,meseroAuxiliar);
};


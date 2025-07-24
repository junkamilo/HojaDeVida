import FotoPerfil from '../../assets/fotoPerfil/fotoPerfil.jpeg';
import "./header.css";

export const header = () => {
  const headerElement = document.querySelector("header");

  if (!headerElement) {
    console.error("⚠️ No se encontró el <header> en el HTML.");
    return;
  }

  if (headerElement.hasChildNodes()) return; // ya está renderizado

  const contentHeader = document.createElement("div");
  const logoPerfil = document.createElement("div");
  const imgPerfil = document.createElement("img");
  const titleSection = document.createElement("div");
  const tituloNombre = document.createElement("h1");
  const rol = document.createElement("p");

  contentHeader.classList.add("header-content");
  logoPerfil.classList.add("logo-perfil");
  imgPerfil.setAttribute("src", FotoPerfil);
  imgPerfil.setAttribute("alt", "Juan Camilo Beltran Campo - Foto de Perfil");
  imgPerfil.classList.add("profile-img");
  titleSection.classList.add("title-section");

  tituloNombre.textContent = "JUAN CAMILO BELTRAN";
  rol.textContent = "Capitán / Desarrollador Junior en Formación";

  logoPerfil.appendChild(imgPerfil);
  titleSection.append(tituloNombre, rol);
  contentHeader.append(logoPerfil, titleSection);
  headerElement.appendChild(contentHeader);
};


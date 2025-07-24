import { footer } from "../../components/footer/footer";
import { header } from "../../components/header/header";
import { main } from "../../components/main/main";
import { createNav } from "../../components/nav/nav";

export const inicioController = () => {
  const app = document.querySelector("#app");
  const headerContainer = document.querySelector("header");
  const footerContainer = document.querySelector("footer");

  if (!app || !headerContainer || !footerContainer) {
    console.error("❌ Uno de los contenedores principales no se encontró.");
    return;
  }

  app.innerHTML = "";
  headerContainer.innerHTML = "";
  footerContainer.innerHTML = "";

  header();
  createNav();
  app.appendChild(main());
  footer();
};


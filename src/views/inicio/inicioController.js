import { footer } from "../../components/footer/footer";
import { header } from "../../components/header/header";
import { main } from "../../components/main/main";

export const inicioController = () => {
  const app = document.querySelector("#app");
  app.innerHTML = "";

  document.querySelector("header").replaceWith(header());
  app.appendChild(main());
  document.querySelector("footer").replaceWith(footer());
};

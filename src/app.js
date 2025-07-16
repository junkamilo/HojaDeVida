import { header } from './components/header/header';
import { createNav } from './components/nav/nav';
import { router } from './router/router';
import './style.css'

const app = document.getElementById("app");
console.log(app);


// Cargar el router al cambiar hash o al iniciar
window.addEventListener('hashchange', () => {
  router(app);
});

window.addEventListener('DOMContentLoaded', () => {
  router(app);
});
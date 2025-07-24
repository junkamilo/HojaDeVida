import { header } from './components/header/header.js';
import { createNav } from './components/nav/nav.js';

import { router } from './router/router';
import './style.css'

const app = document.getElementById("app");

// Cargar el router al cambiar hash o al iniciar
window.addEventListener('hashchange', () => {
  header();
  createNav();
  router(app);
});

window.addEventListener('DOMContentLoaded', () => {
  header();
  createNav();
  router(app);
});
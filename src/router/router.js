import { loadView } from "../helpers/loadview";
import { inicioController } from "../views/inicio/inicioController";
import { proyectoJava } from "../views/ProyectoJava/proyectoJavaController";
import { proyectoWeb } from "../views/ProyectoWeb/proyectoWebController";

const routes = {
    "/":{
        "template": "inicio"/"inicio.html",
        controlador: inicioController
    },ProyectoJava:{
        "template": "ProyectoJava"/"proyectoJava.html",
        controlador: proyectoJava
    },Proyectoweb:{
        "template": "ProyectoWeb"/"proyectoWeb.html",
        controlador: proyectoWeb
    },
}

// función asincrónica exportada llamada router, recibe el contenedor principal de la app
export const router = async (app) => {

  // obtiene el fragmento de la URL después del #
  const hash = location.hash.slice(1);

  // busca si esa ruta existe y devuelve el objeto ruta y los parámetros
  const [ rutas, params ] = matchRoute(hash)

  // si no se encontró una ruta válida
  if(!rutas){
    // limpia las clases del contenedor
    app.className = "";

    // carga la vista por defecto (inicio)
    await loadView(app, 'inicio/inicio.html');

    // ejecuta el controlador de inicio
    inicioController();

    // termina la función
    return
  }

  // limpia las clases del contenedor
  app.className = "";

  // carga la vista correspondiente a la ruta encontrada
  await loadView(app, rutas.template);

  // ejecuta el controlador asociado a esa ruta, pasando los parámetros
  rutas.controlador(params)
}

const matchRoute = (hash) => {  
  // divide la ruta del navegador por '/' → ej: "Perfil/123" → ["Perfil", "123"]
  const arreglo = hash.split('/') ;  

  // recorre todas las rutas registradas en el objeto routes
  for (const route in routes) {

    // divide la ruta registrada → ej: "Perfil/:id" → ["Perfil", ":id"]
    const b = route.split('/');   

    // si no tienen la misma cantidad de partes, no hay coincidencia → salta
    if (b.length !== arreglo.length) continue
    
    // objeto para guardar los parámetros dinámicos encontrados
    const params = {}

    // verifica si todas las partes coinciden (literal o como parámetro)
    const matched = b.every((parte, i) => {      

      // si la parte empieza con ":" → es un parámetro (como ":id")
      if (parte.startsWith(":")) {   
        const partName = parte.slice(1); // quita ":" → queda "id"
        const value = arreglo[i];       // toma el valor de la URL → ej: "123"
        params[partName] = value;       // guarda: { id: "123" }
        return true                     // sigue validando
      }

      // si la parte es igual a la parte de la URL → también es válido
      if (parte === arreglo[i]){
        return true
      }

      // si no coincidió ni como texto ni como parámetro → falla
    }); 

    // si coincidieron todas las partes → retorna la ruta y los parámetros
    if (matched) {      
      return [routes[route], params]
    }
  }

  // si no se encontró ninguna coincidencia → retorna null
  return [null, null]
}



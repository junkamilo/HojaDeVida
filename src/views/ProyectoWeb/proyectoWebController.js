import { createRoleAccordion } from "../../components/createRoleAccordion/createRoleAccordion";
import inicio from '../../assets/MusicWeb/InicioMusica.png';
import perfiluser1 from '../../assets/MusicWeb/perfilUsuario1.png';
import perfiluser2 from '../../assets/MusicWeb/perfilUsuario2.png';
import perfiluser3 from '../../assets/MusicWeb/perfilUsuario3.png';
import perfiluserArtista1 from '../../assets/MusicWeb/SubirAlbum.png';
import perfiluserArtista2 from '../../assets/MusicWeb/misPUblicaciones.png';
import perfiluserArtista3 from '../../assets/MusicWeb/perfilArtistaUsuario.png';
import Albumfav from '../../assets/MusicWeb/AlbumesFavoritos.png';
import GenerosFav from '../../assets/MusicWeb/GenerosFavoritos.png';
import CancionesFav from '../../assets/MusicWeb/CancionesFavoritas.png';
import ArtistasFav from '../../assets/MusicWeb/ArtistasFavoritos.png';
import pefilAlbum from '../../assets/MusicWeb/pefilALbum1.png';
import pefilArtista1 from '../../assets/MusicWeb/perfilArtista1.png';
import pefilArtista2 from '../../assets/MusicWeb/perfilArtista2.png';
import pefilgeneroMusical1 from '../../assets/MusicWeb/perfilGenero1.png';
import pefilgeneroMusical2 from '../../assets/MusicWeb/perfilGenero2.png';
import { createAppResumenMusica } from "../../components/DescripcionWeb/createAppResumenMusica";

export const proyectoWeb = () =>{
    const app = document.getElementById("app");
    app.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Aplicativo Web de Musica";
    app.appendChild(heading);

    const descripcionMusica = createAppResumenMusica();


    const githubSection = document.createElement("div");
    githubSection.classList.add("github-section");

    const githubLink = document.createElement("a");
    githubLink.href = "https://github.com/junkamilo/MusicApp.git";
    githubLink.target = "_blank";
    githubLink.rel = "noopener noreferrer";
    githubLink.classList.add("github-repo-link");

    const githubIcon = document.createElement("img");
    githubIcon.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg";
    githubIcon.alt = "GitHub Repository";
    githubIcon.classList.add("github-repo-icon");

    const githubText = document.createElement("span");
    githubText.textContent = "Repositorio del Aplicativo";
    githubText.classList.add("github-repo-text");

    githubLink.appendChild(githubIcon);
    githubLink.appendChild(githubText);
    githubSection.appendChild(githubLink);

const Inicio = createRoleAccordion(
    "Inicio",
    "Pantalla principal del aplicativo",
    [
        { descripcion: "Vista general del inicio, donde se presentan los álbumes destacados, géneros populares y artistas recomendados.", imagen: inicio },
    ]
);

const Usuario = createRoleAccordion(
    "Usuario",
    "Interfaz del usuario registrado",
    [
        { descripcion: "Vista del perfil del usuario con su nombre, foto y opciones de configuración.", imagen: perfiluser1 },
        { descripcion: "Opciones disponibles para el usuario: editar perfil, ver favoritos, cerrar sesión, entre otros.", imagen: perfiluser2 },
        { descripcion: "Opciones adicionales al convertirse en artista: acceso a gestión de álbumes, canciones y perfil artístico.", imagen: perfiluser3 },
    ]
);

const UsuarioArtista = createRoleAccordion(
    "Artista",
    "Funcionalidades para usuarios artistas",
    [
        { descripcion: "Formulario que permite al artista subir un nuevo álbum con portada, nombre y canciones.", imagen: perfiluserArtista1 },
        { descripcion: "Vista donde el artista puede ver todos los álbumes que ha subido a la plataforma.", imagen: perfiluserArtista2 },
        { descripcion: "Perfil público del artista, visible para todos los usuarios, mostrando su contenido musical.", imagen: perfiluserArtista3 },
    ]
);

const AlbumFavorito = createRoleAccordion(
    "Favoritos",
    "Álbumes marcados como favoritos",
    [
        { descripcion: "Sección donde el usuario puede visualizar todos los álbumes que ha marcado como favoritos.", imagen: Albumfav },
    ]
);

const GeneroFavorito = createRoleAccordion(
    "Favoritos",
    "Géneros musicales favoritos",
    [
        { descripcion: "Listado de los géneros favoritos del usuario, basados en su actividad y preferencias.", imagen: GenerosFav },
    ]
);

const cancionesFav = createRoleAccordion(
    "Favoritos",
    "Canciones favoritas del usuario",
    [
        { descripcion: "Sección personalizada donde se muestran todas las canciones guardadas como favoritas.", imagen: CancionesFav },
    ]
);

const artistasFav = createRoleAccordion(
    "Favoritos",
    "Artistas favoritos",
    [
        { descripcion: "Vista con los perfiles de artistas que el usuario ha seguido o marcado como favoritos.", imagen: ArtistasFav },
    ]
);

const perfilAlbum = createRoleAccordion(
    "Exploración",
    "Perfil de un álbum musical",
    [
        { descripcion: "Visualización completa de un álbum: portada, nombre, artista, y lista de canciones que lo componen.", imagen: pefilAlbum },
    ]
);

const perfilArtista = createRoleAccordion(
    "Exploración",
    "Perfil de un artista",
    [
        { descripcion: "Vista general del perfil de un artista incluyendo su nombre, foto y biografía.", imagen: pefilArtista1 },
        { descripcion: "Perfil extendido del artista mostrando sus álbumes y canciones disponibles para reproducir.", imagen: pefilArtista2 },
    ]
);

const perfilGenero = createRoleAccordion(
    "Exploración",
    "Perfil de un género musical",
    [
        { descripcion: "Pantalla de presentación de un género con su descripción general.", imagen: pefilgeneroMusical1 },
        { descripcion: "Vista detallada con canciones populares y artistas principales del género seleccionado.", imagen: pefilgeneroMusical2 },
    ]
);


    app.append(descripcionMusica,githubSection,Inicio,Usuario,UsuarioArtista,AlbumFavorito,GeneroFavorito,cancionesFav,artistasFav,perfilAlbum,perfilArtista,perfilGenero);
}
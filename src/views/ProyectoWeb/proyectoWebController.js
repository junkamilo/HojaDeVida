import { createRoleAccordion } from "../../components/createRoleAccordion/createRoleAccordion";
import inicio from '../../assets/MusicWeb/InicioMusica.png';
import perfiluser1 from '../../assets/MusicWeb/perfilUsuario1.png';
import perfiluser2 from '../../assets/MusicWeb/perfilUsuario2.png';
import perfiluser3 from '../../assets/MusicWeb/perfilUsuario3.png';
import perfiluserArtista1 from '../../assets/MusicWeb/SubirAlbum.png';
import perfiluserArtista2 from '../../assets/MusicWeb/misPUblicaciones.png';
import perfiluserArtista3 from '../../assets/MusicWeb/perfilArtistaUsuario.png';
import Albumfav from '../../assets/MusicWeb/AlbumesFavoritos.png';

export const proyectoWeb = () =>{
    const app = document.getElementById("app");
    app.innerHTML = "";

    const heading = document.createElement("h2");
    heading.textContent = "Roles en Proyecto Java";
    app.appendChild(heading);

    const Inicio = createRoleAccordion(
        "Inicio",
        "Inicio del aplicativo web",
        [
            { descripcion: "Inicio del aplicativo web", imagen: inicio },
        ]
    );

    const Usuario = createRoleAccordion(
        "Usuario",
        "Usuario en el aplicativo web",
        [
            { descripcion: "Inicio del aplicativo web", imagen: perfiluser1 },
            { descripcion: "Inicio del aplicativo web", imagen: perfiluser2 },
            { descripcion: "Inicio del aplicativo web", imagen: perfiluser3 },
        ]
    );

    const UsuarioArtista = createRoleAccordion(
        "Usuario",
        "Usuario en el aplicativo web",
        [
            { descripcion: "Inicio del aplicativo web", imagen: perfiluserArtista1 },
            { descripcion: "Inicio del aplicativo web", imagen: perfiluserArtista2 },
            { descripcion: "Inicio del aplicativo web", imagen: perfiluserArtista3 },
        ]
    );

        const AlbumFavorito = createRoleAccordion(
        "Inicio",
        "Inicio del aplicativo web",
        [
            { descripcion: "Inicio del aplicativo web", imagen: Albumfav },
        ]
    );

            const GeneroFavorito = createRoleAccordion(
        "Inicio",
        "Inicio del aplicativo web",
        [
            { descripcion: "Inicio del aplicativo web", imagen: Albumfav },
        ]
    );

    app.append(Inicio,Usuario,UsuarioArtista,AlbumFavorito);
}
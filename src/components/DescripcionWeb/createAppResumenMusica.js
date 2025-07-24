import "./createAppResumenMusica.css";

export const createAppResumenMusica = () => {
    const resumenContainer = document.createElement("div");
    resumenContainer.className = "app-resumen";

    const title = document.createElement("h2");
    title.textContent = "Resumen del Proyecto Web de Música";

    const paragraph = document.createElement("p");
    paragraph.textContent = `Este aplicativo web es un prototipo funcional desarrollado con tecnologías web como HTML, CSS, JavaScript, y consumo de APIs. Está diseñado como una plataforma musical donde los usuarios pueden explorar, buscar y reproducir canciones, además de descubrir artistas y géneros musicales de forma interactiva.`;

    const listTitle = document.createElement("h3");
    listTitle.textContent = "Funciones Principales por Tipo de Usuario:";

    const list = document.createElement("ul");

    const items = [
        "🎧 <span class=\"role-name\">Usuario visitante</span>: puede navegar por la plataforma, explorar géneros musicales, ver artistas destacados y canciones populares sin necesidad de autenticarse.",
        "🔑 <span class=\"role-name\">Usuario registrado</span>: accede a funcionalidades adicionales como reproducción de canciones, guardar canciones favoritas, editar su perfil y comentar en publicaciones.",
        "🌟 <span class=\"role-name\">Usuario artista</span>: cualquier usuario registrado puede postularse como artista. Una vez aprobado, puede subir sus propias canciones, crear álbumes, personalizar su perfil artístico y gestionar su catálogo musical.",
        "🔎 <span class=\"role-name\">Exploración musical</span>: la plataforma permite buscar canciones, artistas o géneros específicos, y ofrece una sección de tendencias con música actualizada y relevante.",
        "📀 <span class=\"role-name\">Reproductor integrado</span>: cada canción puede reproducirse desde un reproductor integrado que muestra detalles del artista, portada del álbum, y opciones de control.",
        "🧭 <span class=\"role-name\">Navegación dinámica</span>: secciones organizadas por categorías como 'Artistas Populares', 'Música del Momento', y 'Explora por Género', todo dentro de una SPA (Single Page Application).",
    ];

    items.forEach(text => {
        const li = document.createElement("li");
        li.innerHTML = text;
        list.appendChild(li);
    });

    const finalNote = document.createElement("p");
    finalNote.innerHTML = `Este proyecto busca simular una experiencia moderna de una plataforma de streaming musical tipo Spotify, brindando a los usuarios una experiencia fluida, visual y dinámica. Actualmente se encuentra en fase de prototipo, con miras a seguir integrando funciones como creación de playlists, sistema de comentarios y estadísticas de reproducción.`;
    finalNote.classList.add("final-note");

    resumenContainer.append(title, paragraph, listTitle, list, finalNote);
    return resumenContainer;
};

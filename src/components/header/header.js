import "./header.css";

export const header = () =>{
    //creamos los elementos del header
    const header = document.createElement("header");
    const contentheader = document.createElement("div");
    const logoperfil = document.createElement("div");
    const img = document.createElement("img");
    const titlesection = document.createElement("div");
    const titulonombre = document.createElement("h1");
    const rol = document.createElement("p");

    //Agregamos las clases a los elementos creados
    contentheader.classList.add("header-content");
    logoperfil.classList.add("logo-perfil");
    img.setAttribute("src","https://example.com/luffy-profile.png");
    img.setAttribute("alt","Monkey D. Luffy");
    img.classList.add("profile-img");
    titlesection.classList.add("title-section");

    //agregamos texto
    titulonombre.textContent = "Juan Camilo Beltran Campo";

    logoperfil.appendChild(img);
    titlesection.append(titulonombre, rol);
    contentheader.append(logoperfil,titlesection);
    header.appendChild(contentheader);

    return  header;
};
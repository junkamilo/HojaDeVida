import "./footer.css";

export const footer = () =>{
    const footer = document.querySelector("footer");
    const p = document.createElement("p");

    p.textContent = "2025 Monkey D. Luffy. Todos los derechos reservados al Rey de los Piratas.";

    footer.appendChild(p);

    return footer;
}
function buscarTelenovela() {
    let input = document.getElementById("search").value.toLowerCase();
    let telenovelas = document.querySelectorAll(".telenovela");

    telenovelas.forEach(telenovela => {
        let titulo = telenovela.getAttribute("alt").toLowerCase();
        if (titulo.includes(input)) {
            telenovela.style.display = "block";
        } else {
            telenovela.style.display = "none";
        }
    });
}
function abrirPopup(categoria, telenovelas) {
    document.getElementById("popup-title").textContent = categoria;
    let grid = document.getElementById("popup-grid");
    grid.innerHTML = ""; // Limpiar el pop-up antes de abrirlo

    telenovelas.forEach(telenovela => {
        let img = document.createElement("img");
        img.src = telenovela.imagen;
        img.alt = telenovela.nombre;
        grid.appendChild(img);
    });

    document.getElementById("popup").style.display = "flex";
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

function buscarTelenovela() {
    let input = document.getElementById("search").value.toLowerCase();
    let telenovelas = document.querySelectorAll(".telenovela");

    telenovelas.forEach(telenovela => {
        let titulo = telenovela.querySelector("img").alt.toLowerCase();
        telenovela.style.display = titulo.includes(input) ? "block" : "none";
    });
}

function mostrarTelenovela(titulo, imagen, year, sinopsis) {
    document.getElementById("popup-title").textContent = titulo;
    document.getElementById("popup-image").src = imagen;
    document.getElementById("popup-year").textContent = "Año de producción: " + year;
    document.getElementById("popup-synopsis").textContent = "Sinopsis: " + sinopsis;

    document.getElementById("popup").style.display = "flex";

    generarEpisodios();
}

function cerrarPopup() {
    document.getElementById("popup").style.display = "none";
}

function toggleEpisodios() {
    let listaEpisodios = document.getElementById("lista-episodios");
    listaEpisodios.style.display = (listaEpisodios.style.display === "none" || listaEpisodios.style.display === "") ? "block" : "none";
}

function generarEpisodios() {
    let listaEpisodios = document.getElementById("lista-episodios");
    listaEpisodios.innerHTML = "";

    let totalEpisodios = 100;
    let episodiosPorBloque = 20;

    for (let i = 1; i <= totalEpisodios; i += episodiosPorBloque) {
        let boton = document.createElement("button");
        boton.textContent = `Episodios ${i} - ${Math.min(i + episodiosPorBloque - 1, totalEpisodios)}`;
        boton.onclick = () => mostrarListaEpisodios(i, Math.min(i + episodiosPorBloque - 1, totalEpisodios));
        listaEpisodios.appendChild(boton);
    }
}

function mostrarListaEpisodios(inicio, fin) {
    let listaEpisodios = document.getElementById("lista-episodios");
    listaEpisodios.innerHTML = ""; // Limpiar lista antes de agregar nuevos episodios

    // Botón para volver a la lista de bloques de episodios
    let volverBtn = document.createElement("button");
    volverBtn.textContent = "Volver a bloques de episodios";
    volverBtn.onclick = generarEpisodios; 
    listaEpisodios.appendChild(volverBtn);

    for (let i = inicio; i <= fin; i++) {
        let episodio = document.createElement("p");
        episodio.textContent = `Episodio ${i}`;
        listaEpisodios.appendChild(episodio);
    }
}

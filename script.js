//Cartas
const mazoInicio = [
    /*Funciones*/
    { imagen: "MasterCartas_Eco1.png", tipo: "normal"},
    { imagen: "MasterCartas_Eco1.png", tipo: "normal"},
    { imagen: "MasterCartas_Mimic2.png", tipo: "normal"},
    { imagen: "MasterCartas_Mimic2.png", tipo: "normal"},
    { imagen: "MasterCartas_Silencio.png", tipo: "normal"},
    /*Actividades*/
    { imagen: "MasterCartas_Abajo.png", tipo: "normal"},
    { imagen: "MasterCartas_Abajo.png", tipo: "normal"},
    { imagen: "MasterCartas_Arriba.png", tipo: "normal"},
    { imagen: "MasterCartas_Arriba.png", tipo: "normal"},
    { imagen: "MasterCartas_Derecha.png", tipo: "normal"},
    { imagen: "MasterCartas_Derecha.png", tipo: "normal"},
    { imagen: "MasterCartas_Izquierda.png", tipo: "normal"},
    { imagen: "MasterCartas_Izquierda.png", tipo: "normal"},
    { imagen: "MasterCartas_Saltar.png", tipo: "normal"},
    { imagen: "MasterCartas_Saltar.png", tipo: "normal"},
    /*Competencia*/
    { imagen: "MasterCartas_3 Dedos.png", tipo: "normal"},
    { imagen: "MasterCartas_Apunta.png", tipo: "normal"},
    { imagen: "MasterCartas_Barco.png", tipo: "normal"},
    { imagen: "MasterCartas_Historia.png", tipo: "normal"},
    { imagen: "MasterCartas_Mano cambiada.png", tipo: "normal"},
    { imagen: "MasterCartas_Nombres.png", tipo: "normal"},
    { imagen: "MasterCartas_Peliculas.png", tipo: "normal"},
    { imagen: "MasterCartas_Piedra, Papel, Tijeras.png", tipo: "normal"},
    { imagen: "MasterCartas_Pulgares.png", tipo: "normal"},
    { imagen: "MasterCartas_Rimas.png", tipo: "normal"},
    { imagen: "MasterCartas_Personalizado1.png", tipo: "normal"},
    { imagen: "MasterCartas_Personalizado1.png", tipo: "normal"},
    { imagen: "MasterCartas_Personalizado1.png", tipo: "normal"},
    { imagen: "MasterCartas_Personalizado1.png", tipo: "normal"},
    { imagen: "MasterCartas_Personalizado1.png", tipo: "normal"},
    /*Oportunidades*/
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    { imagen: "MasterCartas_Oportunidades.png", tipo: "normal"},
    /*Reglas*/
    { imagen: "MasterCartas_Regla1.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla2.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla3.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla4.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla5.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla6.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla7.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla8.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla9.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla10.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla11.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla12.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla13.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla14.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla15.png", tipo: "regla"},
    { imagen: "MasterCartas_Regla1E.png", tipo: "especial"},
    { imagen: "MasterCartas_Regla1E.png", tipo: "especial"},
    { imagen: "MasterCartas_Regla1E.png", tipo: "especial"},
    { imagen: "MasterCartas_Regla1E.png", tipo: "especial"},
    { imagen: "MasterCartas_Regla1E.png", tipo: "especial"}
];

//Variables
let mazo = mezclarCartas([...mazoInicio]);

let descarte = [];

let reglasVisibles = [];

let cartaEspecial = null;

let cartaActual = null;

//Funciones
function cartasRestantes() {
    let contadorCartas = document.getElementById("contadorCartas");
    contadorCartas.textContent = mazo.length;
}

function mezclarCartas(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j =Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

function mostrarReglas() {
    const contenedor = document.getElementById("reglasContainer");
    contenedor.innerHTML = "";
    for (let i = 0; i < reglasVisibles.length; i++) {
        const regla =reglasVisibles[i];

        const contenedorRegla = document.createElement("div");

        const img = document.createElement("img");
        img.src = "imagenes/" + regla.imagen;
        contenedorRegla.appendChild(img);

        if (regla.textoPersonalizado) {
            const textoDiv = document.createElement("div");
            textoDiv.textContent = regla.textoPersonalizado;
            textoDiv.className = "regla-texto";
            contenedorRegla.appendChild(textoDiv);
        }
        contenedor.appendChild(contenedorRegla);
        contenedorRegla.addEventListener("click", function() {
            mostrarZoom(regla);
        })
    }
}

function guardarEspecial () {
    const texto = document.getElementById("textoRegla").value;
    if (texto.trim() !== "" && cartaEspecial) {
        cartaEspecial.textoPersonalizado = texto;
        reglasMaximas(cartaEspecial);
        cartaEspecial = null;
        document.getElementById("textoRegla").value = "";
    }
    document.getElementById("modalEspecial").style.display = "none";
}

function reglasMaximas(nuevaRegla) {
    reglasVisibles.push(nuevaRegla);
    if (reglasVisibles.length > 2) {
        const primera = reglasVisibles.shift();
        descarte.unshift(primera);
        document.getElementById("contadorDescarte").innerText = descarte.length;
    }
    cartasRestantes();
    mostrarReglas();
}

function mostrarHistorial() {
    const modal = document.getElementById("modalHistorial");
    const lista = document.getElementById("historialLista");
    lista.innerHTML = "";
    if (descarte.length === 0) {
        lista.innerHTML = "<p style='color: white;' >No hay historial para mostrar</p>";
    } else {
        for (let i = 0; i<descarte.length; i++) {
            const carta = descarte[i];

            const contenedor = document.createElement("div");
            contenedor.className = "historial-item";

            const img = document.createElement("img");
            img.src = "imagenes/" + carta.imagen;

            contenedor.appendChild(img);
            lista.appendChild(contenedor);
            contenedor.addEventListener("click", function() {
                mostrarZoom(carta);
            })
        }
    }
    modal.style.display = "flex";
}

function mostrarZoom(carta) {
    const modal = document.getElementById("modalZoom");
    const img = document.getElementById("zoomImg");
    const textoZoom = document.getElementById("zoomTexto");

    img.src = "imagenes/" + carta.imagen;
    modal.style.display = "flex";
    if (carta.textoPersonalizado && carta.textoPersonalizado !== "") {
        textoZoom.textContent = carta.textoPersonalizado;
        textoZoom.style.display = "block";
    } else {
        textoZoom.style.display = "none";
    }
    
    modal.style.display = "flex";
}

function reiniciarJuego () {
    mazo = mezclarCartas([...mazoInicio]);
    descarte = [];
    reglasVisibles = [];
    cartaEspecial = null;
    cartaActual = null;
    document.getElementById("cartaDescubierta").src = "imagenes/MasterCartas_Vacio.png";
    document.getElementById("contadorDescarte").innerText = descarte.length;
    cartasRestantes();
    mostrarReglas();
    document.getElementById("modalEspecial").style.display = "none";
    document.getElementById("modalHistorial").style.display = "none";
    document.getElementById("modalZoom").style.display = "none";

    console.log("Reiniciado");

}

//Events
document.addEventListener("DOMContentLoaded", function() {

    cartasRestantes();

    const botonGuardar = document.getElementById("guardarReglaBtn");
    botonGuardar.addEventListener("click", guardarEspecial);


    const botonMezclar = document.getElementById("btnMezclar");
    botonMezclar.addEventListener("click", function() {
        const nuevoMazo = [...mazo, ...descarte]
        mazo = mezclarCartas(nuevoMazo);
        descarte = [];
        document.getElementById("contadorDescarte").innerText = descarte.length;
        cartasRestantes();
        console.log("Mazo Mezclado Otra Vez", mazo);
    });

    const cerrarHistorial = document.getElementById("cerrarHistorialBtn");
    cerrarHistorial.addEventListener("click", function() {
        document.getElementById("modalHistorial").style.display = "none";
    })

    const botonReinicio = document.getElementById("btnReinicio");
    botonReinicio.addEventListener("click", reiniciarJuego);

    const zoomCarta = document.getElementById("cartaDescubierta");
    zoomCarta.addEventListener("click", mostrarHistorial);

    const cerrarZoom = document.getElementById("cerrarZoomBtn");
    cerrarZoom.addEventListener("click", function() {
        document.getElementById("modalZoom").style.display = "none";
    })

    const mostrarCarta = document.getElementById("mazo");
    mostrarCarta.addEventListener("click", function() {
        if (mazo.length > 0) {
            const carta = mazo.pop();
            cartaActual = carta;
            
            if (carta.tipo === "normal") {
                const cartaDescubierta = document.getElementById("cartaDescubierta");
                cartaDescubierta.src = "imagenes/" + carta.imagen;
                descarte.unshift(carta);
                document.getElementById("contadorDescarte").innerText = descarte.length;
                cartasRestantes();
                console.log("Descarte", descarte);

            } else if (carta.tipo === "regla") {
                reglasMaximas(carta);
                console.log("Regla", reglasVisibles);
            } else {
                cartaEspecial = carta;
                document.getElementById("modalEspecial").style.display = "flex";
            }

        } else {
            alert("Mezcla las Cartas");
        }
    })

});
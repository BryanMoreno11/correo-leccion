//variables
correos = [{
        destinatario: "bryan45.com@gmail.com",
        asunto: "Saludo",
        mensaje: "Como estas",
        leido: false,
        fijar: false
    },
    {
        destinatario: "gabriel45.com@gmail.com",
        asunto: "Saludo",
        mensaje: "Como estas mucahcho",
        leido: false,
        fijar: false
    },
    {
        destinatario: "fredy45.com@gmail.com",
        asunto: "Saludo",
        mensaje: "Como estas mucahcho",
        leido: false,
        fijar: false
    },
    {
        destinatario: "fredy45.com@gmail.com",
        asunto: "Saludo",
        mensaje: "Como estas mucahcho",
        leido: false,
        fijar: false
    }
];

mostarCorreosHtml();

function mostarCorreosHtml() {
    const contenedor = document.getElementById("emails");
    contenedor.innerHTML = "";

    for (let correo of correos) {
        const contenedorCorreo = document.createElement("div");
        contenedorCorreo.className = "contenedor-correo";
        let nuevoElemento;
        let nuevosBotones;

        if (correo.leido == true) {
            nuevoElemento = document.createElement("div");
            nuevoElemento.innerHTML = "<strong>De</strong>:" + "<strong>" + correo.destinatario + "</strong>" + "<br>" +
                "<strong>asunto</strong>:" + "<strong>" + correo.asunto + "<strong>" + "<br>" +
                "<strong>mensaje</strong>:" + correo.mensaje + "<br>";

            nuevosBotones = document.createElement("div");
            nuevosBotones.className = "botones";
            nuevosBotones.innerHTML = " <li class='fa fa-envelope-open-o'  id='" + "0" + correos.indexOf(correo) + "' onclick='marcar(" + correos.indexOf(correo) + ")'> </li> " +
                "<li class='fa fa-map-pin' id=" + correos.indexOf(correo) + "   onclick='fijar(" + correos.indexOf(correo) + ")'></li> " +
                " <li class='fa fa-trash' onclick='borrar(" + correos.indexOf(correo) + ")'> </li>";
        } else {
            nuevoElemento = document.createElement("div");
            nuevoElemento.innerHTML = "De:" + "" + correo.destinatario + "" + "<br>" +
                "asunto:" + "" + correo.asunto + "" + "<br>" +
                "mensaje:" + correo.mensaje + "<br>";

            nuevosBotones = document.createElement("div");
            nuevosBotones.className = "botones";
            nuevosBotones.innerHTML = " <li class='fa fa-envelope-open-o'  id='" + "0" + correos.indexOf(correo) + "' onclick='marcar(" + correos.indexOf(correo) + ")'> </li> " +
                "<li class='fa fa-map-pin' id=" + correos.indexOf(correo) + "   onclick='fijar(" + correos.indexOf(correo) + ")'></li> " +
                " <li class='fa fa-trash' onclick='borrar(" + correos.indexOf(correo) + ")'> </li>";
        }

        contenedorCorreo.appendChild(nuevoElemento);
        contenedorCorreo.appendChild(nuevosBotones);

        // Agrega eventos para mostrar y ocultar botones
        contenedorCorreo.addEventListener("mouseenter", function() {
            nuevosBotones.style.display = "flex";
        });

        contenedorCorreo.addEventListener("mouseleave", function() {
            nuevosBotones.style.display = "none";
        });

        contenedor.appendChild(contenedorCorreo);
        contenedorCorreo.addEventListener("click", function() {
            console.log("hola estoy aqui");
            mostrarDetallesCorreo(correo.id);
        });
    }
}



function mostrarDetallesCorreo(idCorreo) {
    const correoSeleccionado = correos.find(correo => correo.id === idCorreo);
    const detallesContainer = document.getElementById('detalles');
    detallesContainer.innerHTML = `
        <h2>${correoSeleccionado.asunto}</h2>
        <p><strong>De:</strong> ${correoSeleccionado.destinatario}</p>
        <p>${correoSeleccionado.mensaje}</p>
    `;
}


function marcar(id) {
    if (correos[id].leido == true) {
        correos[id].leido = false;
    } else {
        correos[id].leido = true;
    }
    mostarCorreosHtml();
}

function borrar(posicion) {
    correos.splice(posicion, 1);
    mostarCorreosHtml();
}
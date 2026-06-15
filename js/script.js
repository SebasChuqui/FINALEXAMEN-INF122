window.addEventListener("scroll", function() {

    let navbar = document.querySelector(".navbar");

    navbar.classList.toggle(
        "scrolled",
        window.scrollY > 50
    );

});
const buscador = document.getElementById("buscarJugador");

if (buscador) {

    buscador.addEventListener("keyup", function () {

        let filtro = buscador.value.toLowerCase();

        let filas = document.querySelectorAll("#tablaJugadores tbody tr");

        filas.forEach(function (fila) {

            let texto = fila.textContent.toLowerCase();

            fila.style.display =
                texto.includes(filtro)
                    ? ""
                    : "none";

        });

    });

}

const formulario = document.getElementById("formContacto");

if (formulario) {

    formulario.addEventListener("submit", function (e) {

        let nombre = document.getElementById("nombre").value.trim();
        let correo = document.getElementById("correo").value.trim();
        let mensaje = document.getElementById("mensaje").value.trim();

        if (nombre === "" || correo === "" || mensaje === "") {

            alert("Por favor complete todos los campos.");

            e.preventDefault();

            return;
        }

        let formatoCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formatoCorreo.test(correo)) {

            alert("Ingrese un correo electrónico válido.");

            e.preventDefault();

            return;
        }

        alert("Formulario enviado correctamente.");

    });

}
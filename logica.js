// Espera a que el DOM esté completamente cargado
document.addEventListener("DOMContentLoaded", () => {

    // Contenedor principal de las tarjetas
    const panel = document.getElementById("panel");

    // Todos los botones de marcar
    const botones = document.querySelectorAll(".marcar");

    // Recorremos cada botón
    botones.forEach(boton => {

        // Evento click en el botón
        boton.addEventListener("click", () => {

            // Activamos o desactivamos la clase "marcado"
            boton.classList.toggle("marcado");

            // Icono dentro del botón
            const icono = boton.querySelector("i");

            // Tarjeta completa asociada
            const tarjeta = boton.closest(".tarjeta");

            // Si está marcado
            if (boton.classList.contains("marcado")) {
                // Cambia icono a sólido
                icono.classList.replace("fa-regular", "fa-solid");

                // Mueve la tarjeta al principio
                panel.prepend(tarjeta);
            } else {
                // Vuelve al icono normal
                icono.classList.replace("fa-solid", "fa-regular");
            }
        });
    });
});

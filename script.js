
document.addEventListener("DOMContentLoaded", () => {

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach((tarjeta, indice) => {

        tarjeta.style.opacity = "0";
        tarjeta.style.transform = "translateY(20px)";

        setTimeout(() => {

            tarjeta.style.transition = "all .6s ease";
            tarjeta.style.opacity = "1";
            tarjeta.style.transform = "translateY(0)";

        }, indice * 120);

    });

});


const codigo = `
// CONDICIONALES ANIDADOS

function evaluarNota(nota) {

    if (nota >= 0 && nota <= 5) {

        if (nota >= 4.5) {
            return "Excelente";
        } else if (nota >= 3.5) {
            return "Bueno";
        } else if (nota >= 3.0) {
            return "Aceptable";
        } else {
            return "Reprobado";
        }

    } else {
        return "Nota no válida";
    }
}

function ejecutarEjercicio() {

    const nota = Number(document.getElementById("nota").value);

    const resultado = evaluarNota(nota);

    console.log("Resultado:", resultado);
}
`;

document.getElementById("titulo").textContent = "Condicionales anidados";
document.getElementById("subtitulo").textContent = "Aprendiendo a tomar decisiones 💗";

document.getElementById("concepto").textContent =
"Las estructuras condicionales anidadas permiten colocar una condición dentro de otra para evaluar diferentes situaciones y tomar decisiones.";

document.getElementById("objetivo").textContent =
"Clasificar el rendimiento académico de un estudiante según la nota que ingrese.";

document.getElementById("enunciado").textContent =
"Ingresa una calificación entre 0 y 5. El programa determinará si el resultado es Excelente, Bueno, Aceptable o Reprobado.";

document.getElementById("formulario").innerHTML = `
<label>Nota del estudiante (0 a 5)</label>
<input type="number" id="nota" min="0" max="5" step="0.1"
placeholder="Ejemplo: 4.2">

<button id="ejecutar">Evaluar calificación ♡</button>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>if:</strong> evalúa una condición.</li>
<li><strong>else if:</strong> comprueba otras condiciones.</li>
<li><strong>else:</strong> ejecuta una alternativa cuando las anteriores no se cumplen.</li>
<li><strong>nota:</strong> almacena la calificación ingresada.</li>
</ul>
<p>El programa evalúa las condiciones en orden y devuelve la clasificación correspondiente.</p>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que las estructuras condicionales permiten tomar decisiones dentro de un programa. Se utilizan en sistemas académicos, validación de usuarios, descuentos y clasificación de información.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent = "No se pudo copiar.";
    }
});

function evaluarNota(nota) {

    if (nota >= 0 && nota <= 5) {

        if (nota >= 4.5) {
            return "Excelente 🌟";
        } else if (nota >= 3.5) {
            return "Bueno 🌸";
        } else if (nota >= 3.0) {
            return "Aceptable 💗";
        } else {
            return "Reprobado. ¡Sigue practicando!";
        }

    } else {
        return "Nota no válida.";
    }
}

function ejecutarEjercicio() {

    const entrada = document.getElementById("nota").value;
    const resultado = document.getElementById("resultado");

    if (entrada.trim() === "" ||
        !Number.isFinite(Number(entrada)) ||
        Number(entrada) < 0 ||
        Number(entrada) > 5) {

        resultado.textContent = "Ingresa una nota válida entre 0 y 5.";
        return;
    }

    resultado.textContent =
        "Resultado académico: " + evaluarNota(Number(entrada));
}

document.getElementById("ejecutar")
    .addEventListener("click", ejecutarEjercicio);

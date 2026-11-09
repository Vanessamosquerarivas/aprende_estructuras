
const codigo = `
// ESTRUCTURA SECUENCIAL
// Calcular el promedio de un estudiante.

function calcularPromedio(nombre, nota1, nota2, nota3) {

    // Paso 1: sumar las calificaciones.
    const suma = nota1 + nota2 + nota3;

    // Paso 2: calcular el promedio.
    const promedio = suma / 3;

    // Paso 3: retornar el resultado.
    return promedio;
}

// Capturar los datos del formulario.
function ejecutarEjercicio() {

    const nombre = document.getElementById("nombre").value.trim();
    const nota1 = Number(document.getElementById("nota1").value);
    const nota2 = Number(document.getElementById("nota2").value);
    const nota3 = Number(document.getElementById("nota3").value);

    if (!nombre ||
        [nota1, nota2, nota3].some(n => !Number.isFinite(n) || n < 0 || n > 5)) {
        return;
    }

    const promedio = calcularPromedio(nombre, nota1, nota2, nota3);

    console.log("Estudiante:", nombre);
    console.log("Promedio:", promedio);
}
`;

document.getElementById("titulo").textContent = "Estructura secuencial";
document.getElementById("subtitulo").textContent = "Instrucciones paso a paso 🌸";

document.getElementById("concepto").textContent =
"Es una estructura que ejecuta instrucciones de manera ordenada, una después de otra, siguiendo una secuencia lógica.";

document.getElementById("objetivo").textContent =
"Calcular el promedio de tres calificaciones ingresadas por un estudiante.";

document.getElementById("enunciado").textContent =
"Ingresa tu nombre y tres notas. El programa sumará las calificaciones y dividirá el resultado entre tres.";

document.getElementById("formulario").innerHTML = `
<label>Nombre del estudiante</label>
<input id="nombre" type="text" placeholder="Escribe tu nombre">

<label>Primera calificación (0 a 5)</label>
<input id="nota1" type="number" min="0" max="5" step="0.1">

<label>Segunda calificación (0 a 5)</label>
<input id="nota2" type="number" min="0" max="5" step="0.1">

<label>Tercera calificación (0 a 5)</label>
<input id="nota3" type="number" min="0" max="5" step="0.1">

<button id="ejecutar">Calcular promedio ♡</button>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>nombre:</strong> guarda el nombre del estudiante.</li>
<li><strong>nota1, nota2 y nota3:</strong> almacenan las calificaciones.</li>
<li><strong>suma:</strong> realiza la adición de las tres notas.</li>
<li><strong>promedio:</strong> divide la suma entre tres.</li>
<li><strong>return:</strong> devuelve el promedio calculado.</li>
</ul>
<p>Las instrucciones se ejecutan en orden, desde la captura de datos hasta la presentación del resultado.</p>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que una estructura secuencial ejecuta instrucciones en orden. Es la base de los algoritmos y se utiliza para calcular facturas, promedios, presupuestos y operaciones matemáticas.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent =
            "No se pudo copiar el código.";
    }
});

function calcularPromedio(nombre, nota1, nota2, nota3) {
    const suma = nota1 + nota2 + nota3;
    return suma / 3;
}

function ejecutarEjercicio() {
    const nombre = document.getElementById("nombre").value.trim();

    const entradas = ["nota1", "nota2", "nota3"].map(
        id => document.getElementById(id).value
    );

    const notas = entradas.map(Number);
    const resultado = document.getElementById("resultado");

    if (!nombre || entradas.some(n => n.trim() === "") ||
        notas.some(n => !Number.isFinite(n) || n < 0 || n > 5)) {

        resultado.textContent =
            "Por favor, ingresa tu nombre y tres notas válidas entre 0 y 5.";
        return;
    }

    const promedio = calcularPromedio(nombre, ...notas);

    const nombreSeguro = document.createElement("strong");
    nombreSeguro.textContent = nombre;

    resultado.replaceChildren();
    resultado.append("Estudiante: ", nombreSeguro);

    const detalle = document.createElement("p");
    detalle.textContent =
        `Suma de notas: ${notas.reduce((a, b) => a + b, 0).toFixed(2)}
        | Promedio final: ${promedio.toFixed(2)}`;

    resultado.append(detalle);
}

document.getElementById("ejecutar")
    .addEventListener("click", ejecutarEjercicio);

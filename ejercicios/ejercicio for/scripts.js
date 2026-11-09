
const codigo = `
// CICLO PARA (FOR)

function generarTabla(numero) {

    let tabla = "";

    // El contador comienza en 1.
    // El ciclo termina cuando llega a 10.

    for (let i = 1; i <= 10; i++) {

        let resultado = numero * i;

        tabla += numero + " x " + i + " = " + resultado + "\\n";
    }

    return tabla;
}

function ejecutarEjercicio() {

    const numero = Number(document.getElementById("numero").value);

    const tabla = generarTabla(numero);

    console.log(tabla);
}
`;

document.getElementById("titulo").textContent = "Ciclo PARA (for)";
document.getElementById("subtitulo").textContent = "Repeticiones controladas 🌷";

document.getElementById("concepto").textContent =
"El ciclo for permite repetir un conjunto de instrucciones una cantidad determinada de veces mediante un contador.";

document.getElementById("objetivo").textContent =
"Generar la tabla de multiplicar de un número ingresado por el usuario.";

document.getElementById("enunciado").textContent =
"Escribe un número y el programa mostrará su tabla de multiplicar desde el 1 hasta el 10.";

document.getElementById("formulario").innerHTML = `
<label>Ingresa un número</label>
<input type="number" id="numero" step="any"
placeholder="Ejemplo: 7">

<button id="ejecutar">Generar tabla ♡</button>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>numero:</strong> almacena el número ingresado.</li>
<li><strong>i:</strong> funciona como contador.</li>
<li><strong>i = 1:</strong> indica dónde comienza el ciclo.</li>
<li><strong>i <= 10:</strong> establece cuándo termina.</li>
<li><strong>i++:</strong> aumenta el contador en uno.</li>
<li><strong>tabla:</strong> almacena las multiplicaciones.</li>
</ul>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que el ciclo for permite automatizar tareas repetitivas. Se utiliza en tablas de multiplicar, recorridos de listas, conteos y procesamiento de datos.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent = "No se pudo copiar.";
    }
});

function generarTabla(numero) {

    let tabla = "";

    for (let i = 1; i <= 10; i++) {
        tabla += `${numero} x ${i} = ${numero * i}\n`;
    }

    return tabla;
}

function ejecutarEjercicio() {

    const entrada = document.getElementById("numero").value;
    const resultado = document.getElementById("resultado");

    if (entrada.trim() === "" ||
        !Number.isFinite(Number(entrada))) {

        resultado.textContent = "Por favor, ingresa un número válido.";
        return;
    }

    resultado.textContent = generarTabla(Number(entrada));
}

document.getElementById("ejecutar")
    .addEventListener("click", ejecutarEjercicio);

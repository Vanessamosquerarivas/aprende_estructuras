
const codigo = `
// FUNCION SINCRONA

// Función que recibe dos parámetros.
function calcularArea(base, altura) {

    // Multiplicar base por altura.
    const area = base * altura;

    // Retornar el resultado.
    return area;
}

// Capturar los datos ingresados.
function ejecutarEjercicio() {

    const base = Number(document.getElementById("base").value);
    const altura = Number(document.getElementById("altura").value);

    // Llamar a la función.
    const resultado = calcularArea(base, altura);

    console.log("El área es:", resultado);
}
`;

document.getElementById("titulo").textContent =
"Función normal o síncrona";

document.getElementById("subtitulo").textContent =
"Aprendiendo a crear funciones 🌼";

document.getElementById("concepto").textContent =
"Una función síncrona ejecuta sus instrucciones de forma secuencial y devuelve un resultado antes de continuar con la siguiente instrucción.";

document.getElementById("objetivo").textContent =
"Calcular el área de un rectángulo mediante una función que recibe dos parámetros y retorna el resultado.";

document.getElementById("enunciado").textContent =
"Ingresa la base y la altura del rectángulo. El programa multiplicará ambos valores para calcular el área.";

document.getElementById("formulario").innerHTML = `
<label>Base del rectángulo</label>
<input type="number" id="base" min="0.01" step="any"
placeholder="Ejemplo: 8">

<label>Altura del rectángulo</label>
<input type="number" id="altura" min="0.01" step="any"
placeholder="Ejemplo: 5">

<button id="ejecutar">Calcular área ♡</button>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>calcularArea:</strong> nombre de la función.</li>
<li><strong>base y altura:</strong> parámetros recibidos.</li>
<li><strong>area:</strong> variable que almacena la multiplicación.</li>
<li><strong>return:</strong> devuelve el resultado de la operación.</li>
<li><strong>ejecutarEjercicio:</strong> captura los datos y llama a la función.</li>
</ul>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que las funciones síncronas ejecutan instrucciones en orden y permiten reutilizar código. Son útiles en cálculos matemáticos, conversiones, validaciones y procesamiento de información.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent = "No se pudo copiar.";
    }
});

// Función síncrona para calcular el área.
function calcularArea(base, altura) {

    const area = base * altura;

    return area;
}

// Función que ejecuta el cálculo.
function ejecutarEjercicio() {

    const baseTexto = document.getElementById("base").value;
    const alturaTexto = document.getElementById("altura").value;

    const base = Number(baseTexto);
    const altura = Number(alturaTexto);

    const resultado = document.getElementById("resultado");

    if (
        baseTexto.trim() === "" ||
        alturaTexto.trim() === "" ||
        !Number.isFinite(base) ||
        !Number.isFinite(altura) ||
        base <= 0 ||
        altura <= 0
    ) {

        resultado.textContent =
            "Ingresa una base y una altura mayores que cero.";
        return;
    }

    const area = calcularArea(base, altura);

    resultado.innerHTML = "";

    const mensaje = document.createElement("strong");
    mensaje.textContent = "Área del rectángulo: " + area.toFixed(2);

    resultado.append(mensaje);
    resultado.append(" unidades cuadradas. ♡");
}

document.getElementById("ejecutar")
    .addEventListener("click", ejecutarEjercicio);

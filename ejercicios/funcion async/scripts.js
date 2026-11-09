
const codigo = `
// FUNCION ASINCRONA

// Simula una consulta mediante una promesa.
function obtenerDatosEstudiante(datos) {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve(datos);

        }, 2000);

    });
}

// Función asíncrona.
async function consultarEstudiante(datos) {

    const estudiante = await obtenerDatosEstudiante(datos);

    return estudiante;
}

// Capturar los datos del formulario.
async function ejecutarEjercicio() {

    const nombre = document.getElementById("nombre").value;
    const edad = Number(document.getElementById("edad").value);
    const programa = document.getElementById("programa").value;

    const datos = { nombre, edad, programa };

    const resultado = await consultarEstudiante(datos);

    console.log(resultado);
}
`;

document.getElementById("titulo").textContent = "Función ASYNC";
document.getElementById("subtitulo").textContent =
"Descubriendo la programación asíncrona 🦋";

document.getElementById("concepto").textContent =
"Una función async permite trabajar con operaciones asíncronas. Utiliza promesas y await para esperar resultados sin bloquear el hilo principal.";

document.getElementById("objetivo").textContent =
"Simular una consulta de información de un estudiante utilizando Promise, setTimeout, async y await.";

document.getElementById("enunciado").textContent =
"Ingresa tus datos personales y académicos. El programa simulará una consulta y mostrará los datos después de dos segundos.";

document.getElementById("formulario").innerHTML = `
<label>Nombre del estudiante</label>
<input type="text" id="nombre" placeholder="Escribe tu nombre">

<label>Edad</label>
<input type="number" id="edad" min="1" max="120"
placeholder="Escribe tu edad">

<label>Programa académico</label>
<input type="text" id="programa"
placeholder="Ejemplo: Ingeniería de Sistemas">

<button id="ejecutar">Consultar estudiante ♡</button>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>Promise:</strong> representa una operación que finalizará en el futuro.</li>
<li><strong>setTimeout:</strong> simula el tiempo de espera de dos segundos.</li>
<li><strong>async:</strong> declara una función asíncrona.</li>
<li><strong>await:</strong> espera el resultado de la promesa.</li>
<li><strong>resolve:</strong> entrega los datos consultados.</li>
<li><strong>datos:</strong> contiene la información ingresada por el usuario.</li>
</ul>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que las funciones asíncronas permiten realizar operaciones que tardan en completarse sin bloquear el hilo principal. Se utilizan en consultas a servidores, APIs, bases de datos y carga de información.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent = "No se pudo copiar.";
    }
});

// Promesa que simula una consulta de dos segundos.
function obtenerDatosEstudiante(datos) {

    return new Promise((resolve) => {

        setTimeout(() => {
            resolve(datos);
        }, 2000);

    });
}

// Función async que espera la respuesta.
async function consultarEstudiante(datos) {

    const estudiante = await obtenerDatosEstudiante(datos);

    return estudiante;
}

// Ejecutar el ejercicio.
async function ejecutarEjercicio() {

    const nombre = document.getElementById("nombre").value.trim();
    const edadTexto = document.getElementById("edad").value;
    const edad = Number(edadTexto);
    const programa = document.getElementById("programa").value.trim();

    const resultado = document.getElementById("resultado");
    const boton = document.getElementById("ejecutar");

    if (!nombre || !edadTexto || !programa ||
        !Number.isInteger(edad) || edad < 1 || edad > 120) {

        resultado.textContent =
            "Por favor, completa todos los campos con datos válidos.";
        return;
    }

    const datos = {
        nombre,
        edad,
        programa
    };

    boton.disabled = true;

    resultado.textContent =
        "Consultando información... Por favor espera dos segundos ♡";

    try {

        const estudiante = await consultarEstudiante(datos);

        resultado.replaceChildren();

        const titulo = document.createElement("strong");
        titulo.textContent = "¡Consulta completada! 🌸";

        const informacion = document.createElement("p");

        informacion.textContent =
            `Nombre: ${estudiante.nombre}
            | Edad: ${estudiante.edad} años
            | Programa: ${estudiante.programa}`;

        resultado.append(titulo, informacion);

    } catch (error) {

        resultado.textContent =
            "No fue posible consultar la información.";

    } finally {

        boton.disabled = false;

    }
}

document.getElementById("ejecutar")
    .addEventListener("click", ejecutarEjercicio);

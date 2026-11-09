
const codigo = `
// CICLO MIENTRAS (WHILE)

// El usuario establece su propia contraseña.

function validarContrasena(contrasenaCorrecta, intentos) {

    let contrasenaIngresada = "";
    let contador = 0;

    while (
        contrasenaIngresada !== contrasenaCorrecta &&
        contador < intentos
    ) {

        contrasenaIngresada = prompt("Ingresa tu contraseña:");
        if (contrasenaIngresada === null) {
            return "Operación cancelada";
        }

        contador++;
    }

    if (contrasenaIngresada === contrasenaCorrecta) {
        return "Acceso permitido";
    }

    return "Intentos agotados";
}
`;

document.getElementById("titulo").textContent = "Ciclo MIENTRAS (while)";
document.getElementById("subtitulo").textContent = "Repetir mientras una condición sea verdadera ✨";

document.getElementById("concepto").textContent =
"El ciclo while repite un conjunto de instrucciones mientras una condición sea verdadera. Cuando deja de cumplirse, el ciclo termina.";

document.getElementById("objetivo").textContent =
"Crear y verificar una contraseña mediante un ciclo while.";

document.getElementById("enunciado").textContent =
"El usuario establece una contraseña y posteriormente debe ingresarla correctamente. Si se equivoca, podrá intentarlo nuevamente hasta alcanzar el límite de intentos.";

document.getElementById("formulario").innerHTML = `
<label>1. Crea tu contraseña</label>
<input type="password" id="crearContrasena"
placeholder="Escribe una contraseña">

<label>2. Confirma tu contraseña</label>
<input type="password" id="confirmarContrasena"
placeholder="Confirma tu contraseña">

<button id="iniciar">Iniciar verificación ♡</button>

<div id="zonaIntentos" hidden>
    <label>Ingresa nuevamente tu contraseña</label>
    <input type="password" id="intentoContrasena"
    placeholder="Escribe tu contraseña">

    <button id="verificar">Verificar contraseña</button>
    <button id="cancelar">Cancelar proceso</button>
</div>

<p id="contadorIntentos"></p>
`;

document.getElementById("explicacion").innerHTML = `
<ul>
<li><strong>contrasenaCorrecta:</strong> almacena la contraseña creada por el usuario.</li>
<li><strong>contrasenaIngresada:</strong> guarda cada nuevo intento.</li>
<li><strong>while:</strong> repite la comparación mientras las contraseñas sean diferentes.</li>
<li><strong>contador:</strong> controla el número de intentos.</li>
<li><strong>condición:</strong> el ciclo termina al acertar o alcanzar el límite.</li>
</ul>
<p>En esta demostración el límite es de cinco intentos.</p>
`;

document.getElementById("aprendizaje").textContent =
"Aprendimos que el ciclo while permite repetir instrucciones mientras una condición sea verdadera. Se utiliza en validaciones, procesos de acceso, menús y programas que necesitan esperar una respuesta del usuario.";

document.getElementById("codigo").textContent = codigo;

document.getElementById("copiar").addEventListener("click", async () => {
    try {
        await navigator.clipboard.writeText(codigo);
        document.getElementById("copiar").textContent = "¡Código copiado! ♡";
    } catch {
        document.getElementById("copiar").textContent = "No se pudo copiar.";
    }
});

let contrasenaCorrecta = "";
let contador = 0;
const maxIntentos = 5;
let activo = false;

const zonaIntentos = document.getElementById("zonaIntentos");
const resultado = document.getElementById("resultado");
const contadorIntentos = document.getElementById("contadorIntentos");

function iniciarVerificacion() {

    const crear = document.getElementById("crearContrasena").value;
    const confirmar = document.getElementById("confirmarContrasena").value;

    if (!crear || !confirmar) {
        resultado.textContent = "Completa los dos campos de contraseña.";
        return;
    }

    if (crear.length < 4) {
        resultado.textContent =
            "La contraseña debe tener al menos cuatro caracteres.";
        return;
    }

    if (crear !== confirmar) {
        resultado.textContent =
            "Las contraseñas no coinciden. Inténtalo nuevamente.";
        return;
    }

    contrasenaCorrecta = crear;
    contador = 0;
    activo = true;

    zonaIntentos.hidden = false;
    document.getElementById("iniciar").disabled = true;

    resultado.textContent =
        "Contraseña creada correctamente. Ahora verifica tu contraseña.";

    contadorIntentos.textContent = "Intentos disponibles: 5";
}

function verificarContrasena() {

    if (!activo) return;

    const entrada = document.getElementById("intentoContrasena").value;

    if (!entrada) {
        resultado.textContent = "Debes ingresar una contraseña.";
        return;
    }

    let contrasenaIngresada = entrada;

    // El ciclo se ejecuta mientras la contraseña sea incorrecta.
    // Se realiza una comparación por intento, sin bloquear la página.

    while (
        contrasenaIngresada !== contrasenaCorrecta &&
        contador < maxIntentos
    ) {
        contador++;
        break;
    }

    if (contrasenaIngresada === contrasenaCorrecta) {

        resultado.textContent =
            "¡Contraseña correcta! Acceso permitido. ♡";

        finalizar();

    } else {

        contadorIntentos.textContent =
            `Intentos utilizados: ${contador} de ${maxIntentos}`;

        if (contador >= maxIntentos) {

            resultado.textContent =
                "Has agotado tus cinco intentos.";

            finalizar();

        } else {

            resultado.textContent =
                "Contraseña incorrecta. Intenta nuevamente.";

            document.getElementById("intentoContrasena").value = "";
            document.getElementById("intentoContrasena").focus();

        }
    }
}

function finalizar() {
    activo = false;
    document.getElementById("verificar").disabled = true;
    document.getElementById("intentoContrasena").disabled = true;
}

function cancelarProceso() {
    activo = false;
    contrasenaCorrecta = "";

    zonaIntentos.hidden = true;
    document.getElementById("iniciar").disabled = false;

    document.getElementById("crearContrasena").value = "";
    document.getElementById("confirmarContrasena").value = "";

    resultado.textContent = "Proceso cancelado.";
    contadorIntentos.textContent = "";
}

document.getElementById("iniciar")
    .addEventListener("click", iniciarVerificacion);

document.getElementById("verificar")
    .addEventListener("click", verificarContrasena);

document.getElementById("cancelar")
    .addEventListener("click", cancelarProceso);

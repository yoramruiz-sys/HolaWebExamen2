const inputNombre = document.getElementById('nombre');
const inputPass = document.getElementById('pass');
const iris = document.getElementById('iris');
const eye = document.getElementById('eye');
const mensaje = document.getElementById('mensaje');
const boton = document.getElementById('btnIngresar');

/* CAMBIO DE COLOR */
inputNombre.addEventListener('focus', () => {
    iris.style.backgroundColor = 'orange';
    eye.classList.remove('closed');
});

inputPass.addEventListener('focus', () => {
    iris.style.backgroundColor = 'red';
    eye.classList.add('closed');
});

inputPass.addEventListener('blur', () => {
    eye.classList.remove('closed');
});

/* REGRESA A AZUL */
document.addEventListener('click', (e) => {
    if (!e.target.classList.contains('input-field')) {
        iris.style.backgroundColor = 'blue';
        eye.classList.remove('closed');
    }
}, true);

/* OJO SIGUE EL MOUSE */
document.addEventListener('mousemove', (e) => {
    const rect = eye.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    const max = 20;
    const moveX = Math.max(-max, Math.min(max, x / 10));
    const moveY = Math.max(-max, Math.min(max, y / 10));

    iris.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

/* VALIDACIÓN */
boton.addEventListener('click', () => {
    if (inputNombre.value === "" || inputPass.value === "") {
        mensaje.textContent = "Completa todos los campos";
        mensaje.style.color = "red";
    } else {
        mensaje.textContent = "Acceso concedido ✔";
        mensaje.style.color = "green";
    }
});


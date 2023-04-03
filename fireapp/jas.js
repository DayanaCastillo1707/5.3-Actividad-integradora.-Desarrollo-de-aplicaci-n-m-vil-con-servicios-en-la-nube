//datos funciones
const elemento = document.getElementById("miembros");
const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const enviar = document.getElementById('envi');

const form = document.getElementsByClassName('form-container')

//info para el boton 
nombre.addEventListener('input', validarCampos);
email.addEventListener('input', validarCampos);


form.addEventListener("submit", (e) =>{
  e.preventDefault();
  console.log(nombre, email)

})

//plan canselado
if (elemento.style.display === "none") {
  elemento.style.display = "block";
} else {
  elemento.style.display = "none";
}


function validarCampos() {
  if (nombre.value !== '' && email.value !== '') {
    enviar.removeAttribute('disabled');
  } else {
    enviar.setAttribute('disabled', true);
  }
}

$('envi').click(function () {
  const nombre = $('#nombre').val();
  const email = $('#email').val();
  console.log(nombre);
  console.log(email);

})
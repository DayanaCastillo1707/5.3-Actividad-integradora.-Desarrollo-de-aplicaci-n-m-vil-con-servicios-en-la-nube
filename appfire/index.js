//npm install firebase intentar
//const auth = firebase.auth(); haca no funciona 
//import { getAuth } from "firebase/auth";

const envio = document.querySelector('#envi');
//const auth = getAuth();  
envio.addEventListener('submit', (e) =>{
    //pausa\|/
    e.preventDeafault();

    const name = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const clave = document.querySelector('#clave').value

    auth
        .createUserWithEmailAndPassword(email, clave)
        .then(userCredential =>{
            console.log('entro')
        })

})

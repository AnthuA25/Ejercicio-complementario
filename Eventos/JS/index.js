
let formulario = document.getElementById("formulario")
formulario.addEventListener("submit", validarFormulario)

function validarFormulario(e){
    e.preventDefault();
    let form = e.target;
    let container = document.getElementById("listaMensajes")
    let mensaje = document.createElement("h2");
    container.append(mensaje)
    mensaje.innerText = "Mensaje Enviado"
    console.log(form[0].value)
    console.log(form[1].value)

    // console.log("Enviado!")
}
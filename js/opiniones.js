const listaComentarios = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/comments");
    const comentarios = await response.json();

    let datosTabla=``;
    let contador = 0;

    comentarios.forEach((comentario, index) => {
        if(contador < 10){
            datosTabla += `<tr>
            <td>${comentario.name}</td>
            <td>${comentario.body}</td>
            </tr>`
            contador++;
        } else {
            return;
        }
    });

    document.getElementById("datos-tabla").innerHTML = datosTabla;
}

window.addEventListener("load", function(){
    listaComentarios();
})
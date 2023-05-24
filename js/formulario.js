// VALIDACION DE FORMULARIO
function validarFormulario() {
  let nombre = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (nombre === "") {
    Swal.fire({
      position: "top",
      icon: "error",
      title: "El campo 'Nombre' está vacío. Por favor, complete este campo para continuar.",
      showConfirmButton: true,
      confirmButtonColor: "#176061",
    });
    return false;
  }

  
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    Swal.fire({
        position: "top",
        icon: "error",
        title: "Por favor, ingresa un correo electrónico válido.",
        showConfirmButton: true,
        confirmButtonColor: "#176061",
      });
    return false;
  }
}

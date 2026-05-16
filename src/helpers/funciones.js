import Swal from 'sweetalert2'

export function alertaRedireccion(mensaje, url, redireccion) {
    let timerInterval;
    Swal.fire({
        title: mensaje,
        html: "Será redireccionado en <b></b> milliseconds.",
        timer: 1500,
        icon: "success",
        timerProgressBar: true,
        didOpen: () => {
            Swal.showLoading();
            const timer = Swal.getPopup().querySelector("b");
            timerInterval = setInterval(() => {
                timer.textContent = `${Swal.getTimerLeft()}`;
            }, 100);
        },
        willClose: () => {
            clearInterval(timerInterval);
            redireccion(url)
        }
    }).then((result) => {
        if (result.dismiss === Swal.DismissReason.timer) {
            console.log("I was closed by the timer");
        }
    });
}

export function alertaError(titulo, mensaje, icono) {
    Swal.fire({
        title: titulo,
        text: mensaje,
        icon: icono
    });
}

export function generaToken() {
    return "token-" + Math.random().toString(36).substring(2, 10) + "-" + Math.random().toString(36).substring(2, 10)
}

export function eliminarCuenta() {
  Swal.fire({
    title: "¿Está seguro?",
    text: "Esta acción eliminará su cuenta.",
    icon: "warning",
    showCancelButton: true,
    confirmButtonText: "Sí, eliminar",
    cancelButtonText: "Cancelar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Eliminado",
        "La cuenta fue eliminada.",
        "success"
      );
    }
  });
}
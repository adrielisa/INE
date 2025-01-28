// Leer los datos del usuario desde localStorage
const usuario = JSON.parse(localStorage.getItem('usuario'));

if (!usuario) {
    // Si no hay datos, redirigir al formulario de creación
    alert('No hay datos disponibles. Por favor, crea tu cuenta primero.');
    window.location.href = 'create.html';
} else {
    // Asignar los datos a los elementos correspondientes del HTML
    document.querySelector('#nombre').textContent = `${usuario.INE.nombre} ${usuario.INE.apellidoP} ${usuario.INE.apellidoM}`;
    document.querySelector('#domicilio').textContent = usuario.INE.domicilio;
    document.querySelector('#claveElector').textContent = usuario.INE.claveLector;
    document.querySelector('#curp').textContent = usuario.INE.curp;
    document.querySelector('#añoRegistro').textContent = usuario.INE.claveRegistro;
    document.querySelector('#seccion').textContent = usuario.INE.seccion;
    document.querySelector('#vigencia').textContent = usuario.INE.vigencia;
    document.querySelector('#fechaNacimiento').textContent = usuario.INE.fechaNacimiento;
    document.querySelector('#sexo').textContent = usuario.INE.sexo;

    // Mostrar la imagen si está disponible
    const fotoUsuario = document.querySelector('#fotoUsuario');
    if (usuario.INE.foto) {
        fotoUsuario.src = usuario.INE.foto; // Asignar la imagen en base64
    } else {
        fotoUsuario.alt = 'Sin foto disponible'; // Texto alternativo
    }
}

// Seleccionar el formulario
const createForm = document.querySelector('#createForm');

// Manejar el evento de envío del formulario
createForm.addEventListener('submit', async (e) => {
    e.preventDefault(); // Evitar recarga de la página

    const formData = new FormData(createForm); // Crear FormData para manejar el formulario
    const file = formData.get('foto'); // Obtener la imagen del input "file"

    // Convertir la imagen a base64
    const toBase64 = (file) =>
        new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
            reader.readAsDataURL(file); // Leer el archivo como base64
        });

    try {
        const fotoBase64 = await toBase64(file); // Convertir la imagen a base64

        // Crear un objeto con los datos del formulario
        const data = {
            correo: formData.get('correo'),
            contraseña: formData.get('contraseña'),
            INE: {
                nombre: formData.get('nombre'),
                apellidoP: formData.get('apellidoP'),
                apellidoM: formData.get('apellidoM'),
                sexo: formData.get('sexo'),
                domicilio: formData.get('domicilio'),
                claveLector: formData.get('claveLector'),
                claveRegistro: formData.get('claveRegistro'),
                vigencia: formData.get('vigencia'),
                fechaNacimiento: formData.get('fechaNacimiento'),
                seccion: formData.get('seccion'),
                curp: formData.get('CURP'),
                foto: fotoBase64, // Incluir la imagen en base64
            },
        };

        // Guardar los datos en localStorage
        localStorage.setItem('usuario', JSON.stringify(data));

        // Redirigir a ine.html
        window.location.href = 'ine.html';
    } catch (error) {
        console.error('Error al procesar la imagen:', error);
        alert('Hubo un problema al guardar los datos con la imagen.');
    }
});

let prestamos = [];

function guardar() {
    let nombreCliente = document.getElementById('nombreCliente').value;
    let tipoPrestamo = document.getElementById('tipoPrestamo').value;

    if (nombreCliente && tipoPrestamo) {
        prestamos.push({ nombre: nombreCliente, tipo: tipoPrestamo });
        alert('Datos guardados');
        document.getElementById('formulario').reset();
    } else {
        alert('Por favor, complete todos los campos para guardar los datos');
    }
}

function mostrarResumen() {
    let resumen = {
        Hipotecario: 0,
        Automotriz: 0,
        Consumo: 0
    };

    prestamos.forEach(prestamo => {
        resumen[prestamo.tipo]++;
    });

    let resumenDiv = document.getElementById('resumen');
    resumenDiv.innerHTML = `
        <p>Hipotecarios: ${resumen.Hipotecario}</p>
        <p>Automotriz: ${resumen.Automotriz}</p>
        <p>Consumo: ${resumen.Consumo}</p>
    `;

    localStorage.setItem('resumen', JSON.stringify(resumen));
}

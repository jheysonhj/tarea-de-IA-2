document.addEventListener('DOMContentLoaded', () => {
    const reservaForm = document.getElementById('reservaForm');

    if (reservaForm) {
        reservaForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const cliente = document.getElementById('cliente').value;
            const perrito = document.getElementById('perrito').value;

            // Guardar datos
            const cita = {
                cliente,
                perrito,
                servicio: document.getElementById('servicio').value,
                fecha: new Date().toLocaleDateString()
            };

            let citas = JSON.parse(localStorage.getItem('citas')) || [];
            citas.push(cita);
            localStorage.setItem('citas', JSON.stringify(citas));

            // Mensaje de éxito
            alert(`¡Cita confirmada para ${perrito}! Gracias ${cliente}.`);
            window.location.href = "index.html";
        });
    }
});
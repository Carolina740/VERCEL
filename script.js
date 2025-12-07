document.addEventListener('DOMContentLoaded', function() {

    const cafeCarousel = document.getElementById('cafeCarousel');
    if (cafeCarousel) {
        new bootstrap.Carousel(cafeCarousel, {
            interval: 5000, 
            wrap: true
        });
    }

    const smoothScrollTo = (targetId) => {
        document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
    };

    document.getElementById('btn-ordenar').addEventListener('click', function() {
        alert('Redirigiendo a la plataforma de pedidos (Simulación)...');
    });

    const btnVerDesayuno = document.getElementById('btn-ver-desayuno');
    if (btnVerDesayuno) {
         btnVerDesayuno.addEventListener('click', function(e) {
             e.preventDefault();
             smoothScrollTo('#productos');
        });
    }

    const btnVerMenuCompleto = document.getElementById('btn-ver-menu-completo');
    if (btnVerMenuCompleto) {
         btnVerMenuCompleto.addEventListener('click', function(e) {
             e.preventDefault();
             alert('¡Descargando PDF del Menú Completo! (Simulación)');
             this.disabled = true;
             this.textContent = 'Menú Descargado';
        });
    }
    
    const btnPromocion = document.getElementById('btn-promocion-secreta');
    const codigoPromocion = document.getElementById('codigo-promocion');
    
    if (btnPromocion && codigoPromocion) {
        btnPromocion.addEventListener('click', function() {
            if (codigoPromocion.textContent === '') {
                codigoPromocion.textContent = 'CUPONLATTEART20';
                this.textContent = '¡Código Activado! (20% OFF)';
                codigoPromocion.classList.add('text-accent', 'fw-bold'); 
            } else {
                codigoPromocion.textContent = '';
                this.innerHTML = '<i class="fas fa-tags me-2"></i> ¡Click para Promoción!';
                codigoPromocion.classList.remove('text-accent', 'fw-bold');
            }
        });
    }
    
    const reservationForm = document.getElementById('reservationForm');
    const reservationResponse = document.getElementById('reservation-response');
    
    if (reservationForm) {
        reservationForm.addEventListener('submit', function(e) {
            e.preventDefault(); 
            
            const name = document.getElementById('reserva-name').value;
            const personas = document.getElementById('reserva-personas').value;
            const fecha = document.getElementById('reserva-fecha').value;

            const today = new Date();
            const selectedDate = new Date(fecha);

            if (selectedDate < today) {
                reservationResponse.innerHTML = `<div class="alert alert-warning" role="alert">
                    Por favor, selecciona una fecha y hora futura.
                </div>`;
                return;
            }

            console.log('Datos de Reserva:', { name, personas, fecha });

            reservationResponse.innerHTML = `<div class="alert alert-success" role="alert">
                ¡Reserva confirmada! **${name}**, para ${personas} personas el ${new Date(fecha).toLocaleString()}.
            </div>`;

            reservationForm.reset();
        });
    }

    
    document.querySelectorAll('[data-action="reservar-evento"]').forEach(button => {
        button.addEventListener('click', function() {
            const eventName = this.getAttribute('data-event-name');
            alert(`¡Reserva para el evento "${eventName}" registrada! (Simulación) Por favor, contacte para confirmar.`);
        });
    });

    
    document.addEventListener('click', function(e) {
        if (e.target.dataset.action === 'add-to-cart') {
            const itemName = e.target.dataset.item;
            alert(`¡Se añadió "${itemName}" al carrito!`);
            const modalElement = e.target.closest('.modal');
            if (modalElement) {
                const modalInstance = bootstrap.Modal.getInstance(modalElement);
                modalInstance.hide();
            }
        }
    });

});
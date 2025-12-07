document.addEventListener('DOMContentLoaded', function() {

    const mainNav = document.getElementById('mainNav');

    const updateNavbar = () => {
        if (!mainNav) return;

        if (window.scrollY === 0) {
            mainNav.classList.remove('navbar-scrolled');
        } else {
            mainNav.classList.add('navbar-scrolled');
        }
    };

    window.addEventListener('scroll', updateNavbar);
    updateNavbar(); 
    
    const btnOrdenar = document.getElementById('btn-ordenar');
    if (btnOrdenar) {
        btnOrdenar.addEventListener('click', function(e) {
            e.preventDefault();
            alert('¡Genial! Redirigiendo a nuestra plataforma de pedidos en línea.');
        });
    }

    const btnConocerMenu = document.getElementById('btn-conocer-menu');
    if (btnConocerMenu) {
        btnConocerMenu.addEventListener('click', function(e) {
             e.preventDefault();
             document.querySelector('#productos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const btnVerMasProductos = document.getElementById('btn-ver-mas-productos');
    if (btnVerMasProductos) {
         btnVerMasProductos.addEventListener('click', function(e) {
             e.preventDefault();
             this.textContent = '¡Gracias por ver nuestros productos!';
             this.disabled = true;
             console.log('Se cargaría más contenido aquí...');
        });
    }
    
    const btnRevelar = document.getElementById('btn-revelar-promocion');
    const codigoPromocion = document.getElementById('codigo-promocion');
    
    if (btnRevelar && codigoPromocion) {
        btnRevelar.addEventListener('click', function() {
            if (codigoPromocion.textContent === '***') {
                codigoPromocion.textContent = 'PASTEL2X1';
                btnRevelar.textContent = 'Código Revelado!';
                codigoPromocion.style.color = 'yellow'; 
                setTimeout(() => codigoPromocion.style.color = '', 300); 
                alert('¡Felicidades! Usa el código PASTEL2X1 al ordenar.');
            } else {
                codigoPromocion.textContent = '***';
                btnRevelar.innerHTML = '<i class="fas fa-gift me-2"></i> Revelar Código Secreto';
            }
        });
    }
    
    const contactForm = document.getElementById('contactForm');
    const formResponse = document.getElementById('form-response');
    
    if (contactForm && formResponse) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            console.log('Datos del formulario:', { name, email, message });

            formResponse.innerHTML = `<div class="alert alert-success" role="alert">
                ¡Gracias **${name}**! Tu mensaje ha sido enviado. Te contactaremos pronto.
            </div>`;

            contactForm.reset();
        });
    }

    
    const productoModals = document.querySelectorAll('[data-bs-toggle="modal"]');
    productoModals.forEach(item => {
        item.addEventListener('click', function() {
            const productoNombre = this.getAttribute('data-producto');
            console.log(`El usuario está viendo detalles de: ${productoNombre}`);
        });
    });
});
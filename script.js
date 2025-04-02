// Carrusel de imágenes en hero section
function rotateHeroSlides() {
    const slides = document.querySelectorAll('.hero-slide');
    const currentSlide = document.querySelector('.hero-slide.active');
    let nextSlide = currentSlide.nextElementSibling;
    
    if (!nextSlide) {
        nextSlide = slides[0];
    }
    
    currentSlide.classList.remove('active');
    nextSlide.classList.add('active');
}

// Animación de contadores
function animateCounter(counter) {
    const target = parseInt(counter.getAttribute('data-target'));
    const count = +counter.innerText;
    const increment = target / 200; // Velocidad de la animación

    if (count < target) {
        counter.innerText = Math.ceil(count + increment);
        setTimeout(() => animateCounter(counter), 1);
    } else {
        counter.innerText = target;
    }
}

function checkCounters() {
    const counters = document.querySelectorAll('.counter-number');
    const triggerBottom = window.innerHeight * 0.8;

    counters.forEach(counter => {
        const counterTop = counter.getBoundingClientRect().top;
        if (counterTop < triggerBottom && !counter.classList.contains('animated')) {
            counter.classList.add('animated');
            animateCounter(counter);
        }
    });
}

// Validación del formulario de contacto y citas
document.addEventListener('DOMContentLoaded', function() {
    // Iniciar el carrusel de imágenes
    setInterval(rotateHeroSlides, 5000); // Cambiar imagen cada 5 segundos

    // Iniciar observador de contadores
    window.addEventListener('scroll', checkCounters);
    checkCounters(); // Verificar al cargar la página

    const contactForm = document.getElementById('contactForm');
    const appointmentForm = document.getElementById('appointmentForm');
    
    // Prevenir el envío del formulario y validar
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        if (!form.checkValidity()) {
            event.stopPropagation();
        } else {
            // Aquí iría la lógica para enviar el formulario
            const formData = new FormData(form);
            
            // Validar archivos
            const archivos = form.querySelector('#archivos').files;
            let totalSize = 0;
            const maxSize = 5 * 1024 * 1024; // 5MB por archivo
            
            for (let archivo of archivos) {
                totalSize += archivo.size;
                
                // Validar tipo de archivo
                if (!archivo.type.match('image.*') && archivo.type !== 'application/pdf') {
                    alert('Por favor, suba solo archivos PDF, JPG o PNG');
                    return;
                }
                
                // Validar tamaño
                if (archivo.size > maxSize) {
                    alert('Cada archivo debe ser menor a 5MB');
                    return;
                }
            }
            
            // Aquí se simula el envío del formulario
            alert('¡Mensaje enviado con éxito!');
            form.reset();
        }
        
        form.classList.add('was-validated');
    });
});
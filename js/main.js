document.addEventListener('DOMContentLoaded', () => {
    console.log('Fresissima Clinical v4.0');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('.header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }
});

// Password Modal Functions
function showPasswordModal() {
    const modal = document.getElementById('passwordModal');
    if (modal) {
        modal.classList.remove('hidden');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');
        if (passwordInput) passwordInput.value = '';
        if (errorMessage) errorMessage.classList.add('hidden');
        if (passwordInput) passwordInput.focus();
    }
}

function hidePasswordModal() {
    const modal = document.getElementById('passwordModal');
    if (modal) {
        modal.classList.add('hidden');
        const passwordInput = document.getElementById('password');
        const errorMessage = document.getElementById('error-message');
        if (passwordInput) passwordInput.value = '';
        if (errorMessage) errorMessage.classList.add('hidden');
    }
}

function checkPassword(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;

    // Hash SHA-256 de la contraseña real (Fresissima2025!)
    // Para cambiar la contraseña: 
    // 1. Ve a https://emn178.github.io/online-tools/sha256.html
    // 2. Ingresa tu nueva contraseña
    // 3. Copia el hash generado y reemplaza el valor abajo
    const correctPasswordHash = 'e301dd5226d5308734f84ab4989c30d5d449ed7bd2376287c1da47b0d5554cf6';

    // Calcular hash de la contraseña ingresada
    crypto.subtle.digest('SHA-256', new TextEncoder().encode(password))
        .then(hashBuffer => {
            const hashArray = Array.from(new Uint8Array(hashBuffer));
            const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

            if (hashHex === correctPasswordHash) {
                // Guardar sesión con timestamp
                sessionStorage.setItem('fresissima_auth', 'true');
                sessionStorage.setItem('fresissima_auth_time', new Date().getTime().toString());
                // Redirigir al catálogo
                window.location.href = 'catalogo.html';
            } else {
                // Mostrar error
                const errorMessage = document.getElementById('error-message');
                if (errorMessage) errorMessage.classList.remove('hidden');
                document.getElementById('password').value = '';
                document.getElementById('password').focus();
            }
        })
        .catch(error => {
            console.error('Error al validar contraseña:', error);
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) errorMessage.classList.remove('hidden');
        });
}

// Cerrar modal al hacer clic fuera
document.addEventListener('click', function (event) {
    const modal = document.getElementById('passwordModal');
    if (modal && event.target === modal) {
        hidePasswordModal();
    }
});

// Cerrar con tecla Escape
document.addEventListener('keydown', function (event) {
    if (event.key === 'Escape') {
        hidePasswordModal();
    }
});

// Mobile Navigation Toggle
function toggleMobileNav() {
    const mobileNav = document.getElementById('mobileNav');
    if (mobileNav) {
        mobileNav.classList.toggle('active');
    }
}

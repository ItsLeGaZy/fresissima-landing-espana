document.addEventListener('DOMContentLoaded', () => {
    console.log('Fresissima Web App Loaded');

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href.length > 1) {
                e.preventDefault();
                document.querySelector(href).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Navbar scroll effect
    const header = document.querySelector('.main-header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Password Modal Functions
function showPasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.style.display = 'flex';
    document.getElementById('password').value = '';
    document.getElementById('error-message').style.display = 'none';
}

function hidePasswordModal() {
    const modal = document.getElementById('passwordModal');
    modal.style.display = 'none';
    document.getElementById('password').value = '';
    document.getElementById('error-message').style.display = 'none';
}

function checkPassword(event) {
    event.preventDefault();

    const password = document.getElementById('password').value;
    // CAMBIA ESTA CONTRASEÑA por la que quieras usar
    const correctPassword = 'Fresissima2025!';

    if (password === correctPassword) {
        // Guardar sesión
        sessionStorage.setItem('fresissima_auth', 'true');
        // Redirigir al catálogo
        window.location.href = 'catalogo.html';
    } else {
        // Mostrar error
        document.getElementById('error-message').style.display = 'block';
        document.getElementById('password').value = '';
        document.getElementById('password').focus();
    }
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

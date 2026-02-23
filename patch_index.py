import sys

file_path = r"c:\Users\Usuario\Desktop\AntiGravity\Web Fresissima\index.html"
with open(file_path, "r", encoding="utf-8") as f:
    content = f.read()

import re

# Patch Hero Title and Subtitle
content = re.sub(
    r'<span class="hero-label">Diseñado con doctores · Made in Italy</span>\s*<h1 class="hero-title">.*?</h1>',
    r'<span class="hero-label">Herramienta Interna Fresissima España</span>\n                    <h1 class="hero-title">\n                        Gestión Comercial.<br>\n                        Presupuestos Rápidos.<br>\n                        <span class="text-primary">Directo al Cliente.</span>\n                    </h1>',
    content,
    flags=re.DOTALL
)

content = re.sub(
    r'<p class="hero-subtitle">.*?<strong>.*?</strong>\s*</p>',
    r'<p class="hero-subtitle">\n                        Genera cotizaciones en 30 segundos, combinando los catálogos de \n                        <strong>Fresissima, Dentag, Vibra y Xtruments.</strong>\n                    </p>',
    content,
    flags=re.DOTALL
)

# Patch Hero Buttons
new_hero_btn = r'''<div class="hero-buttons">
                        <a href="presupuestador.html" class="btn btn-primary btn-lg" style="font-size: 1.25rem; padding: 1rem 2rem;">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" style="margin-right:8px; vertical-align:middle;">
                                <rect x="2" y="4" width="20" height="16" rx="2" ry="2"></rect>
                                <line x1="12" y1="12" x2="12" y2="16"></line>
                                <line x1="8" y1="12" x2="8" y2="16"></line>
                                <line x1="16" y1="12" x2="16" y2="16"></line>
                                <line x1="2" y1="8" x2="22" y2="8"></line>
                            </svg>
                            Abrir Calculadora
                        </a>
                        <a href="catalogo.html" class="btn btn-outline btn-lg">
                            Ver PDFs Originales
                        </a>
                    </div>'''

content = re.sub(
    r'<div class="hero-buttons">.*?</div>\s*</div>\s*<div class="hero-image">',
    new_hero_btn + '\n                </div>\n                <div class="hero-image">',
    content,
    flags=re.DOTALL
)

# Patch Bottom CTA 
new_cta = r'''<!-- CTA Section -->
        <section class="cta-section">
            <div class="container cta-container">
                <h2 class="cta-title">Herramienta Central para Ventas</h2>
                <p class="cta-subtitle">
                    Genera cotizaciones profesionales con IVA, descuentos y cantidades en segundos.
                </p>
                <div class="cta-buttons">
                    <a href="presupuestador.html" class="btn btn-white btn-lg" style="color: var(--accent-orange);">Abrir Calculadora de Presupuestos</a>
                </div>
            </div>
        </section>'''

content = re.sub(
    r'<!-- CTA Section -->.*?<section class="cta-section">.*?</section>',
    new_cta,
    content,
    flags=re.DOTALL
)

with open(file_path, "w", encoding="utf-8") as f:
    f.write(content)

print("index.html patched.")

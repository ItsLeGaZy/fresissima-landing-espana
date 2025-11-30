# Fresissima Landing España

Web informativa de Fresissima España - Fresas dentales de alta precisión Made in Italy.

## 🌟 Características

- **Diseño moderno** con paleta de colores corporativa naranja de Fresissima
- **Multi-página** con navegación intuitiva
- **Sección protegida** con contraseña para catálogos y precios
- **21 PDFs** organizados por categorías (Vademecums, listas de precios, documentación técnica)
- **Responsive** y optimizado para móviles
- **SEO optimizado** con meta tags y estructura semántica

## 📁 Estructura del Proyecto

```
Web Fresissima/
├── index.html              # Landing page principal
├── productos.html          # Catálogo público de productos
├── calidad.html           # Tecnología y certificaciones
├── contacto.html          # Formulario de contacto
├── catalogo.html          # 🔒 Área protegida con descargas
├── css/
│   └── style.css          # Estilos con variables CSS
├── js/
│   └── main.js            # JavaScript (incluye sistema de autenticación)
└── Fresissima/            # 📁 Carpeta con PDFs protegidos
    ├── Vademecums (8 PDFs)
    ├── Listas de precios (4 PDFs)
    ├── Catálogos especiales (6 PDFs)
    └── Documentación técnica (3 PDFs)
```

## 🔐 Acceso al Área Profesional

La contraseña para acceder al catálogo protegido es: **`Fresissima2025!`**

Para cambiarla, edita `js/main.js` línea 41.

## 🎨 Paleta de Colores

- **Primary Orange**: `#FF9900` - Naranja vibrante de Fresissima
- **Primary Light**: `#FFB84D` - Tono claro para hover
- **Accent**: `#E67300` - Naranja profundo
- **Background**: `#FFF8F0` - Fondo cálido

## 🚀 Instalación Local

```bash
# Clonar el repositorio
git clone https://github.com/TU_USUARIO/fresissima-landing-espana.git

# Abrir en navegador
# Simplemente abre index.html en tu navegador favorito
```

## 📝 Tecnologías Utilizadas

- HTML5 semántico
- CSS3 con variables personalizadas
- JavaScript Vanilla (sin frameworks)
- Google Fonts (Inter + Playfair Display)

## 📦 Características del Sistema de Autenticación

- Autenticación básica client-side
- SessionStorage para mantener sesión activa
- Redirección automática si no está autenticado
- Protección de PDFs mediante acceso a página protegida

⚠️ **Nota de Seguridad**: Este es un sistema de protección básico. Para seguridad real en producción, se recomienda implementar autenticación server-side.

## 📧 Contacto

**Fresissima España**
- Email: info@fresissima.es
- Teléfono: +34 900 000 000

---

Desarrollado con ❤️ para Fresissima España | DAM Group

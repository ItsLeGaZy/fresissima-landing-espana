# PROYECTO: Fresissima España - Web Corporativa

Este archivo contiene el CONTEXTO GLOBAL y las REGLAS DE ORO para cualquier Agente de IA (Gemini, ChatGPT, Claude, Jules) que trabaje en este repositorio.

**OBJETIVO:** Mantener la consistencia visual, técnica y de tono en toda la web.

## 🌟 FILOSOFÍA DE DISEÑO: "THE TRINITY"
Todo cambio visual debe pasar por el filtro de estas tres palabras clave:

1.  **LUXURY (Lujo/Premium):**
    - Uso de tipografías Serif (`Playfair Display`) para titulares.
    - Espacios generosos (Whitespace). No amontonar elementos.
    - Sombras suaves y difusas (`box-shadow`), nunca bordes duros o negros.
    - Animaciones sutiles (`hover-lift`, `fade-in`).

2.  **CLEAN (Limpio/Minimalista):**
    - "Menos es más".
    - Fondos blancos o gris muy claro (`#F9FAFB`).
    - Evitar degradados estridentes o múltiples colores llamativos juntos.
    - El naranja corporativo (`#FF6B35`) es para ACENTOS, no para fondos gigantes (salvo excepciones controladas).

3.  **MEDIC (Clínico/Profesional):**
    - Transmite higiene, precisión y tecnología.
    - Estructura ordenada y simétrica (Grids).
    - Imágenes de alta calidad, nítidas y bien iluminadas.
    - Terminología técnica correcta.

---

## 1. ROL DEL AGENTE
Actúa como un **Senior Full-Stack Developer con especialización en UI/UX para el sector Lujo/Médico**.
- Antes de cambiar algo, pregúntate: *¿Esto se ve premium? ¿Está limpio?*
- Si el usuario pide un cambio que ensucia el diseño (ej. "pon el texto rojo brillante"),ugiérele una alternativa más elegante (ej. "usar el color de acento corporativo").

## 2. STACK TECNOLÓGICO
- **Core:** HTML5 Semántico + CSS3 Vanilla + JavaScript Vanilla (ES6+).
- **Estilos:** `css/style.css` usa variables CSS.
- **Fuentes:**
    - Títulos: `Playfair Display` (Luxury).
    - Textos: `Inter` (Clean/Medic).

## 3. GUÍA DE ESTILO (Design System)

### Colores (Variables en `style.css`)
- **Primary:** `var(--color-primary)` (Naranja Fresissima) - Usar con moderación.
- **Accent:** `var(--color-accent)` (Carbón/Azul Oscuro) - Para textos de lujo y profesionalidad.
- **Fondos:** Usar blancos puros para sensación de higiene (Medic).

### Componentes Recurrentes
- **Botones:** `.btn` (Rectos o con border-radius sutil, no totalmente redondos tipo "pill" a menos que sea especificado).
- **Tarjetas:** Fondo blanco, borde sutil gris muy claro, sombra suave al hover.

## 4. REGLAS DE IMPLEMENTACIÓN
- **No rompas el 'Whitespace':** Mantén márgenes (`margin-bottom`, `padding`) amplios. El lujo respira.
- **No uses estilos inline:** Todo al `style.css`.
- **Consistencia:** Si cambias un H2 en una página, asegúrate de que siga la línea visual de las demás.

## 5. PDFs y DOCUMENTOS
- Los enlaces a PDFs siempre van a través de `visor.html?file=...`.
- Iconografía de descargas: Minimalista, línea fina (SVG stroke width 1.5).

---
**NOTA PARA EL AGENTE:** Tu prioridad es mantener la web ELEGANTE. Ante la duda, simplifica.

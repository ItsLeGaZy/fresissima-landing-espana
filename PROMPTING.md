# Guía de Prompting para Antigravity (y otros)

Esta guía es para ti. Úsala para copiar y pegar instrucciones (prompts) que ayuden a la IA a entender el contexto completo y no trabajar "a trozos".

---

## 🚀 La Regla de Oro: "El Mega-Prompt"
En lugar de pedir "cambia el título", pide el contexto, el cambio y la revisión en un solo mensaje.

### Estructura ideal de una petición:
1.  **Rol:** "Actúa como experto en diseño web y marketing."
2.  **Contexto:** "Estoy trabajando en la sección de [Productos/Inicio/Contacto]."
3.  **Instrucción:** "Quiero [QUÉ QUIERES LOGRAR]."
4.  **Restricciones:** "Usa las variables de `style.css`, mantén el tono profesional, no rompas el diseño responsive."
5.  **Referencia:** "Consulta `AGENTS.md` para seguir las reglas del proyecto."

---

## 📋 Plantillas de Copiar y Pegar

### 1. Para Añadir un Nuevo PDF al Catálogo
Usa esto cuando tengas un nuevo PDF (ej. `Nuevo_Catalogo_2025.pdf`) en la carpeta `Fresissima/`.

> "Antigravity, necesito añadir un nuevo documento al Área Profesional en `catalogo.html`.
>
> 1.  El archivo se llama: `Fresissima/NOMBRE_DEL_ARCHIVO.pdf`.
> 2.  El título visible debe ser: `[TÍTULO BONITO]`.
> 3.  Usa el componente `.download-card` existente para mantener el diseño igual a los demás.
> 4.  Asegúrate de que el enlace apunte a `visor.html?file=...` para que se abra en el visor integrado y no se descargue directamente.
> 5.  Verifica que el icono sea coherente con la categoría (cirugía, ortodoncia, lista de precios, etc.)."

### 2. Para Modificar Textos o Secciones (Sin romper el diseño)
Usa esto para cambiar textos de la Home o Nosotros.

> "Quiero actualizar el texto de la sección [NOMBRE SECCIÓN] en `index.html`.
>
> 1.  Reemplaza el título actual por: `[NUEVO TÍTULO]`.
> 2.  Cambia la descripción por: `[NUEVO TEXTO]`.
> 3.  **Importante:** Mantén las clases CSS (`.hero-title`, `.section-subtitle`, etc.) y las etiquetas `<span>` con colores (`.text-highlight`) exactamente donde están para no perder el estilo.
> 4.  Revisa `style.css` para asegurar que el nuevo texto no rompe el layout en móviles."

### 3. Para Cambios de Diseño (Colores, Fuentes, Espacios)
Usa esto si quieres cambiar algo visual globalmente.

> "Quiero ajustar el estilo visual de la web.
>
> 1.  Edita `css/style.css`.
> 2.  Objetivo: [DESCRIPCIÓN DEL CAMBIO, ej: Hacer los botones más redondos].
> 3.  **Filosofía:** Recuerda las palabras clave 'Luxury, Clean, Medic'. Asegúrate de que el cambio respeta el uso de espacio en blanco y la tipografía elegante.
> 4.  Busca la variable o clase responsable (ej. `border-radius` en `.btn`) y aplícalo allí para que cambie en TODAS las páginas a la vez.
> 5.  No añadas CSS inline en los HTML. Hazlo todo en el archivo CSS global."

### 4. Para Crear una Nueva Página desde Cero
Usa esto si quieres una página nueva (ej. `ofertas.html`).

> "Crea una nueva página llamada `[NOMBRE].html`.
>
> 1.  Usa `index.html` como plantilla base (copia el `<head>`, el `header` y el `footer` tal cual).
> 2.  Mantén los enlaces a `css/style.css` y `js/main.js`.
> 3.  En el `<main>`, crea una estructura limpia usando las clases contenedor (`.container`, `.section-padding`).
> 4.  Sigue las guías de diseño de `AGENTS.md`."

---

## 🛠️ Checklist de Verificación (Pídele esto al final)
Cuando Antigravity termine, dile:

> "Antes de dar por finalizado, ejecuta mentalmente este checklist:
> 1. ¿Has usado variables CSS (`var(--color-...)`) en lugar de colores fijos?
> 2. ¿Es el diseño responsive (se ve bien en móvil)?
> 3. ¿Has mantenido la consistencia con el resto de páginas?
> 4. ¿Funcionan todos los enlaces y botones?"

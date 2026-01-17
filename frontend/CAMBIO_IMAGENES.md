# Guía de Cambio de Imágenes - Proyecto Kresser

## Ubicaciones donde debes cambiar las imágenes en el proyecto:

### 1. **HOME - Hero Section** (`src/pages/Home.jsx`, línea ~9)
```jsx
backgroundImage: 'url(/path-to-hero-image.jpg)',
```
**Cambiar por:** La imagen principal de la página de inicio
**Recomendación:** Imagen de construcción o ingeniería con 1200x600px mínimo

---

### 2. **SERVICIO 1** (`src/pages/Servicio1.jsx`, línea ~18)
```jsx
backgroundImage: 'url(/path-to-servicio1-image.jpg)',
```
**Y también:** Línea ~77 - `src="https://via.placeholder.com/600x300?text=Servicio+1"`

**Cambiar por:** Imagen relacionada al Servicio 1
**Recomendación:** 600x300px o similar

---

### 3. **SERVICIO 2** (`src/pages/Servicio2.jsx`, línea ~18)
```jsx
backgroundImage: 'url(/path-to-servicio2-image.jpg)',
```
**Y también:** Línea ~77 - `src="https://via.placeholder.com/600x300?text=Servicio+2"`

**Cambiar por:** Imagen relacionada al Servicio 2

---

### 4. **SERVICIO 3** (`src/pages/Servicio3.jsx`, línea ~18)
```jsx
backgroundImage: 'url(/path-to-servicio3-image.jpg)',
```
**Y también:** Línea ~77 - `src="https://via.placeholder.com/600x300?text=Servicio+3"`

**Cambiar por:** Imagen relacionada al Servicio 3

---

## Cómo agregar las imágenes:

### Opción 1: Usar URL externa
```jsx
backgroundImage: 'url(https://ejemplo.com/imagen.jpg)',
```

### Opción 2: Usar archivos locales (Recomendado)
1. Coloca tus imágenes en la carpeta `/frontend/public/images/` (crea esta carpeta si no existe)
2. Reemplaza en el código:
```jsx
backgroundImage: 'url(/images/nombre-imagen.jpg)',
```

---

## Estructura de carpetas para imágenes:

```
frontend/
├── public/
│   └── images/
│       ├── hero.jpg                 (Imagen Home)
│       ├── servicio1.jpg            (Imagen Servicio 1)
│       ├── servicio2.jpg            (Imagen Servicio 2)
│       └── servicio3.jpg            (Imagen Servicio 3)
```

---

## Información de contacto a actualizar:

En `src/pages/Contacto.jsx`, actualiza:
- Teléfono: `+56912345678` (línea ~69)
- Email: `contacto@kresser.cl` (línea ~75)
- Dirección: `[Tu dirección aquí]` y `[Ciudad], Chile` (líneas ~81-82)

---

## Colores del proyecto (Paleta Kresser):

- **Primario (Azul Marino):** `#1A3A52`
- **Acento (Naranja):** `#FF8C42`
- **Gris Claro:** `#F5F7FA`
- **Blanco:** `#FFFFFF`
- **Texto:** `#333333`

Estos se pueden modificar en `/frontend/src/styles/global.css` en la sección `:root`

---

## Responsive Design:

El sitio está optimizado para:
- 📱 Dispositivos móviles (320px+)
- 📱 Tablets (768px+)
- 💻 Escritorio (1200px+)

Todos los cambios de imagen funcionarán correctamente en todos los dispositivos.

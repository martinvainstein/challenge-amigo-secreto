# 🎁 Amigo Secreto

![Status](https://img.shields.io/badge/STATUS-Completado-brightgreen)
![Made with](https://img.shields.io/badge/Made%20with-HTML%2FCSS%2FJS-blue)

> Pequeña app web en JavaScript para sortear un **amigo secreto** a partir de una lista de nombres ingresados por el usuario.

## 📚 Índice

* [Demo](#-demo)
* [Descripción](#-descripción)
* [Tecnologías](#-tecnologías)
* [Cómo ejecutar el proyecto](#-cómo-ejecutar-el-proyecto)
* [Uso](#-uso)
* [Estructura de carpetas](#-estructura-de-carpetas)
* [Cómo funciona](#-cómo-funciona)
* [Accesibilidad y UX](#-accesibilidad-y-ux)
* [Mejoras futuras](#-mejoras-futuras)
* [Contribuir](#-contribuir)

## ✨ Demo

* **GitHub Pages:** [publica el repositorio y enlaza aquí tu demo](https://martinvainstein.github.io/challenge-amigo-secreto/).
* O agrega una **captura animada (GIF)** mostrando el flujo: escribir nombres → añadir → sortear.

## 📝 Descripción

Esta app permite:

* **Agregar** nombres a una lista.
* **Visualizar** la lista en pantalla.
* **Sortear** un nombre al azar y mostrarlo como “amigo secreto”.

Al realizar el sorteo, la lista interna se **reinicia** para dejar el proyecto listo para un nuevo juego.

## 🛠 Tecnologías

* **HTML5** para la estructura.
* **CSS3** con variables y estilos responsivos.
* **JavaScript** (DOM API) para la lógica del juego.
* **Google Fonts** (Inter y Merriweather).

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio.
2. Abre `index.html` **directamente en tu navegador** (doble clic) o sirve el proyecto con una extensión como *Live Server*.
3. ¡Listo! No requiere instalación de dependencias.

## 👩‍💻 Uso

1. Escribe un nombre en el campo de texto.
2. Haz clic en **“Añadir”** para incorporarlo a la lista.
3. Repite el paso anterior hasta completar el grupo.
4. Presiona **“Sortear amigo”** para obtener un resultado aleatorio.

> Tip: si la lista está vacía, primero agrega al menos un nombre.

## 🗂 Estructura de carpetas

```
.
├── index.html        # Maquetado y elementos del juego
├── app.js            # Lógica de agregar y sortear
├── style.css         # Variables y estilos del sitio
└── assets/           # Imágenes e íconos (opcional)
```

## ⚙️ Cómo funciona

* Se mantiene un **arreglo en memoria** con los nombres.
* **Agregar**: toma el valor del input, valida que no esté vacío y lo agrega al arreglo; luego **renderiza** la lista en el DOM.
* **Sortear**: calcula un índice aleatorio y muestra el resultado en pantalla; tras el sorteo, **vacía** el arreglo para iniciar una nueva ronda.

## ♿ Accesibilidad y UX

* Etiquetas y textos claros.
* `aria-live="polite"` para anunciar el resultado del sorteo a lectores de pantalla.
* Botones con `aria-label` y texto visible.

## 🚀 Mejoras futuras

* Evitar **nombres duplicados** y recortar espacios.
* Permitir **eliminar** elementos individuales de la lista.
* Persistir la lista con **localStorage**.
* Validar un **mínimo de participantes** (por ejemplo, 2) antes de sortear.
* Permitir múltiples sorteos sin reiniciar automáticamente.
* Implementar modalidad de **emparejamientos** (A → B) sin repetición y sin “auto-asignación”.

## 🤝 Contribuir

¡Las *Issues* y *Pull Requests* son bienvenidas! Para contribuir:

1. Haz un fork del repositorio.
2. Crea una rama: `feat/mi-mejora`.
3. Abre un PR describiendo los cambios.

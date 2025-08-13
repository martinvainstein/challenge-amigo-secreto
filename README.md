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

* **GitHub Pages:** https://martinvainstein.github.io/challenge-amigo-secreto/

## 📝 Descripción

Esta app permite:

* **Agregar** nombres a una lista.
* **Visualizar** la lista en pantalla.
* **Sortear** un nombre al azar y mostrarlo como “amigo secreto”.

Al realizar el sorteo, la lista interna se **reinicia** para dejar el proyecto listo para un nuevo juego.
Luego del sorteo y al ingresar un nuevo nombre, la lista en pantalla y el resultado del sorteo se **reinician**.

## 🛠 Tecnologías

* **HTML5** para la estructura.
* **CSS3** con variables y estilos responsivos.
* **JavaScript** para la lógica del juego.
* **Google Fonts** (Inter y Merriweather).

## ▶️ Cómo ejecutar el proyecto

1. Clona este repositorio.
2. Abre `index.html` **directamente en tu navegador** (doble clic) o ejecuta el proyecto con una extensión como *Live Server*.
3. No requiere instalación de dependencias.

## 👩‍💻 Uso

1. Escribí un nombre en el campo de texto.
2. Hacé clic en **“Añadir”** para incorporarlo a la lista.
3. Repetí el paso anterior hasta completar el grupo.
4. Presioná **“Sortear amigo”** para obtener un resultado aleatorio.

> Tip: si la lista está vacía, primero agregá al menos un nombre.

## 🗂 Estructura de carpetas

```
.
├── index.html        # Maquetado y elementos del juego
├── app.js            # Lógica de agregar y sortear
├── style.css         # Variables y estilos del sitio
└── assets/           # Imágenes e íconos
```

## ⚙️ Cómo funciona

* Se mantiene un **arreglo en memoria** con los nombres.
* **Agregar**: toma el valor del input, valida que no esté vacío y lo agrega al arreglo; luego **renderiza** la lista en el DOM.
* **Sortear**: calcula un índice aleatorio y muestra el resultado en pantalla; tras el sorteo, **vacía** el arreglo para iniciar una nueva ronda.


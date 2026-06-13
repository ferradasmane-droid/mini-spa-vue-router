# vue-mini-spa-rout

## Descripción

Este proyecto corresponde a un ejercicio práctico desarrollado con **Vue 3** y **Vue Router 4**.
El objetivo es crear una mini aplicación tipo SPA que permite navegar entre distintas vistas sin recargar lapágina.

La aplicación incluye rutas estáticas, una ruta dinámica con parámetro `id`, navegación con `RouterLink`, visualización con `RouterView`, redirección simple y un alias opcional.


## Objetivo del ejercicio

Practicar lo esencial de Vue Router mediante una mini aplicación con:

- Rutas estáticas y dinámica con `:id`.
- Navegación usando `<RouterLink>`.
- Visualización de vistas usando `<RouterView>`.
- Paso de parametros como props usando `props: true`.
- Redirección simple dsde `/inicio` hacia `/`.
- Alias opcional para acceder a About desde `/about` y `/acerca`.


## Tecnologías utilizadas

- Vue 3
- Vue Router 4
- Vite
- HTML
- CSS
- JavaScript

## Estructura del proyecto

```Bash
src/
├─ assets/
|   └─ main.css
├─ router/
|   └─ index.js
├─ views/
|   ├─ HomeView.vue
|   ├─ CatalogView.vue
|   ├─ ProductView.vue
|   └─ AboutView.vue
|
├─ App.vue
└─ main.js
```

## Instalación y ejecución 

Para instalar las dependencias del proyecto:

```sh
npm install
```

Para ejecutar el proyecto en modo desarrollo:

```sh
npm run dev
```
Luego se debe abrir en el navegador la URL indicada por la terminal.

## Autor

**Nelly Ferrada**
Proyecto realizado para práctica de **Vue Router**
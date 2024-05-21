# SuperHero API - Alexis Herrera

## Descripción

Esta aplicación es un buscador de héroes que utiliza la API de SuperHero. Los usuarios pueden buscar héroes por nombre o ID. Está desarrollado para una prueba técnica. Para el stack se utilizó Vue 3 con el composition api, Typescript, Pinia para el manejo de estados, Tailwindcss, Chart.js y daisyUI para el manejo de los estilo y Vitest para el testing.

## Estructura del Proyecto

El proyecto está estructurado de la siguiente manera:

- `src/`: Contiene el código fuente de la aplicación.
  - `api/`: Contiene los archivos para la conexión con la API.
  - `components/`: Contiene los componentes Vue utilizados en la aplicación, los cuáles se encuentra divididos en carpetas agrupadas.
  - `interfaces/`: Contiene las interfaces TypeScript utilizadas en la aplicación, por ejemplo la de los heroes y sus interfaces derivadas.
  - `store/`: Contiene la lógica de estado de la aplicación utilizando Pinia, para manejar los datos de manera global y acceder a ellos de manera más fácil.
- `test/`: Contiene los tests de la aplicación.
- `public/`: Contiene los archivos estáticos de la aplicación.

## Cómo Ejecutar la Aplicación

1. Clona el repositorio.
2. Instala las dependencias con `npm install`.
3. Ejecuta la aplicación con `npm run dev`.

## Cómo Ejecutar los Tests

Ejecuta `npm run test` para correr los tests de la aplicación.


[MIT](LICENSE)
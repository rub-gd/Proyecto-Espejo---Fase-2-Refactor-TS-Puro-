# Proyecto Espejo - Fase 2:

En este proyecto estoy pasando la aplicación de lista de tareas de la fase uno de JavaScript a TypeScript.

## Características del proyecto:

- Se pueden añadir tareas y elegir la prioridad que tienen.
- Está la posibilidad de marcar una tarea como completada o pendiente.
- Se pueden usa filtros: para ver todas las tareas, solo las pendientes o solo las completadas.
- Está la lista espejo muestra todas las tareas, aunque se esté usando un filtro.
- La clase TaskManager se encarga de gestionar las tareas.

Las tareas no se guardan después de cerrar o recargar la página. Cuando se vuelve a abrir, aparecen otra vez las tareas de ejemplo.

## Requisitos:

- Node.js y npm, para poder instalar TypeScript.
- El compilador de TypeScript tsc.
- Un navegador para mostrar la aplicación web.
- Un servidor local (En mi caso la extensión de Visual Studio: Go Live).

## Instalación:

1. Si todavía no tienes TypeScript instalado, puedes instalarlo con este comando: npm install -g typescript

2. Después, comprueba que funciona con este comando: tsc -v

## Uso:

1. Abre una terminal en la carpeta del proyecto y ejecuta: tsc --init

    Este comando iniciará el compilador y el archivo configurador de TypeScript en el proyecto y creará el tsconfig.json

2. Despues usa este comando: tsc

    El comando convierte los archivos TypeScript a JavaScript y los guarda en `dist/`. Luego inicia Live Server desde la carpeta del proyecto y abre `index.html` en el navegador.


## Estructura del proyecto:

Los archivos principales están organizados de esta forma:

```text
.
├── dist/                         # Dentro se encuentran todos los archivos JavaScript generados.
├── src/
│   ├── app.ts                    # Es lo que se encarga de conectar la página con TaskManager.
│   ├── interfaces/
│   │   └── tarea.interface.ts    # Es lo que define cómo es una tarea.
│   └── models/
│       └── TaskManager.ts        # Se encarga de gestionar tareas.
├── index.html
├── style.css
└── tsconfig.json                 # Configuración de TypeScript.
```
import { TaskManager } from './models/TaskManager.js';

const taskManager = new TaskManager();
const formulario = document.querySelector('form');
const inputTitulo = document.querySelector('input');
const selectPrioridad = document.querySelector('select');

if (formulario === null) {
  console.error('No se encontró el formulario de tareas.');
} 
else if (inputTitulo === null) {
  console.error('No se encontró el campo del título.');
} 
else if (selectPrioridad === null) {
  console.error('No se encontró el selector de prioridad.');
} 
else {
  formulario.addEventListener('submit', event => {
    event.preventDefault();
    const prioridad = selectPrioridad.value;
        if (prioridad === 'Alta' || prioridad === 'Media' || prioridad === 'Baja') {
            const tareaAgregada = taskManager.agregarTarea(inputTitulo.value, prioridad);
            if (tareaAgregada) {
                formulario.reset();
            }
        } 
        else {
            console.error('La prioridad seleccionada no es válida.');
        }
  });
}

    const botones = document.querySelectorAll('button');

botones.forEach(boton => {
  if (boton.classList.contains('btn-filtro')) {
    boton.addEventListener('click', () => {
      const filtro = boton.dataset.filtro;
        if (filtro === 'Todas' || filtro === 'Pendientes' || filtro === 'Completadas') {
            const botonActivo = document.querySelector('.btn-filtro.active');
            if (botonActivo !== null) {
                botonActivo.classList.remove('active');
            }
            boton.classList.add('active');
                taskManager.cambiarFiltro(filtro);
        } 
        else {
            console.error('El filtro seleccionado no es válido.');
        }
    });
  }
});
    taskManager.inicializarApp();
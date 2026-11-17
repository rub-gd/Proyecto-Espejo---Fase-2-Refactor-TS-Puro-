import type { Tarea } from '../interfaces/tarea.interface';

export class TaskManager {
  private tareas: Tarea[];
  private filtroActual: string;
    constructor() {
        this.tareas = [
        { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
        { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
        { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false }
        ];
            this.filtroActual = 'Todas';
    }

  public cambiarEstado(id: number): boolean {
    let tareaEncontrada = false;
        this.tareas.forEach(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
                tareaEncontrada = true;
            }
        });
    return tareaEncontrada;
  }
}
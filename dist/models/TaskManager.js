export class TaskManager {
    tareas;
    filtroActual;
    constructor() {
        this.tareas = [
            { id: 1, titulo: 'Aprender la sintaxis de ES6', prioridad: 'Alta', completada: true },
            { id: 2, titulo: 'Dominar la asincronía y Fetch', prioridad: 'Media', completada: false },
            { id: 3, titulo: 'Migrar el proyecto a Angular', prioridad: 'Baja', completada: false }
        ];
        this.filtroActual = 'Todas';
    }
    cambiarFiltro(filtro) {
        this.filtroActual = filtro;
        this.pintarTareas();
    }
    agregarTarea(titulo, prioridad) {
        const limpiadoDeTitulo = titulo.trim();
        if (limpiadoDeTitulo === '') {
            return false;
        }
        const nuevaTarea = {
            id: Date.now(),
            titulo: limpiadoDeTitulo,
            prioridad: prioridad,
            completada: false
        };
        this.tareas = [...this.tareas, nuevaTarea];
        this.pintarTareas();
        return true;
    }
    cambiarEstado(id) {
        let tareaEncontrada = false;
        this.tareas.forEach(tarea => {
            if (tarea.id === id) {
                tarea.completada = !tarea.completada;
                tareaEncontrada = true;
            }
        });
        if (tareaEncontrada) {
            this.pintarTareas();
        }
        return tareaEncontrada;
    }
    pintarTareas() {
        const listaContenedor = document.getElementById('lista-tareas');
        if (listaContenedor === null) {
            console.error('No se encontró la lista de tareas.');
            return;
        }
        listaContenedor.innerHTML = '';
        const tareasFiltradas = this.tareas.filter(tarea => {
            if (this.filtroActual === 'Pendientes') {
                return !tarea.completada;
            }
            if (this.filtroActual === 'Completadas') {
                return tarea.completada;
            }
            return true;
        });
        tareasFiltradas.forEach(tarea => {
            const li = document.createElement('li');
            li.textContent = tarea.titulo;
            li.classList.add('item-tarea', tarea.prioridad);
            if (tarea.completada) {
                li.classList.add('completada');
            }
            else {
                li.classList.add('pendiente');
            }
            const boton = document.createElement('button');
            boton.textContent = 'Cambiar estado';
            boton.addEventListener('click', () => {
                this.cambiarEstado(tarea.id);
            });
            li.appendChild(boton);
            listaContenedor.appendChild(li);
        });
    }
    async inicializarApp() {
        await new Promise(resolve => setTimeout(resolve, 1500));
        const loadingState = document.getElementById('loading-state');
        if (loadingState === null) {
            console.error('No se encontró el mensaje de carga.');
        }
        else {
            loadingState.style.display = 'none';
        }
        this.pintarTareas();
    }
}
//# sourceMappingURL=TaskManager.js.map
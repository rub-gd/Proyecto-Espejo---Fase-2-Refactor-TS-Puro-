export declare class TaskManager {
    private tareas;
    private filtroActual;
    constructor();
    cambiarFiltro(filtro: 'Todas' | 'Pendientes' | 'Completadas'): void;
    agregarTarea(titulo: string, prioridad: 'Alta' | 'Media' | 'Baja'): boolean;
    cambiarEstado(id: number): boolean;
    pintarTareas(): void;
    inicializarApp(): Promise<void>;
}
//# sourceMappingURL=TaskManager.d.ts.map
export interface Tarea {
  id?: number;
  nombre: string;
  descripcion: string;
  estado: boolean;
  fecha: Date;
  borrado: boolean;
}

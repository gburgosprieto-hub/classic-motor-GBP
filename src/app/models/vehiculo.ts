export interface Vehiculo {
  id: number;
  marca: string;
  modelo: string;
  anio: number;
  categoria: 'Pre-guerra' | 'Clásico' | 'Sport' | 'Descapotable';
  potenciaCv: number;
  imagen: string;
  alt: string;
  descripcion: string;
  historial: string;
  destacado: boolean;
}

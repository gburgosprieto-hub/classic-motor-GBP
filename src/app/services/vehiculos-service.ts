import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

import { Vehiculo } from '../models/vehiculo';

@Service()
export class VehiculosService {
  private readonly http = inject(HttpClient);
  private readonly _vehiculos = signal<Vehiculo[]>([]);

  readonly vehiculos = this._vehiculos.asReadonly();

  cargar(): void {
    this.http.get<Vehiculo[]>('data/vehiculos.json').subscribe((datos) => {
      this._vehiculos.set(datos);
    });
  }

  obtenerPorId(id: number): Vehiculo | undefined {
    return this._vehiculos().find((vehiculo) => vehiculo.id === id);
  }
}

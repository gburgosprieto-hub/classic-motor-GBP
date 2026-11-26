import { HttpClient } from '@angular/common/http';
import { inject, Service, signal } from '@angular/core';

import { Etapa } from '../models/etapa';

@Service()
export class EtapasService {
  private readonly http = inject(HttpClient);
  private readonly _etapas = signal<Etapa[]>([]);

  readonly etapas = this._etapas.asReadonly();

  cargar(): void {
    this.http.get<Etapa[]>('data/etapas.json').subscribe((datos) => {
      this._etapas.set(datos);
    });
  }
}

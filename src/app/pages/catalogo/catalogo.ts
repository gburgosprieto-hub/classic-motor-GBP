import { Component, inject } from '@angular/core';

import { VehiculosService } from '../../services/vehiculos-service';

@Component({ selector: 'app-catalogo', templateUrl: './catalogo.html', styleUrl: './catalogo.scss' })
export class Catalogo {
  private readonly vehiculosService = inject(VehiculosService);

  vehiculos = this.vehiculosService.vehiculos;
}

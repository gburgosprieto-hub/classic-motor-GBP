import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

import { EtapasService } from './services/etapas-service';
import { VehiculosService } from './services/vehiculos-service';

@Component({
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  private readonly vehiculosService = inject(VehiculosService);
  private readonly etapasService = inject(EtapasService);

  menuAbierto = signal(false);

  constructor() {
    // Se cargan una vez al iniciar la aplicación.
    this.vehiculosService.cargar();
    this.etapasService.cargar();
  }

  alternarMenu(): void {
    this.menuAbierto.update((abierto) => !abierto);
  }
}

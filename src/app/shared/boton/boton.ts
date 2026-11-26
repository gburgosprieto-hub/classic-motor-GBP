import { Component, input } from '@angular/core';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.html',
  styleUrl: './boton.scss',
})
export class Boton {
  variante = input<'primario' | 'secundario' | 'fantasma'>('primario');
  deshabilitado = input(false);
  estado = input<'normal' | 'hover' | 'foco' | 'activo'>('normal');
}

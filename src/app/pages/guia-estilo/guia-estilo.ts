import { Component } from '@angular/core';

import { Boton } from '../../shared/boton/boton';

@Component({
  imports: [Boton],
  selector: 'app-guia-estilo',
  templateUrl: './guia-estilo.html',
  styleUrl: './guia-estilo.scss',
})
export class GuiaEstilo {
  colores = [
    { nombre: 'Verde carreras', valor: '#004225', clase: 'guia-estilo__color--verde' },
    { nombre: 'Burdeos', valor: '#5E1224', clase: 'guia-estilo__color--burdeos' },
    { nombre: 'Cuero', valor: '#8B5A2B', clase: 'guia-estilo__color--cuero' },
    { nombre: 'Cromo', valor: '#C9CED6', clase: 'guia-estilo__color--cromo' },
    { nombre: 'Crema', valor: '#F4EEDF', clase: 'guia-estilo__color--crema' },
    { nombre: 'Carbón', valor: '#1E1B18', clase: 'guia-estilo__color--carbon' },
  ];

  variantesBoton: ('primario' | 'secundario' | 'fantasma')[] = [
    'primario',
    'secundario',
    'fantasma',
  ];

  estadosBoton: {
    nombre: string;
    estado: 'normal' | 'hover' | 'foco' | 'activo';
    deshabilitado: boolean;
  }[] = [
    { nombre: 'Normal', estado: 'normal', deshabilitado: false },
    { nombre: 'Hover', estado: 'hover', deshabilitado: false },
    { nombre: 'Foco', estado: 'foco', deshabilitado: false },
    { nombre: 'Activo', estado: 'activo', deshabilitado: false },
    { nombre: 'Deshabilitado', estado: 'normal', deshabilitado: true },
  ];
}

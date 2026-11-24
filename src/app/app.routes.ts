import { Routes } from '@angular/router';

import { Catalogo } from './pages/catalogo/catalogo';
import { GuiaEstilo } from './pages/guia-estilo/guia-estilo';
import { Inicio } from './pages/inicio/inicio';
import { Inscripcion } from './pages/inscripcion/inscripcion';
import { Itinerario } from './pages/itinerario/itinerario';
import { NoEncontrado } from './pages/no-encontrado/no-encontrado';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'inicio' },
  { path: 'inicio', component: Inicio },
  { path: 'catalogo', component: Catalogo },
  { path: 'itinerario', component: Itinerario },
  { path: 'inscripcion', component: Inscripcion },
  { path: 'guia-estilo', component: GuiaEstilo },
  { path: '**', component: NoEncontrado },
];

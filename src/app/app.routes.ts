import { Routes } from '@angular/router';
import { MainPage } from './main/main.page';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  { path: 'main',loadComponent:()=> import('./main/main.page').then(m=>m.MainPage)},
  {
    path: 'inscribirse',
    loadComponent: () => import('./inscribirse/inscribirse.page').then( m => m.InscribirsePage)
  },
  {
    path: 'inicio',
    loadComponent: () => import('./inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'mapas',
    loadComponent: () => import('./mapas/mapas.page').then( m => m.MapasPage)
  }
];
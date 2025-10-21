import { Routes } from '@angular/router';
import{provideRouter} from '@angular/router';

export const routes: Routes = [
 
  {
    path: '',
    redirectTo: 'Inicio',
    pathMatch: 'full',
  },
  {
    path: 'Inicio',
    loadComponent: () => import('./pages/inicio/inicio.page').then( m => m.InicioPage)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.page').then( m => m.AboutPage)
  },
  {
    path: 'contacto',
    loadComponent: () => import('./pages/contacto/contacto.page').then( m => m.ContactoPage)
  },
  {
    path: 'perfil',
    loadComponent: () => import('./pages/perfil/perfil.page').then( m => m.PerfilPage)
  },
  
  
];

export const appRouter = provideRouter(routes);
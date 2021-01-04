import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./pages/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
  {
    path: 'contacto',
    loadChildren: () =>
      import('./pages/contactos/contactos.module').then(
        (m) => m.ContactosModule
      ),
  },
  {
    path: 'crear-contacto',
    loadChildren: () =>
      import('./pages/crear-contacto/crear-contacto.module').then(
        (m) => m.CrearContactoModule
      ),
  },
  {
    path: 'actualizar-contacto',
    loadChildren: () =>
      import('./pages/actualizar-contacto/actualizar-contacto.module').then(
        (m) => m.ActualizarContactoModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

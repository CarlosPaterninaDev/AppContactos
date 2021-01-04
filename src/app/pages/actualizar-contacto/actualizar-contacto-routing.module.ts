import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ActualizarContactoComponent } from './actualizar-contacto.component';

const routes: Routes = [
  {
    path: '',
    component: ActualizarContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ActualizarContactoPageRoutingModule {}

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrearContactoComponent } from './crear-contacto.component';

const routes: Routes = [
  {
    path: '',
    component: CrearContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrearContactoPageRoutingModule {}

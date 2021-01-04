import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarContactoComponent } from './actualizar-contacto.component';
import { ActualizarContactoPageRoutingModule } from './actualizar-contacto-routing.module';



@NgModule({
  declarations: [ActualizarContactoComponent],
  imports: [
    CommonModule,
    ActualizarContactoPageRoutingModule
  ]
})
export class ActualizarContactoModule { }

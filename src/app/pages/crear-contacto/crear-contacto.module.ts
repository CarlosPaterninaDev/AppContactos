import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearContactoComponent } from './crear-contacto.component';
import { CrearContactoPageRoutingModule } from './crear-contacto-routing.module';


@NgModule({
  declarations: [CrearContactoComponent],
  imports: [
    CommonModule,
    CrearContactoPageRoutingModule
  ]
})
export class CrearContactoModule { }

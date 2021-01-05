import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CrearContactoComponent } from './crear-contacto.component';
import { CrearContactoPageRoutingModule } from './crear-contacto-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [CrearContactoComponent],
  imports: [
    CommonModule,
    CrearContactoPageRoutingModule,
    SharedModule
  ]
})
export class CrearContactoModule { }

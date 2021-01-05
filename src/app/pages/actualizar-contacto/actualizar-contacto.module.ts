import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActualizarContactoComponent } from './actualizar-contacto.component';
import { ActualizarContactoPageRoutingModule } from './actualizar-contacto-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [ActualizarContactoComponent],
  imports: [
    CommonModule,
    ActualizarContactoPageRoutingModule,
    SharedModule
  ]
})
export class ActualizarContactoModule { }

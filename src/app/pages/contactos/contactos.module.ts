import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContactosComponent } from './contactos.component';
import { ContactoPageRoutingModule } from './contactos-routing.module';
import { CardContactoComponent } from './components/card-contacto/card-contacto.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [ContactosComponent, CardContactoComponent],
  imports: [
    CommonModule,
    ContactoPageRoutingModule,
    FontAwesomeModule
  ]
})
export class ContactosModule { }

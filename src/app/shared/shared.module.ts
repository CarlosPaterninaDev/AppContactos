import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormContactoComponent } from './form-contacto/form-contacto.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [HeaderComponent, FormContactoComponent],
  imports: [CommonModule, FontAwesomeModule, ReactiveFormsModule, NgxSpinnerModule ],
  exports: [HeaderComponent, FormContactoComponent],
})
export class SharedModule {}

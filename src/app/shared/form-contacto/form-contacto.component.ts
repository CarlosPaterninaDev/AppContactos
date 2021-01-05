import { Component, Input, OnChanges, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { IContacto } from 'src/app/interfaces/interfaces';
import { Contacto } from 'src/app/models/contacto.model';
import { ContactoService } from 'src/app/service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-contacto',
  templateUrl: './form-contacto.component.html',
  styleUrls: ['./form-contacto.component.css'],
})
export class FormContactoComponent implements OnInit, OnChanges {
  @Input() contacto: IContacto;
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private _contacto: ContactoService,
    private spinner: NgxSpinnerService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.buildForm();

    console.log(this.contacto);
  }

  ngOnChanges(): void {}

  private buildForm() {
    this.form = this.formBuilder.group({
      id: [this.contacto?.id, [Validators.required]],
      fullName: [
        this.contacto?.fullName,
        [Validators.required, Validators.maxLength(200)],
      ],
      celular: [this.contacto?.celular, [Validators.required]],
      direccion: [
        this.contacto?.direccion,
        [Validators.required, Validators.maxLength(200)],
      ],
      fechaCumpleanios: [
        this.contacto?.fechaCumpleanios,
        [Validators.required],
      ],
    });

    this.form.valueChanges.subscribe((value) => {
      console.log(value);

    });
  }

  save(formulario: Event) {
    formulario.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;

      const actualizar = this.contacto === undefined ? false : true;

      const nuevoContacto = new Contacto(
        actualizar ? this.contacto.idbd : Date.now(),
        value.id,
        value.fullName,
        value.celular,
        value.direccion,
        value.fechaCumpleanios
      );

      // console.log(nuevoContacto);

      if (actualizar) {
        const respuesta = this._contacto.updateContacto(nuevoContacto);
        if (respuesta) {
          this.form.reset();
          this.spinnerLoading('Contacto Actualizado!');
          


        
        }
      } else {
        const respuesta = this._contacto.addContacto(nuevoContacto);
        if (respuesta) {

          this.form.reset();

          this.spinnerLoading('Contacto Guardado!');
        } else{

          Swal.fire({

            icon: 'error',
            title: 'Usuario ya registrado, recomendamos actualizar',
            text: "Número de identificación duplicado",
            showConfirmButton: false,
            timer: 2500
          })
        }
      }
    } else {
      this.form.markAllAsTouched();
    }
  }

  spinnerLoading(title: string): void{

    this.spinner.show();

          setTimeout(() => {
            /** spinner ends after 5 seconds */
            console.log('spinner');
            this.spinner.hide();
            this.router.navigateByUrl('/dashboard')

            Swal.fire({

              icon: 'success',
              title,
              showConfirmButton: false,
              timer: 1500
            })

          }, 2000);

  }

  getNoValido(control: string): boolean {
    return this.form.get(control).invalid && this.form.get(control).touched;
  }
}

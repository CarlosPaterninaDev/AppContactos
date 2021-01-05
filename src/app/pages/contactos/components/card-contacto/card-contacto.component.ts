import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUserCircle,
  faTrash,
  faUserEdit,
  faBirthdayCake
} from '@fortawesome/free-solid-svg-icons';
import { IContacto } from 'src/app/interfaces/interfaces';
import { ContactoService } from 'src/app/service/contacto.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-card-contacto',
  templateUrl: './card-contacto.component.html',
  styleUrls: ['./card-contacto.component.css'],
})
export class CardContactoComponent implements OnInit {
  userCircle = faUserCircle;
  trash = faTrash;
  edit = faUserEdit;
  cumple = faBirthdayCake;
  @Input() contacto : IContacto;
  @Output() contactoSeleccionado = new EventEmitter<IContacto>();


  constructor(private router: Router, private _contacto: ContactoService) {}

  ngOnInit(): void {}

  deleteContacto() {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
      },
      buttonsStyling: true
    })
    
    swalWithBootstrapButtons.fire({
      title: 'Desea eliminar el resgitro?',
      text: "Estos cambios son irrevertibles!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, eliminar!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
    

        swalWithBootstrapButtons.fire(
          'Eliminado!',
          `El contacto ${this.contacto.fullName} fue eliminado`,
          'success'
        )
        this.contactoSeleccionado.emit(this.contacto);

      } else if (
        /* Read more about handling dismissals below */
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire(
          'Cancelado!',
          'El contacto sigue en un registros!',
          'error'
        )
      }
    })
    
  }
  editContacto() {
    this.router.navigateByUrl(`/actualizar-contacto/${this.contacto.idbd}` );
  }
}

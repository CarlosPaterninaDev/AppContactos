import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {
  faUserCircle,
  faTrash,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons';
import { Contacto } from 'src/app/interfaces/interfaces';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-card-contacto',
  templateUrl: './card-contacto.component.html',
  styleUrls: ['./card-contacto.component.css'],
})
export class CardContactoComponent implements OnInit {
  userCircle = faUserCircle;
  trash = faTrash;
  edit = faUserEdit;
  @Input() contacto : Contacto;
  @Output() contactoSeleccionado = new EventEmitter<Contacto>();
  @Output() contactoEditar = new EventEmitter<Contacto>();
  

  constructor(private router: Router, private _contacto: ContactoService) {}

  ngOnInit(): void {}

  deleteContacto() {
    
    this.contactoSeleccionado.emit(this.contacto);
  }
  editContacto() {
    this.router.navigateByUrl('/actualizar-contacto' );
  }
}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Contacto } from 'src/app/interfaces/interfaces';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-contactos',
  templateUrl: './contactos.component.html',
  styleUrls: ['./contactos.component.css']
})
export class ContactosComponent implements OnInit {

  userPlus = faUserPlus;
  contactos: Contacto[] = [];
  
  constructor(private router: Router, private _contacto: ContactoService) { }

  ngOnInit(): void {

    this.contactos = this._contacto.contactos;

  }

  crearContacto(){
    this.router.navigateByUrl('/crear-contacto')
  }

  eliminarContacto(contacto: Contacto){

    this._contacto.deletedContacto(contacto);
    


  }

}

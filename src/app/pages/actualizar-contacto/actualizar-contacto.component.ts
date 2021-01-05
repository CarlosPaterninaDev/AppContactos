import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IContacto } from 'src/app/interfaces/interfaces';
import { ContactoService } from 'src/app/service/contacto.service';

@Component({
  selector: 'app-actualizar-contacto',
  templateUrl: './actualizar-contacto.component.html',
  styleUrls: ['./actualizar-contacto.component.css'],
})
export class ActualizarContactoComponent implements OnInit {
  contacto: IContacto;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _contacto: ContactoService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(({ user }) => {
      this.contacto = this._contacto.getContacto(user);
      console.log(this.contacto);
    });
  }
}

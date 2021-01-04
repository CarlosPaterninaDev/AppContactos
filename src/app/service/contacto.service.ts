import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Contacto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactos: Contacto[] = [
    {
      id: 123456,
      fullName: 'Carlos Paternina',
      celular: '301362202',
      direccion: 'Barranquilla',
      fechaCumpleanios: '2021-01-03',
    },
    {
      id: 12345,
      fullName: 'Mario Paternina',
      celular: '301362202',
      direccion: 'Barranquilla',
      fechaCumpleanios: '2020-01-01',
    },
    {
      id: 1236,
      fullName: 'Carlos Perez',
      celular: '301362202',
      direccion: 'Barranquilla',
      fechaCumpleanios: '2020-01-01',
    },
  ];

  constructor() {
    console.log('Contacto Service');
    this.setContactos();
    this.getContactos();
  }

  setContactos() {
    localStorage.setItem('contactos', JSON.stringify(this.contactos));
  }

  getContactos() {
    this.contactos = JSON.parse(localStorage.getItem('contactos'));
  }

  getCantidadContactos() {
    return this.contactos.length;
  }

  getHappyBirthDayToday() {
    const hbd = this.contactos.filter((e) => {
      if (
        moment().format('YYYY-MM-DD') ==
        moment(e.fechaCumpleanios).format('YYYY-MM-DD')
      ) {
        return e;
      }
    });

    return hbd.length;
  }

  deletedContacto(contacto: Contacto) {
    const filtro = this.contactos.findIndex((e) => e.id === contacto.id);
    
    this.contactos.splice(filtro, 1);
    
    this.setContactos();
  }
}

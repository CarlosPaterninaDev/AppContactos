import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { IContacto } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root',
})
export class ContactoService {
  contactos: IContacto[] = [
    {
      idbd: 1,
      id: 123456,
      fullName: 'Carlos Paternina',
      celular: '301362202',
      direccion: 'Barranquilla',
      fechaCumpleanios: '2021-01-05',
    },
    {
      idbd: 2,
      id: 12345,
      fullName: 'Mario Paternina',
      celular: '301362202',
      direccion: 'Barranquilla',
      fechaCumpleanios: '2020-01-01',
    },
    {
      idbd: 3,
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
    const arrayHBD = this.contactos.filter((e) => {
      if (
        moment().format('YYYY-MM-DD') ==
        moment(e.fechaCumpleanios).format('YYYY-MM-DD')
      ) {
        return e;
      }
    });

    return arrayHBD.length;
  }

  getCumplimentado(contacto: IContacto) {
    if (
      moment().format('YYYY-MM-DD') ==
      moment(contacto.fechaCumpleanios).format('YYYY-MM-DD')
    ) {
      return true;
    } else {
      return false;
    }
  }

  deletedContacto(contacto: IContacto) {
    const filtro = this.contactos.findIndex((e) => e.idbd === contacto.idbd);

    this.contactos.splice(filtro, 1);

    this.setContactos();
  }

  addContacto(contacto: IContacto) {
    const usuarioExiste = this.contactos.find((e) => e.id === contacto.id);

    if (usuarioExiste) {
      console.log('Usuario ya existe debe editar');
      return false;
    } else {
      this.contactos.push(contacto);
      this.setContactos();
      return true;
    }
  }

  updateContacto(contacto: IContacto) {
    this.contactos.find((e) => {
      if (e.id === contacto.id) {
        e.id = contacto.id;
        e.fullName = contacto.fullName;
        e.celular = contacto.celular;
        e.direccion = contacto.direccion;
        e.fechaCumpleanios = contacto.fechaCumpleanios;
        console.log('Usuario actualizado exitosamen');

        this.setContactos();
      }
    });

    return true;
  }

  getContacto(idUser: string) {
    return this.contactos.find((e) => e.idbd === Number(idUser));
  }
}

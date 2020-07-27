import { Injectable } from '@angular/core';
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  imgLateral: string;
  titulo: string;
  textoHTML: string;
  textBoton: string;
  enlace: boolean;
  enlaceBoton: string;
  typeModal: any;

  constructor() { }

  close() {
    this.imgLateral = '';
    this.titulo = '';
    this.textoHTML = '';
    this.enlace = false;
    this.enlaceBoton = '';
    this.textBoton = '';
    this.typeModal = '';
    $('#modal').modal('toggle');
  }

  open( title, textHTML, imagen, enlace, enlaceBoton, textBoton, typeModal) {
    $('#modal').modal('show');
    this.imgLateral = imagen;
    this.titulo = title;
    this.textoHTML = textHTML;
    this.enlace = enlace;
    this.enlaceBoton = enlaceBoton;
    this.textBoton = textBoton;
    this.typeModal = typeModal;
  }
}

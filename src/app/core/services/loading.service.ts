import { Injectable } from '@angular/core';
declare var bodymovin: any;
declare var $: any;

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  titulo: string;
  texto: string;
  imgTop: string;
  imgClass: string;
  animacion: boolean;

  constructor() { 
    this.titulo = 'Por favor espera un momento ...';
    this.texto = 'Estamos validando tu identidad';
  }

  close() {
    // tslint:disable-next-line: only-arrow-functions
    setTimeout(function () {
      $('#loading').modal('hide');
      // this.texto = '';
      // this.titulo = '';
      // this.imgTop = '';
      // this.imgClass = '';
      // this.animacion = false;
      // $('#loadingAnimation').html('');
    }, 1000);
  }

  open(title, textHTML, imagen, imagenclass, animacion) {
    this.texto = textHTML;
    this.titulo = title;
    this.imgTop = imagen;
    this.imgClass = imagenclass;
    this.animacion = animacion;
    if (this.animacion) {
      $('#loadingAnimation').html('');
      const animation = bodymovin.loadAnimation({
        container: document.getElementById('loadingAnimation'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: this.imgTop,
        crossOrigin: null
      });
    }
    setTimeout(() => {
      $('#loading').modal({ backdrop: 'static', keyboard: false, show: true });
    }, 500);
  }
}
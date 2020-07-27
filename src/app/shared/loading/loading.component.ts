import { Component, OnInit } from '@angular/core';
import { LoadingService } from 'src/app/core/services/loading.service';

declare var bodymovin: any;

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  titulo: any;
  texto: any;
  constructor(public loadingService : LoadingService ) { 
    this.titulo = 'Por favor espera un momento ...';
    this.texto = 'Estamos validando tu propuesta';
  }

  ngOnInit() {
  }

}

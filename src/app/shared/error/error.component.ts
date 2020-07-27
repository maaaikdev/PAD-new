import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  sesionC: any;
  constructor(private sesion: SesionService) { 
    this.sesionC = this.sesion.sesionCookie;
  }

  ngOnInit() {
  }

}

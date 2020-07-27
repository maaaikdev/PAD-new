import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  year: any;
  constructor(public sesion: SesionService) {

   }

  ngOnInit() {
    const d = new Date();
    this.year = d.getFullYear();
  }

}

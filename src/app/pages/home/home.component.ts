import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loginUrl: any;
  private jsonUrl = 'https://images-s3-ecs-sp-latam.s3.amazonaws.com/catchupon/aliados/aliados.json';
  public dataJsonAliados: any = [];

  constructor(public sesion: SesionService, public router: Router, private http: HttpClient) {
    this.loginUrl = environment.urlLogin;
  }

  ngOnInit() {
    if (this.sesion.sesionCookie) {
      this.router.navigate(['/deudas']);
    }

    this.getJsonAliados();
  }

  public getJsonAliados() {
    return this.http.get(this.jsonUrl).subscribe(data => {
      this.dataJsonAliados = data;
    });
  }

}

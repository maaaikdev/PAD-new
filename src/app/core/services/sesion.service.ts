import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { content } from '../interface/content.interface';

@Injectable({
  providedIn: 'root'
})
export class SesionService {

  loggedIn: string;
  datos = {} as content;
  sesionCookie: string;
  infoComplete: any;
  user: any;

  constructor(public cookieService: CookieService) {
    // this.loggedIn = localStorage.getItem('loggedIn');
    this.getCookie();
    // this.sesionCookie = '13f0423e-a23a-4e79-93ee-d40083aae9ef';
    // this.cookieService.set('IDSESSIONMDC', 'c5ad74fa-6b96-413c-ad22-e97e3df39d18');
    // this.cookieService.set('IDSESSIONMDC', '93fa785c-f866-4846-9c38-56defdc5588a');
  }

  getCookie() {
    this.sesionCookie = this.cookieService.get('IDSESSIONMDC');
  }

 /* validateSession() {
    if (this.sesionCookie) {
    this.broker.validationSession( this.sesionCookie ).subscribe( (resp: any) => {
        this.user = resp;
      },
        (error) => {
          this.cookieService.delete('IDSESSIONMDC', cookie, environment.domain);
          this.router.navigate(['/']);
          this.sesion.sesionCookie = null;
        }
      );
    }
  }*/
}

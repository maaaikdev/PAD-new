import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';
import { SesionService } from './sesion.service';
import { CookieService } from 'ngx-cookie-service';
import { BrokerService } from './broker.service';
import { environment } from 'src/environments/environment';

@Injectable()
export class CanActiveViaAuthGuard implements CanActivate {
  loggin: any;
  cookie: any;
  userData: any;
  infoComplete: any;
  constructor(
    public sesion: SesionService,
    public router: Router,
    private broker: BrokerService,
    private cookieservice: CookieService) {
    this.infoComplete = this.sesion.infoComplete;
    if (this.cookieservice.get('IDSESSIONMDC')) {
      this.validateSession();
    }
  }

  canActivate(route: ActivatedRouteSnapshot) {
    const page = route.url.toString();
    if (!this.sesion.sesionCookie
      && (page === 'error'
        || page === 'deudas'
        || page === 'propuesta')) {
      this.router.navigate(['/']);
      return false;
    }

    // if (page === '' && this.sesion.sesionCookie) {
    //   if (this.infoComplete) {
    //     this.router.navigate(['/deudas']);
    //     return false;
    //   }
    // }
    return true;
  }

  validateSession() {
    const cookie = this.cookieservice.get('IDSESSIONMDC');
    const data = {
      clientId: environment.clientId,
      idSession: this.cookieservice.get('IDSESSIONMDC'),
      country: environment.country
    };

    this.broker.validar_sesion(data).subscribe((response: any) => {
      this.sesion.sesionCookie = this.cookieservice.get('IDSESSIONMDC');
    },
      error => {
        // this.broker.cerrar_sesion(data).subscribe((response: any) => {
        // }, error => {
        // });
        setTimeout(() => {
          this.cookieservice.delete('IDSESSIONMDC');
          this.cookieservice.delete('IDSESSIONMDC', cookie, environment.domain);
          this.router.navigate(['/']);
          this.sesion.sesionCookie = null;
        }, 200);
      }
    );
  }
}

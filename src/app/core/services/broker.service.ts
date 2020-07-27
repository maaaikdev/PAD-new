import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';

const headers: any = new HttpHeaders({
  'Content-Type': 'application/json'
  //  Cookie : 'IDSESSIONMDC=0b5bce83-f530-4bcd-94bd-61b76192eb6d;domain=10.98.4.161:8080'
});

@Injectable({
  providedIn: 'root'
})
export class BrokerService {

  dataLinea: any;
  nameCompanyAccept: any;
  account:any

  constructor(public http: HttpClient, private cookieService: CookieService) { }

  contenido_interface() {
    return this.http.get('assets/data/content.json');
  }

  validar_sesion(body){
    return this.http.post(environment.APIEndpoint_authn + '/authn/validateSession ', body, { headers });
  }
  
  cerrar_sesion(body){
    // const sessionId = this.cookieService.get('IDSESSIONMDC');
    return this.http.post(environment.APIEndpoint_authn + '/authn/signOff', body, { headers });
  }

  consultarDeudas() {
    const body = JSON.stringify({
      sessionID: this.cookieService.get('IDSESSIONMDC')
    });
    return this.http.post(environment.APIEndpoint_debts + environment.consultaDeudas , body,  { headers });
  }

  companyParams(body){
    const sessionId = this.cookieService.get('IDSESSIONMDC');
    return this.http.post(environment.APIEndpoint_company + '/companymanager/entityParameters', body, {headers});
  }

  negociarDeudas(body){
    return this.http.post(environment.APIEndpoint_ngttion + environment.negociarDeudas, body, {headers});
  }

  descargarPDF(body){
    return this.http.post(environment.APIEndpoint_company + environment.descargarPDF, body, {headers});
  }

  guardarPropuesta(body){
    return this.http.post(environment.APIEndpoint_debts + environment.guardarPropuesta, body, {headers});
  }

  pagarLinea(body){
    return this.http.post(environment.APIEndpoint_debts + environment.pagarLinea, body, {headers});
  }
}
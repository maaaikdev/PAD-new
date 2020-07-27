import { Component, OnInit, HostListener } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { CookieService } from 'ngx-cookie-service';
import { BrokerService } from 'src/app/core/services/broker.service';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { User } from 'src/app/core/models/user.model';
import { DebtsService } from 'src/app/core/services/debts.service';

declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  
  isOpen = false;
  errorUrl = false;
  url: any;
  scroll = false;
  initial = false;
  nameSesion: any;
  txt: any;
  loginUrl: string;
  regUrl: any;
  user: User = null;
  
  constructor(
    public sesion: SesionService,
    private cookieService: CookieService,
    private broker: BrokerService,
    public debtsService: DebtsService,
    public router: Router) {
      this.loginUrl = environment.urlLogin;
      this.regUrl = environment.urlRegister;
      //this.nameSesion = this.simular.getStorage();
      //console.log("Número --->", debtsService);

      this.router.events.subscribe((val) => {
        if (val instanceof NavigationEnd) {
          this.url = val.url;
          console.log("Url Val Final", this.url)
          
          if (val.url === '/error' || '/propuesta'){
            this.errorUrl = true;
          }
          if (val.url !== '/'){
            this.initial = true;
          } else {
            this.initial = false;
          }
        }
      });

      this.sesion.getCookie();
      this.validateSession();

     }
  @HostListener('window:scroll', ['$event'])
  onScroll(event) {
    if (this.url === '/' || '/deudas'){
      // if(!this.sesion.sesionCookie) {
      //   $('#modal-info').modal('hide');
      // }
      if (window.pageYOffset !== 0) {
        this.scroll = true;
      } else {
        this.scroll = false;
      }
    }
  }

  ngOnInit() {    
    // if (this.sesion.sesionCookie){
    //   //this.validateSession();
    //   this.router.navigate(['/deudas']);
    // }
    
  }
  toggleClass() {
    this.isOpen = !this.isOpen;
  }

  validateSession() {
    const cookie = this.cookieService.get('IDSESSIONMDC');
    const data = {
      clientId: environment.clientId,
      idSession: this.cookieService.get('IDSESSIONMDC'),
      country: environment.country
    };
    this.broker.validar_sesion(data).subscribe((response: any) => {
      this.user = response;
      this.sesion.user = response;
      //console.log(this.user);
    },
      (error) => {
        // this.cookieService.delete('IDSESSIONMDC', cookie, environment.domain);
        // this.router.navigate(['/']);
        // this.sesion.sesionCookie = null;
      }
    );
  }

  cerrarSesion() {
    // this.cookieService.set('IDSESSIONMDC', this.sesion.sesionCookie, 0);
    const body = {
      clientId: environment.clientId,
      idSession: this.sesion.sesionCookie,
      country: environment.country
    };
    this.cookieService.delete('IDSESSIONMDC', this.sesion.sesionCookie, environment.domain);
    this.broker.cerrar_sesion(body).subscribe((response: any) => {
      // console.log('response', response);
      window.localStorage.clear();
    }, error =>{
      // console.log('error cerrar sesion', error);
    });
    setTimeout(() => {
      this.cookieService.delete('IDSESSIONMDC', this.sesion.sesionCookie, environment.domain);
      this.sesion.sesionCookie = null;
      this.router.navigate(['/']);
      // this.router.navigate(['/'], { queryParams: { page: 'out' } });
    }, 500);
  }

}

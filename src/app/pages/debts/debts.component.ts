import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { DebtsService } from 'src/app/core/services/debts.service';
import { CustomerDebts } from 'src/app/core/models/customerDebts.model';
import { Router, NavigationEnd } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { LoadingService } from 'src/app/core/services/loading.service';
import { BrokerService } from 'src/app/core/services/broker.service';
import { DealService } from 'src/app/core/services/deal.service';
import { OfferSelectedService } from 'src/app/core/services/offer-selected.service';

declare var $: any;

@Component({
  selector: 'app-debts',
  templateUrl: './debts.component.html',
  styleUrls: ['./debts.component.scss']
})
export class DebtsComponent implements OnInit {

  url: string;
  errorUrl = false;
  initial = false;
  account:any;

  // DEBTS
  noDebtsFreemium = false;
  debtsToday = true;
  alertNoDebts = false;
  alertDebts = true;  
  obligacionesNegociables = true;
  reportesNegociables = false;
  otrosReportes = false;
  goFreemium = false;  

  constructor(
    public debtModal: DealService,
    public broker: BrokerService,
    public debtsService: DebtsService,
    public router: Router,
    public sesion: SesionService,
    public select: OfferSelectedService,
    public loading: LoadingService) {    
    

    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
        if (val.url === '/error') {
          this.errorUrl = true;
        }
        if (val.url !== '/') {
          this.initial = true;
        } else {
          this.initial = false;
        }
      }      
    });    
    this.consultarDeudas();    
  }

  ngOnInit() {
    this.select.state = null;
    this.debtsService.debtSelect = null;    
  }

  openDeal(item) {
    this.debtModal.open(item);
    this.debtModal.companyParams(item);
    this.debtsService.debtSelect = item;
  }  

  consultarDeudas() {
    this.loading.open('Por favor espera un momento ...', 'Estamos validando tu propuesta', 'assets/images/animations/loading_clock.json', 'animation', true);
    this.broker.consultarDeudas().subscribe((response: CustomerDebts) => {      
      this.debtsService.customerDebts = response;
      if (this.debtsService.customerDebts.error) {
        this.router.navigate(['/error']);
      } else {
        this.debtsService.filteredItems = Object.assign([], this.debtsService.customerDebts.responseObject.debts);     
        this.debtsService.debt = response.responseObject.debts;
        this.debtsService.debtLength = response.responseObject.countDebtsArrears;
        if (this.debtsService.customerDebts.responseObject != null) {
          this.debtsService.crearFiltros();
        }
      }
      setTimeout(() => {
        $('#loading').modal('hide');
      }, 200);

    },
      (error) => {
        $('#loading').modal('hide');
        this.router.navigate(['/error']);
        this.sesion.sesionCookie = null;
      });
  }

  verEstado(deuda, nitCompany, numberAccount) {
    const data = {
      de: deuda,
      project: environment.product,
      onlyQuery: true,
      withPass: false,
      byEmail: false,
      country: environment.country,
      idSession: this.sesion.sesionCookie
    };

    this.broker.descargarPDF(data).subscribe((estado: any) => {
      this.select.state = estado;
      this.select.de = data.de;
      this.select.nitCompany = nitCompany;
      this.broker.dataLinea = this.select.nitCompany;
      this.broker.nameCompanyAccept = this.select.state.agreement.nameBank;
      this.broker.account = numberAccount;
      console.log("Broker Account: ", this.broker)
      this.router.navigate(['/imprimir']);
    }, error => {

    });
  }
  obligaciones(){
    this.obligacionesNegociables = true;
    this.reportesNegociables = false;
    this.otrosReportes = false;
  }
  reportes(){
    this.obligacionesNegociables = false;
    this.reportesNegociables = true;
    this.otrosReportes = false;
  }
  oReportes(){
    this.obligacionesNegociables = false;
    this.reportesNegociables = false;
    this.otrosReportes = true;
  }

}
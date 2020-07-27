import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { BrokerService } from './broker.service';
import { SesionService } from './sesion.service';
import { NgbCalendar, NgbDatepickerConfig, NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { OfferSelectedService } from './offer-selected.service';
declare var $: any;
@Injectable({
  providedIn: 'root'
})
export class DealService {
  debtItem: any;
  debBalance: any;
  debCompany: any;
  selectDays: any;
  selectMonth: any;
  agreements: any = null;
  idProduct: any;
  public loading: boolean = false;
  // res = { 'daysAvailablePayment': ['2019/9/27', '2019/9/28', '2019/9/29', '2019/9/30', '2019/10/1', '2019/10/2', '2019/10/3', '2019/10/4', '2019/10/5', '2019/10/6', '2019/10/7', '2019/10/8', '2019/10/9', '2019/10/10', '2019/10/11', '2019/10/12', '2019/10/13', '2019/10/14', '2019/10/15', '2019/10/16', '2019/10/17', '2019/10/18', '2019/10/19', '2019/10/20', '2019/10/21', '2019/10/22', '2019/10/23', '2019/10/24', '2019/10/25', '2019/10/26', '2019/10/27'], 'paymentsQuantity': ['1', '2', '3', '4'] }
  constructor(
    public broker: BrokerService,
    public sesion: SesionService,
    public router: Router,
    public calendar: NgbCalendar,
    public select: OfferSelectedService,
    public config: NgbDatepickerConfig) {
   }
  close() {
    this.debtItem = '';
    this.debBalance = '';
    this.debCompany = '';
    $('#modal-deal').modal('toggle');
  }

  open(item) {
    this.debtItem = item;
    this.debBalance = item.balance;
    this.debCompany = item.nameCompany;
    $('#modal-deal').modal('show');
    //console.log(this.debtItem);
    //console.log(this.debBalance);
    // console.log("debItem: ", this.debtItem  )
  }
  
  companyParams(item) {
    // console.log('get params item');
    // Davivienda: {
    //   "nitBanco":"123456789",
    //   "idProducto":2,
    //   "proyecto":"Ponte Al Dia",
    //   "country":"CO",
    //   "idSession":"8826908c-e6ff-438a-9fa4-74c5303c8d68"
    // } 
    const data = {
      idProduct: item.idProduct,
      nit: item.nitCompany,
      project: 'Ponte Al Dia',
      country: environment.country,
      idSession: this.sesion.sesionCookie
    };
    this.broker.companyParams(data).subscribe((res: any) => {
      //console.log('res company get', res);
      this.select.offerBank = res;
      this.selectDays = res.daysAvailablePayment;
      this.selectMonth = res.paymentsQuantity;
      this.configDate(this.selectDays);
    }, error => {
      this.close();
      //console.log('error company get params', error);
    });
  }
  configDate(days) {
    this.config.minDate = this.calendar.getToday();
    const num = days.length;
    let maxDay = days[num - 1];
    maxDay = maxDay.split('/');
    //console.log('max', maxDay);
    this.config.maxDate = { day: parseInt(maxDay[2]), month: parseInt(maxDay[1]), year: parseInt(maxDay[0])};
    // days that don't belong to current month are not visible
    this.config.outsideDays = 'hidden';
    // weekends are disabled
    this.config.markDisabled = (date: NgbDate) => this.calendar.getWeekday(date) >= 6;
  }
  dealService(data) {
    this.loading = true;
    this.broker.negociarDeudas(data).subscribe((res: any) => {
      //console.log('res negociar deudas', res);
      this.loading = false;
      this.agreements = res;
      console.log("Data gremment", this.agreements)
      $('#modal-deal').modal('toggle');
      this.router.navigate(['/propuesta']);
    }, error => {
      this.loading = false;
    });
  }
}

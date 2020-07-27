import { Component, OnInit, Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DealService } from 'src/app/core/services/deal.service';
import { Router } from '@angular/router';
import { BrokerService } from 'src/app/core/services/broker.service';
import { environment } from 'src/environments/environment';
import { NgbDate } from '@ng-bootstrap/ng-bootstrap';
import { SesionService } from 'src/app/core/services/sesion.service';
import {NgbCalendar, NgbDateAdapter, NgbDateParserFormatter, NgbDateStruct} from '@ng-bootstrap/ng-bootstrap';
import { OfferSelectedService } from 'src/app/core/services/offer-selected.service';


@Component({
  selector: 'app-deal',
  templateUrl: './deal.component.html',
  styleUrls: ['./deal.component.scss'],  
})
export class DealComponent implements OnInit{
  debtPrice: any;
  monthly: any;
  payment: any;
  date: NgbDateStruct;
  placement = 'top';

  constructor(
    public dealModal: DealService,
    public select: OfferSelectedService,
    public router: Router, 
    public broker: BrokerService, 
    public sesion: SesionService,
    public ngbCalendar: NgbCalendar, 
    public dateAdapter: NgbDateAdapter<string>) {   
      
  }

  ngOnInit() {
    // this.dealModal.companyParams()
  }
  propuesta(data: NgForm) {
    // this.router.navigate(['/propuesta']);
    // this.dealModal.close();
    // const dat: NgbDate = new NgbDate.from(this.date);
    //console.log('data form', data.form.value);
    //console.log('fecha', this.dealModal.debtItem);
    this.dateAdapter.toModel(this.ngbCalendar.getToday())!;
    const dat = JSON.stringify(this.date.year) + '-' +  JSON.stringify(this.date.month) + '-' + JSON.stringify(this.date.day);
    const datee = new Date(dat);
    // console.log(datee);
    //console.log('fecha', dat);
    const body = {
      nit: this.dealModal.debtItem.nitCompany,
      idSession: this.sesion.sesionCookie,
      idUserProduct: String(this.dealModal.debtItem.numberAccount),
      productType: this.dealModal.debtItem.idProduct,
      paymentCapacity: String(data.form.value.pago),
      numberPayments: String(data.form.value.cuota),
      paymentDate: datee,
      nonPredefinedVariables: [
        {
          prefix: 'VD',
          value: String(this.dealModal.debBalance)
        }
      ]      
    };
    this.dealModal.dealService(body);
  }
}

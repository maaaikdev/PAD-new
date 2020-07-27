import { Component, OnInit, Input } from '@angular/core';
import { SignService } from 'src/app/core/services/sign.service';
import { DebtsService } from 'src/app/core/services/debts.service';
import { DealService } from 'src/app/core/services/deal.service';
import { ProgramService } from 'src/app/core/services/program.service';
import { BrokerService } from 'src/app/core/services/broker.service';
import { OfferSelectedService } from 'src/app/core/services/offer-selected.service';
import { Router } from '@angular/router';
import { SesionService } from 'src/app/core/services/sesion.service';
import { CustomerDebts } from 'src/app/core/models/customerDebts.model';

@Component({
  selector: 'app-accept',
  templateUrl: './accept.component.html',
  styleUrls: ['./accept.component.scss']
})
export class AcceptComponent implements OnInit {
  debtSelect: any;
  constructor(
    public router: Router, 
    public select: OfferSelectedService, 
    public agree: DealService, 
    public program: ProgramService,
    public sesion: SesionService, 
    public debtService: DebtsService, 
    public broker: BrokerService, 
    public sign: SignService) 
  {

  }

  ngOnInit() {
  }

  closeUnder() {
    this.sign.closeUnderstood();
  } 

}
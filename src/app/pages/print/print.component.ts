import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { OfferSelectedService } from 'src/app/core/services/offer-selected.service';
import { DealService } from 'src/app/core/services/deal.service';
import { ProgramService } from 'src/app/core/services/program.service';
import { SesionService } from 'src/app/core/services/sesion.service';
import { DebtsService } from 'src/app/core/services/debts.service';
import { BrokerService } from 'src/app/core/services/broker.service';
import { SignService } from 'src/app/core/services/sign.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-print',
  templateUrl: './print.component.html',
  styleUrls: ['./print.component.scss']
})
export class PrintComponent implements OnInit {
  selectData: any;
  loadingDownloadFile : boolean = false;
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
    this.sign.openUnderstood();
  }

  backAdmin() {
    this.router.navigate(['/deudas']);
  }

  descargarPDF(deuda) {
    this.loadingDownloadFile = true;    
    const data = {
      de: deuda,                                                                                                                           
      country: environment.country,
      project: environment.product,
      idSession: this.sesion.sesionCookie
    };

    this.broker.descargarPDF(data).subscribe((pdf: any) => {
      this.loadingDownloadFile = false;
      const linkSource = 'data:application/pdf;base64,' + pdf.pdfPayAgree;
      const downloadLink = document.createElement('a');
      const fileName = 'acuerdo_de_pago.pdf';
      downloadLink.href = linkSource;
      downloadLink.download = fileName;
      downloadLink.click();
    }, error => {
      this.loadingDownloadFile = false;
    });
  
  }
  pagarLinea(){    
    const data2 = {
      sessionId: this.sesion.sesionCookie,
      nit: this.broker.dataLinea
    };
    this.broker.pagarLinea(data2).subscribe((respuesta: any) => {     
    }, error => {

    });
  }
}
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DealComponent } from './deal.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { CurrencyMaskModule } from 'ng2-currency-mask';
import { CurrencyMaskConfig, CURRENCY_MASK_CONFIG } from 'ng2-currency-mask/src/currency-mask.config';

export const CustomCurrencyMaskConfig: CurrencyMaskConfig = {
  align: "right",
  allowNegative: false,
  decimal: ".",
  precision: 0,
  prefix: "$ ",
  suffix: "",
  thousands: "."
};
export abstract class NgbDateParserFormatter {
  abstract parse(value: string): NgbDateStruct; // from input -> internal model
  abstract format(date: NgbDateStruct): string; // from internal model -> string
}

@NgModule({
  declarations: [
    DealComponent
  ],
  exports: [
    DealComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    CurrencyMaskModule   
  ],
  providers:[
    { provide: CURRENCY_MASK_CONFIG, useValue: CustomCurrencyMaskConfig }
  ]
})
export class DealModule { }

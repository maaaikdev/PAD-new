import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DebtsComponent } from './debts.component';
import { DfiltersModule } from './dfilters/dfilters.module';
import { DebsRoutingModule } from './deb-routing.module';
import { DealModule } from '../deal/deal.module';

@NgModule({
  declarations: [
    DebtsComponent
  ],
  imports: [
    CommonModule,
    DebsRoutingModule,
    DfiltersModule,
    DealModule
  ] 

})
export class DebtsModule { }

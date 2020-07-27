import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AgreeComponent } from './agree.component';
import { DealModule } from '../deal/deal.module';
import { ProgramModule } from './program/program.module';
import { AgreeRoutingModule } from './agree-routing.module';

@NgModule({
  declarations: [AgreeComponent],
  imports: [
    CommonModule,
    AgreeRoutingModule,
    DealModule,
    ProgramModule
  ],
  exports:[
    AgreeComponent
  ]
})
export class AgreeModule { }

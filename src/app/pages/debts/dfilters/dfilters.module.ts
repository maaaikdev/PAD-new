import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DfiltersComponent } from './dfilters.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [DfiltersComponent],
  exports: [DfiltersComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DfiltersModule { }

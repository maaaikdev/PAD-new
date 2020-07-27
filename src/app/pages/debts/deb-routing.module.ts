import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DebtsComponent } from './debts.component';

const routes: Routes = [
  {
    path: '',
    component: DebtsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DebsRoutingModule { }

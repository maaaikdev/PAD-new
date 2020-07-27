import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CanActiveViaAuthGuard } from './core/services/auth-guard.service';
import { ErrorComponent } from './shared/error/error.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { PrintComponent } from './pages/print/print.component';
import { FaqComponent } from './pages/faq/faq.component';

const routes: Routes = [
  { path: '', component: HomeComponent , pathMatch: 'full' , canActivate: [CanActiveViaAuthGuard]},
  { path: 'deudas', loadChildren: './pages/debts/debts.module#DebtsModule', pathMatch: 'full'},
  { path: 'propuesta', loadChildren: './pages/agree/agree.module#AgreeModule', pathMatch: 'full'},
  { path: 'confirmar', component: ConfirmComponent, pathMatch: 'full'},
  { path: 'imprimir', component: PrintComponent, pathMatch: 'full'},
  { path: 'faq', component: FaqComponent, pathMatch: 'full'},
  { path: 'error', component: ErrorComponent, pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
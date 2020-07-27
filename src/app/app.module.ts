import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import localeEs from '@angular/common/locales/es';


import { CanActiveViaAuthGuard } from './core/services/auth-guard.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CookieService } from 'ngx-cookie-service';
import { HttpClientModule } from '@angular/common/http';
import { LoadingComponent } from './shared/loading/loading.component';
import { ErrorComponent } from './shared/error/error.component';
import { ModalComponent } from './shared/modal/modal.component';
import { ConfirmComponent } from './pages/confirm/confirm.component';
import { ProgramModule } from './pages/agree/program/program.module';
import { SignComponent } from './pages/confirm/sign/sign.component';
import { PrintComponent } from './pages/print/print.component';
import { FaqComponent } from './pages/faq/faq.component';
import { AcceptComponent } from './pages/print/accept/accept.component';
import { registerLocaleData } from '@angular/common';


registerLocaleData(localeEs, 'es');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    LoadingComponent,
    ErrorComponent,
    ModalComponent,
    ConfirmComponent,
    SignComponent,
    PrintComponent,
    FaqComponent,
    AcceptComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    ProgramModule
  ],
  exports: [
    LoadingComponent
  ],
  providers: [
    CanActiveViaAuthGuard,
    CookieService,
    { provide: LOCALE_ID, useValue: 'es' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

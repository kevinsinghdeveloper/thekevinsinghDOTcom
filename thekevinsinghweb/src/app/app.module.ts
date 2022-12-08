import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastComponent } from './toast/toast.component';
import {SpinnerComponent} from './spinner/spinner.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LoaderInterceptor} from './interceptors/spinner.interceptor';
import {LoadingSpinnerService} from './global_services/loading-spinner.service';
import {NgbToastModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    SpinnerComponent

  ],
  imports: [
    NgbToastModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule


  ],
  providers: [
    LoadingSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true }

  ],
  exports: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

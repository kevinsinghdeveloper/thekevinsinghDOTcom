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
import {SharedModule} from './shared/shared.module';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import {AngularFirestoreModule} from "@angular/fire/compat/firestore";
import {CommonModule} from "@angular/common";
import {ToastService} from "./global_services/toast.service";

@NgModule({
  declarations: [
    AppComponent,
    ToastComponent,
    SpinnerComponent

  ],
  imports: [
    CommonModule,
    NgbToastModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule
  ],
  providers: [
    LoadingSpinnerService,
    { provide: HTTP_INTERCEPTORS, useClass: LoaderInterceptor, multi: true },
    ToastService

  ],
  exports: [
    ToastComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

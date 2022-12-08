import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule } from '@angular/router';
import { ManageNavComponent } from './manage-left-nav/manage-left-nav.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent
    ,ManageNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent
    ,ManageNavComponent
  ]
})
export class SharedModule { }

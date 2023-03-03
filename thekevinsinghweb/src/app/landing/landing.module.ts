import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LandingRoutingModule } from './landing-routing.module';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {LandingComponent} from './landing.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './aboutme/aboutme.component';
import {HireMeComponent} from './hireme/hireme.component';
import {AdminComponent} from "./admin/admin.component";

@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent,
    ProjectsComponent,
    AboutMeComponent,
    HireMeComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    SharedModule,
    FormsModule, ReactiveFormsModule
  ]
})
export class LandingModule { }

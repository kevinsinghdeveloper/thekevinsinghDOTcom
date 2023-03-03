import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { $localize } from '@angular/localize/init'; // import $localize

interface Ticket {
  name: string,
  email: string,
  message: string,

  currentDate: string
}

@Component({
  selector: 'admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  tickets: Ticket [] = []
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private fetch: LandingService,
      private auth: AuthGService,
      private toastService: ToastService,
      private http: HttpClient,
      private landingService: LandingService
  ) {}

  ngOnInit(): void {
    this.landingService.getContactMessages().subscribe(res => {
        let data: any = res;
        for (let key in data) {
          let value = data[key];
          let ticketVal: Ticket = value;
          this.tickets.push(ticketVal);
      }
    });

  }
}

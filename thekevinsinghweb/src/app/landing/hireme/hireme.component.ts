import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";



interface Ticket {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class HireMeComponent implements OnInit {

  contactForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private fetch: LandingService,
      private auth: AuthGService,
      private toastService: ToastService,
      private http: HttpClient
  ) { }

  ngOnInit(): void {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }



}

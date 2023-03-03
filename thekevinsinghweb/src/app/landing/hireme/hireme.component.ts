import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { $localize } from '@angular/localize/init'; // import $localize


@Component({
  selector: 'hireme',
  templateUrl: './hireme.component.html',
  styleUrls: ['./hireme.component.scss']
})
export class HireMeComponent implements OnInit {
  ticketForm: FormGroup;
  ticket: {};
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
    this.ticketForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
    /*
    this.landingService.getContactMessages().subscribe(res => {
      let data: any = res;
    } );
     */
  }
  onSubmit(form: NgForm) {

    if (form.valid) {
      const name = form.value.name;
      const email = form.value.email;
      const message = form.value.message;
      const currentDate = new Date().toISOString(); // Get the current date and time in ISO string format

      // Add the currentDate to the form value
      const formValue = {...form.value, currentDate};

      this.landingService.saveContactMessage(formValue).subscribe(res => {
          this.toastService.show($localize`Thank you for your message!`, {
            classname: 'bg-success text-light',
            delay: 4000 ,
            autohide: true,
            headertext: ''
          });
          form.reset();
        }
      )
    }
    else {
      this.toastService.show($localize`Invalid entry!`, {
        classname: 'bg-danger text-light',
        delay: 4000 ,
        autohide: true,
        headertext: ''
      });

    }
  }
}

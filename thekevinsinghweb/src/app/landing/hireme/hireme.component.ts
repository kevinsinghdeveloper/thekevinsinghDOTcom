import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, NgForm, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { $localize } from '@angular/localize/init'; // import $localize
import emailjs from '@emailjs/browser';


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
      const templateParams = {
        from_name: form.value.name,
        from_email: form.value.email,
        message: form.value.message
      };

      emailjs.send(
        'service_gkrvp3p',      // Service ID
        'template_1mcbyqw',     // Template ID
        templateParams,
        'Qek9RYRwkvcZ5aFFt'     // Public Key
      ).then(
        (response) => {
          this.toastService.show($localize`Thank you for your message!`, {
            classname: 'bg-success text-light',
            delay: 4000 ,
            autohide: true,
            headertext: ''
          });
          form.reset();
        },
        (error) => {
          this.toastService.show($localize`Failed to send message. Please try again.`, {
            classname: 'bg-danger text-light',
            delay: 4000 ,
            autohide: true,
            headertext: ''
          });
          console.error('EmailJS error:', error);
        }
      );
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

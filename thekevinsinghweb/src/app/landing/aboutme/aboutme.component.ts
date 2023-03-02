import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {JsonManagerService} from "../../global_services/json-manager.service";


interface Contact {
  name: string,
  email: string,
  linkedin: string

}

interface Experience {
  title: string,
  company: string,
  duration: string,
  description: string

}

interface Education {
  degree: string,
  school: string,
  duration: string
}

interface Skills {
  language: string,
  proficiency: string
}

interface Resume {
  Contact: Contact,
  Experience: Experience []
  Education: Education []
  Skills: Skills []
};
@Component({
  selector: 'aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.scss']
})
export class AboutMeComponent implements OnInit {

  resume: Resume = null
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private fetch: LandingService,
      private auth: AuthGService,
      private toastService: ToastService,
      private jsonManagerService: JsonManagerService
  ) { }

  ngOnInit(): void {
    this.jsonManagerService.getJSON("assets/json/resume.json").subscribe(data => {
      this.resume = data;
    });
  }

}

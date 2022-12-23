import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';
import { LandingService } from '../landing.service';
import {ToastService} from '../../global_services/toast.service';
import {JsonManagerService} from '../../global_services/json-manager.service';

interface Project {
  name: String,
  description: String,
  logoImageUrl: String,
  employmentType: string,
  projectType: string,
  projectId: string

};

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent implements OnInit {

  projects: Project [] = [];

  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private fetch: LandingService,
      private auth: AuthGService,
      private toastService: ToastService,
      private jsonManagerService: JsonManagerService
  ) { }

  ngOnInit(): void {
    this.jsonManagerService.getJSON("assets/json/projects.json").subscribe(data => {
      this.projects = data;
    });
  }
}

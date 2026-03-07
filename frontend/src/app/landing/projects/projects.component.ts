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
  information: string,
  projectId: string
}

interface Repository {
  name: string,
  description: string,
  githubUrl: string,
  techStack: string[],
  highlights: string[]
}

interface GitHubProject {
  projectName: string,
  description: string,
  category: string,
  githubUrl: string,
  technologies: string[],
  repositories: Repository[],
  projectType: string,
  status: string,
  year: string
}

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})

export class ProjectsComponent implements OnInit {

  projects: Project[] = [];
  githubProjects: GitHubProject[] = [];

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

    this.jsonManagerService.getJSON("assets/json/github-projects.json").subscribe(data => {
      this.githubProjects = data;
    });
  }
}

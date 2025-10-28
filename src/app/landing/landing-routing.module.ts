import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import {LandingComponent} from './landing.component';
import {ProjectsComponent} from './projects/projects.component';
import {AboutMeComponent} from './aboutme/aboutme.component';
import {HireMeComponent} from './hireme/hireme.component';
import {AdminComponent} from "./admin/admin.component";
import {TopicsComponent} from './topics/topics.component';
import {TopicDetailComponent} from './topic-detail/topic-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'projects',
        component: ProjectsComponent
      },
      {
        path: 'topics',
        component: TopicsComponent
      },
      {
        path: 'topic/:id',
        component: TopicDetailComponent
      },
      {
        path: 'aboutme',
        component: AboutMeComponent
      },
      {
        path: 'hireme',
        component: HireMeComponent
      },
      {
        path: 'admin',
        component: AdminComponent
      }


    ]

  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LandingRoutingModule { }

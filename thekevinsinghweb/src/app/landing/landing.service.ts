import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { auth_environment, environment } from 'src/environments/environment';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  isRole: String = "";
  headers = new HttpHeaders({
    'Content-Type': "application/json",
  });

  constructor(
      private http: HttpClient,
  ) {

  }
}

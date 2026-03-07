import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

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
  ) {}
  saveContactMessage(data: any) {
    return this.http.post(`${environment.host}api/contact`,
      data);
  }
  getContactMessages(){
    return this.http.get(`${environment.host}api/contact`);
  }
}

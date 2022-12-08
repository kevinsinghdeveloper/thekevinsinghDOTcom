import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { Router } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {auth_environment} from "../../environments/environment";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthGService {

  constructor(private route: Router, @Inject(PLATFORM_ID) private platformId: Object,private http: HttpClient) { }

  sendToken(token: string, usrFNm: string) {
    if (isPlatformBrowser(this.platformId)) {
      let logTime = new Date();
      logTime.setTime(logTime.getTime() + (30 * 60 * 24 * 1000));
      localStorage.setItem("clientCUsr", token);
      localStorage.setItem("clientCFNm", usrFNm);
      localStorage.setItem("clientCUsrTime", logTime.getTime().toString());
    }
  }

    getLogged() {
      if (isPlatformBrowser(this.platformId)) {
        return localStorage.getItem("clientCUsr");
      } else { return null; }
    }

  isLoggedIn() {
    if(isPlatformBrowser(this.platformId)) {
      if(localStorage.getItem("clientCUsrTime")) {
        let now = new Date();
        let logTime: any = localStorage.getItem("clientCUsrTime");
        
        if(now.getTime() > +logTime)
           this.removeLog();
      } else
        this.removeLog();
    }
      return this.getLogged() !== null;
  }

  checkServerIsUpAPI(): Observable<any>{

    var token = localStorage.getItem('clientCUsr');

    if (token == null) {
      token = "";
    }
    var header = {
      headers: new HttpHeaders()
          .set('Content-Type', "application/json")
          .set('Authorization', `Bearer ${token}`)

    }

    return this.http.get(auth_environment.host + "api/serverutil/checkserverup", header);


  }


  getLogName() {
    if (isPlatformBrowser(this.platformId)) {
      return localStorage.getItem("clientCFNm");
    } else { return ""; }
  }
  getLogRole() {
    if (isPlatformBrowser(this.platformId)) {
     // return localStorage.getItem("clientCFNm");

      let jwt = localStorage.getItem('clientCUsr');
      let jwtData = jwt!.split('.')[1]
      let decodedJwtJsonData = window.atob(jwtData)
      let decodedJwtData = JSON.parse(decodedJwtJsonData)
      //let role = '';
      for (let key in decodedJwtData) {
        if (key.includes('role'))
        {
          return decodedJwtData[key];

        }

      }



      //return decodedJwtData['http://schemas.microsoft.com/ws/2008/06/identity/claims/role'];//.role;


    } else { return ""; }
  }

  
  removeLog() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem("clientCUsr");
      localStorage.removeItem("clientCFNm");
      localStorage.removeItem("clientCUsrTime");
    }
  }

  logout() {
    this.removeLog();
    this.route.navigate(["/"]);
  }
}

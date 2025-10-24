import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivate,
    CanActivateChild,
    Router,
    RouterStateSnapshot,
    UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthGService } from './auth-g.service';
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})

/*
export class AuthGGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthGService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.auth.isLoggedIn()) {
        return true;
      } else {
          console.log("NOT LOGGED!");
        //this.router.navigate(["/home"]);
          this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
        return false;
      }
  }



}

export class AuthGuardChildService implements CanActivateChild {

    constructor(private router: Router, private auth: AuthGService) { }


    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        if(this.auth.isLoggedIn()) {
            return true;
        } else {
            console.log("NOT LOGGED!");
            //this.router.navigate(["/home"]);
            this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }

}
*/

@Injectable()
export class AuthGGuard implements CanActivate, CanActivateChild{

    constructor(private router: Router, private auth: AuthGService){

    }


    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        var role = this.auth.getLogRole();

        if(this.auth.isLoggedIn()) {
            //console.log("Logged on");
            if(route.data.role && route.data.role.indexOf(role) === -1)
            {
                return false;
            }

            return true;
        } else {
            //console.log("NOT LOGGED!");
            //this.router.navigate(["/home"]);
            this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot):
        Promise<boolean> | Observable<boolean> | boolean {

        if(this.auth.isLoggedIn()) {
            //console.log("Logged on2");
            var role = this.auth.getLogRole();
            if(childRoute.data.role && childRoute.data.role.indexOf(role) === -1)
            {
                return false;
            }
            return true;
        } else {
            //console.log("NOT LOGGED2!");
            //this.router.navigate(["/home"]);
            this.router.navigate(['/home'], { queryParams: { returnUrl: state.url }});
            return false;
        }
    }

    checkIfLogged (){



    }

}

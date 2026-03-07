import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { finalize } from "rxjs/operators";
import { LoadingSpinnerService } from '../global_services/loading-spinner.service'
@Injectable()
export class LoaderInterceptor implements HttpInterceptor {
    constructor(public spinnerService: LoadingSpinnerService) { }
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.spinnerService.activateSpinner();
        return next.handle(req).pipe(
            finalize(() => this.spinnerService.deactivateSpinner(1000))
        );
    }
}

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoadingSpinnerService {

  isLoading: boolean = false;

  activateSpinner(){
    this.isLoading=true;
  }
  deactivateSpinner(timeout: number){
    setTimeout(()=>{
      this.isLoading=false;
    }, timeout);
  }


}

import { Component, OnInit } from '@angular/core';
import {LoadingSpinnerService} from "../global_services/loading-spinner.service";

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  constructor(public loadingSpinnerService: LoadingSpinnerService) { }

  ngOnInit(): void {
  }

}

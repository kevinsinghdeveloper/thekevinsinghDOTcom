import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-left-nav',
  templateUrl: './manage-left-nav.component.html',
  styleUrls: ['./manage-left-nav.component.css']
})
export class ManageNavComponent implements OnInit {

  isSideClosed: string = "";

  constructor(
    private router: Router
  ) {



  }

  ngOnInit(): void {

     // this.isRole = this.auth.getLogRole();
  }
  triggerSideBar() {
    if (this.isSideClosed == "")
      this.isSideClosed = "toggled";
    else {
      this.isSideClosed = "";
    }
  }

}


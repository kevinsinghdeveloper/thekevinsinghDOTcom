import { Component, OnInit, Output, Input, EventEmitter, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthGService } from 'src/app/guard/auth-g.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() 
  username: string = "";


  constructor(
    private router: Router,
    private auth: AuthGService
  ) { }

  ngOnInit(): void {
  }


  isLog() {
    return this.auth.isLoggedIn();
  }

  logout() {
    this.auth.logout();
  }


}

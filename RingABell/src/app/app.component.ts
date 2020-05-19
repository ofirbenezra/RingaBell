import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RingABell';
  isLoggedIn$: Observable<boolean>;  

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn; 
  }

  goToHomePage() {
    this.router.navigate(['/']);
  }
}

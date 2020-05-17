import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'RingABell';
  isLoggedIn$: Observable<boolean>;  

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn; 
  }
}

import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css']
})
export class HeaderNavBarComponent implements OnInit {
  isUserLogin$: Observable<boolean>;
  constructor(
    public authGuardService: AuthGuardService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isUserLogin$ = this.authGuardService.checkLogin();;
  }
  logout() {
    this.authenticationService.loguot();
  }

}

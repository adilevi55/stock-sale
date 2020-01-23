import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthGuardService } from 'src/app/services/auth-guard.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/modals/user';

@Component({
  selector: 'app-header-nav-bar',
  templateUrl: './header-nav-bar.component.html',
  styleUrls: ['./header-nav-bar.component.css']
})
export class HeaderNavBarComponent implements OnInit, OnDestroy {

  isUserLogin$: Observable<boolean>;
  user$: Subscription;
  user: User;
  constructor(
    public authGuardService: AuthGuardService,
    private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.isUserLogin$ = this.authGuardService.checkLogin();
    this.user$ = this.authenticationService.getUser().subscribe(user => {
      this.user = user;
    });
  }
  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }
  logout() {
    this.authenticationService.loguot();
  }

}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/modals/user';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-dashboard-details',
  templateUrl: './user-dashboard-details.component.html',
  styleUrls: ['./user-dashboard-details.component.css']
})
export class UserDashboardDetailsComponent implements OnInit, OnDestroy {
  user: User = new User();
  userSub: Subscription;
  cheackUserUpdated = false;
  constructor(
    private authenticationService: AuthenticationService,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
  this.user = this.authenticationService.user;
  }
  userUpdateDetails() {
    console.log(this.user);
    this.userSub = this.userDetailsService.userUpdateDetails(this.user).subscribe(newUser => {
      this.user = newUser;
      this.cheackUserUpdated = true;
    });
  }
  ngOnDestroy() {
    if (this.cheackUserUpdated === true) {
      this.userSub.unsubscribe();
    }
  }

}

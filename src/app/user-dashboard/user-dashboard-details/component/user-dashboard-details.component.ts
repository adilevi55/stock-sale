import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/modals/user';
import { UserDetailsService } from 'src/app/services/user-details.service';
import { Subscription } from 'rxjs';
import { UserNoPasswordEmail } from 'src/app/modals/user-no-password-email';

@Component({
  selector: 'app-user-dashboard-details',
  templateUrl: './user-dashboard-details.component.html',
  styleUrls: ['./user-dashboard-details.component.css']
})
export class UserDashboardDetailsComponent implements OnInit, OnDestroy {
  user: User = new User();
  userSub: Subscription;
  cheackUserUpdated = false;
  userNoPasswordEmail: UserNoPasswordEmail = new UserNoPasswordEmail();
  constructor(
    private authenticationService: AuthenticationService,
    private userDetailsService: UserDetailsService
  ) { }

  ngOnInit() {
  this.user = this.authenticationService.user;
  }
  userUpdateDetails() {
    console.log(this.user);
    this.userNoPasswordEmail = {

    }
    this.userNoPasswordEmail._id = this.user._id;
    this.userNoPasswordEmail.firstName = this.user.firstName;
    this.userNoPasswordEmail.lastName = this.user.lastName;
    this.userNoPasswordEmail.phone = this.user.phone;
    this.userSub = this.userDetailsService.userUpdateDetails(this.userNoPasswordEmail).subscribe(newUser => {
      this.user = newUser;
      alert('Hi ' + this.user.userName + " your user details has changed");
      this.cheackUserUpdated = true;
    });
  }
  ngOnDestroy() {
    if (this.cheackUserUpdated === true) {
      this.userSub.unsubscribe();
    }
  }

}

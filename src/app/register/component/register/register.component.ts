import { Component } from '@angular/core';
import { User } from 'src/app/modals/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  public user = new User();
  public passwordConfirm: string;
  constructor(private authenticationService: AuthenticationService) { }
  userRegisterSubmitForm() {
    if (this.user.password === this.passwordConfirm) {
      this.authenticationService.register(this.user);
    } else {
      alert('Confirm Password Not Match');
    }
  }

}

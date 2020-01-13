import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/modals/user';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-loging',
  templateUrl: './loging.component.html',
  styleUrls: ['./loging.component.css']
})
export class LogingComponent implements OnInit {
  public user = new User();

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  userSubmitLoginForm() {
    this.authenticationService.login(this.user);
  }
}

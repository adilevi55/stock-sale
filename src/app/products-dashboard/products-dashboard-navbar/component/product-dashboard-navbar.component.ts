import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-product-dashboard-navbar',
  templateUrl: './product-dashboard-navbar.component.html',
  styleUrls: ['./product-dashboard-navbar.component.css']
})
export class ProductDashboardNavbarComponent implements OnInit {

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
  }
  loguot(){
    this.authenticationService.loguot();
}

}

import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/modals/product';
import { User } from 'src/app/modals/user';

@Component({
  selector: 'app-user-products',
  templateUrl: './user-products.component.html',
  styleUrls: ['./user-products.component.css']
})
export class UserProductsComponent implements OnInit {

 public products$: Observable<Product[]>;
 public user$: Subscription;
 public user: User;

  constructor(
    private authenticationService: AuthenticationService,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
      this.user = this.authenticationService.user;
      if (this.user) {
        this.products$ = this.productsService.getAllUserProduts(this.user._id);
      }
  }

}

import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/modals/product';
import { User } from 'src/app/modals/user';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { ProductsService } from 'src/app/services/products.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  public products$: Observable<Product[]>;
  public user: User;
  public displayedColumns: string[];
  public dataSource;
   constructor(
     private authenticationService: AuthenticationService,
     private productsService: ProductsService
   ) { }


   ngOnInit() {
    this.displayedColumns = ['name', 'location', 'quantities', 'category', 'img', 'delete'];
    this.user = this.authenticationService.user;
    if (this.user) {
        this.products$ = this.productsService.getAllUserProduts(this.user._id);
}

   }

   deleteProduct(productId) {
     this.productsService.deleteProduct(productId).subscribe(() => {
       alert('you deteted the prodct');
       this.products$ = this.productsService.getAllUserProduts(this.user._id);
     });
   }
  }
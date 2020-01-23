import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-products-all-products',
  templateUrl: './products-all-products.component.html',
  styleUrls: ['./products-all-products.component.css']
})
export class ProductsAllProductsComponent implements OnInit {
  products$: Observable<Product[]>;
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit() {
   this.products$ =  this.productsService.getAllProducts();
  }

}

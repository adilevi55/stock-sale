import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-product-dashboard-all-products',
  templateUrl: './product-dashboard-all-products.component.html',
  styleUrls: ['./product-dashboard-all-products.component.css']
})
export class ProductDashboardAllProductsComponent implements OnInit {
  public products$: Observable<Product[]>;
  constructor(private productService: ProductsService) { }

  ngOnInit() {
   this.products$ =  this.productService.getAllProducts();
  }
}

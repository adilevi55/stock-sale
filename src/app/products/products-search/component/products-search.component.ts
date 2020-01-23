import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription, Observable } from 'rxjs';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.css']
})
export class ProductsSearchComponent implements OnInit, OnDestroy {
  public route$: Subscription;
  public products$: Observable<Product[]>;
  constructor(
    private router: ActivatedRoute,
    private productService: ProductsService
    ) { }

  ngOnInit() {
    this.route$ = this.router.params.subscribe((params: Params) => {
      this.products$ = this.productService.getProductBySearch(params.fild, params.searchVal);
    });
  }
  ngOnDestroy() {
    this.route$.unsubscribe();
  }
}

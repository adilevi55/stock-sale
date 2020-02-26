import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Product } from 'src/app/modals/product';
import { ProductsService } from 'src/app/services/products.service';
import { ActivatedRoute, Params } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.css']
})
export class ProductsByCategoryComponent implements OnInit, OnDestroy {
  public products$: Observable<Product[]>;
  public route$: Subscription;
  constructor(
    private productsService: ProductsService,
    private router: ActivatedRoute,
    private categoryService: CategoryService) { }

  ngOnInit() {
    this.route$ = this.router.params.subscribe((params: Params) => {
      this.categoryService.getCategoryByName(params.categoryName)
        .subscribe(categoy => {
          this.products$ = this.productsService.getProductsByCategory(categoy._id);
        });
    });
  }
  ngOnDestroy() {
    this.route$.unsubscribe();
  }

}

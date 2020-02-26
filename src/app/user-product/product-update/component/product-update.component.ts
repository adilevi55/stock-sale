import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/modals/user';
import { CategoryService } from 'src/app/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/modals/category';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/modals/product';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css']
})
export class ProductUpdateComponent implements OnInit, OnDestroy  {

  public user: User;
  public displayedColumns: string[];
  public categories$: Observable<Category[]>;
  public getProductsOb$: Subscription;
  public productEdd$: Subscription;
  public product: Product = new Product();
  public products: Product[];
  public productsFormData: FormData[] = [];
  public productEdd$CheckSubscription = false;
  public imgURL = [];
  public dataSource: MatTableDataSource<Product>;

   constructor(
     private authenticationService: AuthenticationService,
     private productsService: ProductsService,
     private categoryService: CategoryService,
     private productService: ProductsService
   ) { }

   ngOnInit() {
    this.displayedColumns = ['name', 'location', 'quantities', 'category', 'price', 'details', 'img', 'update'];
    this.user = this.authenticationService.user;
    this.categories$ = this.categoryService.getAllCategories();

    if (this.user) {
      this.getProductsOb$ =  this.productsService.getAllUserProduts(this.user._id).subscribe(products => {
        this.products = products;
        this.dataSource = new MatTableDataSource<Product>(products);
        });
  }
   }


  onFileSelected(event, productArrayIndex) {
    if (this.productsFormData[productArrayIndex] === undefined) {
      this.productsFormData[productArrayIndex] = new FormData();
    }
    this.productsFormData[productArrayIndex].append('img', event.target.files[0], event.target.files[0].name);

    const reader = new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
      this.imgURL[productArrayIndex] = reader.result;
    };
  }
   updateProduct(productId, productIndexInProductsArray) {
      if (this.products[productIndexInProductsArray].name.length < 6 ||
        this.products[productIndexInProductsArray].location.length < 6
        ) {
          alert('Prodcut location and Product name must be at least 6 characters');
        } else {
          if (this.productsFormData[productIndexInProductsArray] === undefined) {
            this.productsFormData[productIndexInProductsArray] = new FormData();
          }
          this.productsFormData[productIndexInProductsArray].append('name', this.products[productIndexInProductsArray].name);
          this.productsFormData[productIndexInProductsArray].append('location', this.products[productIndexInProductsArray].location);
          this.productsFormData[productIndexInProductsArray].append('quantities', this.products[productIndexInProductsArray].quantities.toString());
          this.productsFormData[productIndexInProductsArray].append('price', this.products[productIndexInProductsArray].price.toString());
          this.productsFormData[productIndexInProductsArray].append('details', this.products[productIndexInProductsArray].details);
          this.productsFormData[productIndexInProductsArray].append('user', this.user._id);
          this.productsFormData[productIndexInProductsArray].append('category', this.products[productIndexInProductsArray].category._id);

          this.productEdd$ = this.productService.updateProduct(this.productsFormData[productIndexInProductsArray], productId).subscribe(product => {
        this.productEdd$CheckSubscription = true;
        alert(`congratulation ${this.user.userName} your product ${product.name} is successfully updated`);
    });
          this.productsFormData[productIndexInProductsArray] = new FormData();
        }
   }

   ngOnDestroy(): void {
    if (this.user) {
    this.getProductsOb$.unsubscribe();
    }
    if (this.productEdd$CheckSubscription === true) {
      this.productEdd$.unsubscribe();
    }
  }

}

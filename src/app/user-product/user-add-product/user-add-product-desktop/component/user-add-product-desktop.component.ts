import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { User } from 'src/app/modals/user';
import { CategoryService } from 'src/app/services/category.service';
import { Observable, Subscription } from 'rxjs';
import { Category } from 'src/app/modals/category';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-user-add-product-desktop',
  templateUrl: './user-add-product-desktop.component.html',
  styleUrls: ['./user-add-product-desktop.component.css']
})
export class UserAddProductDesktopComponent implements OnInit, OnDestroy {

  public user: User;
  public categories$: Observable<Category[]>;
  public productEdd$: Subscription;
  public product: Product = new Product();
  public selectedFile: File = null;
  public productFormData: FormData;
  public productEdd$CheckSubscription = false;
  public imagePath;
  public messageFileNoImg: string;
  imgURL: any;
  constructor(
    private authenticationService: AuthenticationService,
    private categoryService: CategoryService,
    private productService: ProductsService,
    private router: Router
  ) { }

  ngOnInit() {
    this.user = this.authenticationService.user;
    this.categories$ = this.categoryService.getAllCategories();
  }

  userAddingProduct() {
    this.productFormData = new FormData();
    this.productFormData.append('img', this.selectedFile, this.selectedFile.name);
    this.productFormData.append('name', this.product.name);
    this.productFormData.append('location', this.product.location);
    this.productFormData.append('quantities', this.product.quantities.toString());
    this.productFormData.append('price', this.product.price.toString());
    this.productFormData.append('details', this.product.details);
    this.productFormData.append('user', this.user._id);
    this.productFormData.append('category', this.product.category.toString());

    this.productEdd$ = this.productService.addProdut(this.productFormData).subscribe(product => {
      this.productEdd$CheckSubscription = true;
      alert(`congratulation ${this.user.userName} your product ${product.name} is successfully uploaded`);
      this.router.navigate(['user/products']);
    });
  }
  onFileSelected(event) {
    console.log( this.product.img);
    if (event.target.files.length === 0){
      if (this.imgURL){
        this.product.img = {
          'url': "null",
          'name': "null",
          'imgId': "null",
      };
      }
      return;
    }
    this.product.img = {
      'url': "null",
      'name': "null",
      'imgId': "null",
  };
    this.selectedFile = event.target.files[0];
    console.log("ok");
    console.log( this.product.img);
    const mimeType = event.target.files[0].type;
    if (mimeType.match(/image\/*/) == null) {
    this.messageFileNoImg = 'Only images are supported.';
    return;
  }

    const reader = new FileReader();
    this.imagePath = event.target.files[0];
    reader.readAsDataURL(event.target.files[0]);
    reader.onload = (_event) => {
    this.imgURL = reader.result;
    };
    this.messageFileNoImg = '';

  }

  ngOnDestroy(): void {
    if (this.productEdd$CheckSubscription === true) {
      this.productEdd$.unsubscribe();
    }
  }

}

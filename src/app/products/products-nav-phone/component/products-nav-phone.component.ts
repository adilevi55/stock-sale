import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/modals/category';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/modals/user';
@Component({
  selector: 'app-products-nav-phone',
  templateUrl: './products-nav-phone.component.html',
  styleUrls: ['./products-nav-phone.component.css']
})
export class ProductsNavPhoneComponent implements OnInit, OnDestroy {
  public navLinks$: Observable<Category[]>;
  public user$: Subscription;
  public user: User;
  constructor(
    private categoryService: CategoryService,
    private authenticationService: AuthenticationService
    ) { }
  ngOnInit() {
      this.navLinks$ = this.categoryService.getAllCategories();
      this.user$ = this.authenticationService.getUser().subscribe(user => {
        this.user = user;
    })
  }

  ngOnDestroy(): void {
    this.user$.unsubscribe();
  }
  logout() {
    this.authenticationService.loguot();
  }

}

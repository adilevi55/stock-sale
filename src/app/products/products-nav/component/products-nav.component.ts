import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { Category } from 'src/app/modals/category';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-products-nav',
    templateUrl: './products-nav.component.html',
    styleUrls: ['./products-nav.component.css']
})
export class ProductsNavComponent implements OnInit {
    public navLinks$: Observable<Category[]>;
    constructor(private categoryService: CategoryService) { }
    ngOnInit() {
        this.navLinks$ = this.categoryService.getAllCategories();
    }

}

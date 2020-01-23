import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-product',
  templateUrl: './search-product.component.html',
  styleUrls: ['./search-product.component.css']
})
export class SearchProductComponent implements OnInit {
  public searchValue: string;
  public searchFiled: string;
  constructor(private route: Router) { }

  ngOnInit() {
  }

  searchProduct() {
    this.route.navigate([`/products/search/${this.searchFiled}/${this.searchValue}`]);
  }

}

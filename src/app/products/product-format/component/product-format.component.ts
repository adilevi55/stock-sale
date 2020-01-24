import { Component, Input } from '@angular/core';
import { Product } from 'src/app/modals/product';

@Component({
  selector: 'app-product-format',
  templateUrl: './product-format.component.html',
  styleUrls: ['./product-format.component.css']
})
export class ProductFormatComponent  {
  @Input() products: Product[];
}

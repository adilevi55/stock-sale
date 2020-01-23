import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modals/product';
import { Subject, Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
   return this.http.get<Product[]>('https://test-node-app0.herokuapp.com/api/product/all-products');
  }
  getProductsByCategory(category: string): Observable<Product[]> {
  return this.http.get<Product[]>(`https://test-node-app0.herokuapp.com/api/product/category/${category}`);
  }
  getProductBySearch(filed: string , searchValue: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://test-node-app0.herokuapp.com/api/product/search/${filed}/${searchValue}`);
  }
}

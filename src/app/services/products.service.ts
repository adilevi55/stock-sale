import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modals/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
   return this.http.get<Product[]>('https://test-node-app0.herokuapp.com/api/product/all-products');
  }

  getProductById(productId: string): Observable<Product> {
   return this.http.get<Product>('https://test-node-app0.herokuapp.com/api/product/id/' + productId);
  }
  getProductsByCategory(category: string): Observable<Product[]> {
  return this.http.get<Product[]>(`https://test-node-app0.herokuapp.com/api/product/category/${category}`);
  }
  getProductBySearch(filed: string , searchValue: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://test-node-app0.herokuapp.com/api/product/search/${filed}/${searchValue}`);
  }
  getAllUserProduts(userId: string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://test-node-app0.herokuapp.com/api/product/user/${userId}`);
  }
  addProdut(product: FormData): Observable<Product> {
    return this.http.post<Product>('https://test-node-app0.herokuapp.com/api/product/add', product);
  }
  updateProduct(product: FormData, productId: string): Observable<Product> {
    return this.http.put<Product>('https://test-node-app0.herokuapp.com/api/product/' + productId, product);
  }
  deleteProduct(productId: string): Observable<Product> {
    return this.http.delete<Product>(`https://test-node-app0.herokuapp.com/api/product/${productId}`);
  }
}

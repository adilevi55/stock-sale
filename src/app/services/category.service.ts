import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../modals/product';
import { Subject, Observable, BehaviorSubject } from 'rxjs';
import { Category } from '../modals/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  getAllCategories(): Observable<Category[]> {
   return this.http.get<Category[]>('https://test-node-app0.herokuapp.com/api/category/all-categoies');
  }

  getCategoryByName(categoryName: string): Observable<Category> {
    return this.http.get<Category>(`https://test-node-app0.herokuapp.com/api/category/name/${categoryName}`);
   }
}


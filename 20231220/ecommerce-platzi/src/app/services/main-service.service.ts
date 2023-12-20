import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, pipe } from 'rxjs';
import { Product } from '../models/Product';
import { Category } from '../models/Category';

@Injectable({
  providedIn: 'root',
})

export class MainServiceService {
  constructor(private http: HttpClient) {}
  URL_API ='https://api.escuelajs.co/api/v1/products'
  URL_CATEGORIES= 'https://api.escuelajs.co/api/v1/categories'

  public carrito: number = 0;

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API).pipe(map(res => res as Product[]))
  }

  public getProduct(id: number): Observable<any> {
    return this.http.get(this.URL_API + "/" + id);
  }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.URL_CATEGORIES);
  }

}

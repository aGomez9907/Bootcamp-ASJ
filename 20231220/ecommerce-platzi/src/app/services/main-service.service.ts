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
  URL_API ='https://api.escuelajs.co/api/v1/'

  
  public cantidadCarrito: number = 0;

  public getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL_API+'products').pipe(map(res => res as Product[]))
  }

  public getProduct(id: number): Observable<any> {
    return this.http.get(this.URL_API + "products/" + id);
  }

  public getCategories(): Observable<Category[]>{
    return this.http.get<Category[]>(this.URL_API+'categories').pipe(map(res => res as Category[]));
  }

  public getFilteredPriceProductsByCategory(priceMin : number, priceMax : number, categoryId : number, title:string) : Observable<Product[]>{
    return this.http.get<Product[]>(this.URL_API+`products/?price_min=${priceMin}&price_max=${priceMax}&categoryId=${categoryId}&title=${title}`).pipe(map(res => res as Product[]));    
  }

  public getFilteredPriceProducts(priceMin : number, priceMax : number, title:string) : Observable<Product[]>{
    return this.http.get<Product[]>(this.URL_API+`products/?price_min=${priceMin}&price_max=${priceMax}&title=${title}`).pipe(map(res => res as Product[]));    
  }


}

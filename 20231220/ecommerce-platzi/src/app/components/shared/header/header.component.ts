import { Component } from '@angular/core';
import { ProductInCart } from '../../../models/ProductInCart';
import { MainServiceService } from '../../../services/main-service.service';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  categories: Category[] = [];

  constructor(public mainServiceService:MainServiceService){
    
  }

  ngOnInit():void{
    this.getCategories()
    this.updateItemsInCart()
  }

  getCategories(){
    this.mainServiceService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
      }
    );
  }

  updateItemsInCart(){
    const currentCart = localStorage.getItem('cart');
    const parsedCart = currentCart ? JSON.parse(currentCart) : [];
    const values = parsedCart.map((item: ProductInCart) => item.quantity)
    const total = values.reduce((sum : number, actual : number) => sum + actual, 0);
    this.mainServiceService.cantidadCarrito = total;
  }



}

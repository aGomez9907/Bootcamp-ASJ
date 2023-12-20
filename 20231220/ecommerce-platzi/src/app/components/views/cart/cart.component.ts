import { Component } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';
import { ActivatedRoute } from '@angular/router';
import { ProductInCart } from '../../../models/ProductInCart';
import { Product } from '../../../models/Product';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent {

productsInCart: ProductInCart[] = [];

totalCart = 0;

constructor(private mainServiceService:MainServiceService, private ruta: ActivatedRoute){}

ngOnInit():void{
  const currentCart = localStorage.getItem('cart');
  this.productsInCart = currentCart ? JSON.parse(currentCart) : [];
  console.log(this.productsInCart);
  this.updateTotalCart()
}



deleteFromCart(id: number){
  const productToDelete: any = this.productsInCart.map((item:ProductInCart)=> {
    if(item.product.id == id ){
      return item.product;
    }else{
      return null;
    }
  })
  
  let confirmacion = confirm('¿Eliminar?');
  if(confirmacion){
    this.productsInCart.splice(this.productsInCart.indexOf(productToDelete), 1)
    this.saveCart();
  }
}

addOne(id: number){
  this.productsInCart = this.productsInCart.map( (item: ProductInCart ) => {
    if(item.product.id === id) {
      return {...item, quantity:item.quantity++}
    } else{
      return item
    }
  })
  this.saveCart()
}

removeOne(id: number){
  let isCero = false;
  this.productsInCart = this.productsInCart.map( (item: ProductInCart ) => {
    if(item.product.id === id) {
      if(item.quantity == 1){
        isCero = true;
      }
      return {...item, quantity:item.quantity--}
    } else{
      return item
    }
  })
  if(isCero){
    this.addOne(id);
    this.deleteFromCart(id);
  }
  this.saveCart()
}

// No funciona no se por que!!
// removeOne(id: number){
//   this.productsInCart = this.productsInCart.map( (item: ProductInCart ) => {
//     if (item.product.id == id) {
//      return {...item, quantity:item.quantity--} 
//     } else {
//       return item
//     }
//   })
//   this.saveCart()
// }

saveCart(){
  const stringifiedNewCart = JSON.stringify(this.productsInCart);
  localStorage.setItem('cart', stringifiedNewCart);
  this.updateTotalCart()
}

updateTotalCart(){
  const values = this.productsInCart.map((item: ProductInCart) => item.quantity * item.product.price)
  const total = values.reduce((sum, actual) => sum + actual, 0);
  this.totalCart = total;
}

}

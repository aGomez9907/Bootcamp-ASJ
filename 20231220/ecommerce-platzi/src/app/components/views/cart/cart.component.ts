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
    this.updateItemsInCart();
  }
}

addOne(id: number){
  this.productsInCart = this.productsInCart.map( (item: ProductInCart ) => {
    if(item.product.id === id) {
      item.quantity++
      return {...item}
    } else{
      return item
    }
  })
  this.saveCart()
  this.updateItemsInCart();
}

removeOne(id: number){
  
  let isCero = false;
  let itemTest: any = []
  this.productsInCart = this.productsInCart.map( (item: ProductInCart ) => {
    
    if(item.product.id === id) {
      if(item.quantity == 1){
        isCero = true;
        return item;
      }
      item.quantity--;
      return {...item}
      
    } else{
      return item
    }
  })
  console.log(itemTest);
  if(isCero){
    this.addOne(id);
    this.deleteFromCart(id);
  }
  this.saveCart()
  this.updateItemsInCart();
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

  updateItemsInCart(){
    const values = this.productsInCart.map((item: ProductInCart) => item.quantity)
    const total = values.reduce((sum, actual) => sum + actual, 0);
    this.mainServiceService.cantidadCarrito = total;
  }

  comprar(){
    const confirmation = confirm("Confirma compra?")
    if(confirmation){
      localStorage.clear();
      this.productsInCart = [];
      this.mainServiceService.cantidadCarrito = 0;
      alert("Gracias por su compra!")
    }
  }
}

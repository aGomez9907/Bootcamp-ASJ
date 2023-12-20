import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/Product';
import { ProductInCart } from '../../../models/ProductInCart';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  product: any = {};

  constructor(
    private mainServiceService: MainServiceService,
    private ruta: ActivatedRoute
  ) {}

  idURL = this.ruta.snapshot.params['id'];

  unitsInCart = 0;

  ngOnInit(): void {
    this.inicioProductoYCantidad();
  }

  inicioProductoYCantidad() {
    this.getProduct(this.idURL);
    const currentCart = localStorage.getItem('cart');
    const parsedCart = currentCart ? JSON.parse(currentCart) : [];
    const currentProduct = parsedCart.find(
      (item: ProductInCart) => item.product.id == this.idURL
    );
    if (currentProduct) {
      this.unitsInCart = currentProduct.quantity;
    }
  }

  // this.route.params.subscribe((params) => {
  //   this.characterId = +params['id'];
  // });

  getProduct(id: number) {
    this.mainServiceService.getProduct(id).subscribe((res) => {
      this.product = res;
      console.log(res);
    });
  }

  addOne(){
    this.unitsInCart++;
    this.addToCart();
  }

  removeOne(){
    this.unitsInCart--;
    this.addToCart();
  }

  addToCart() {
    const boughtProduct = { product: this.product, quantity: this.unitsInCart };
    const currentCart = localStorage.getItem('cart');
    const parsedCart = currentCart ? JSON.parse(currentCart) : [];

    let filteredCart = [];

    if (parsedCart.length > 0) {
      filteredCart = parsedCart.filter(
        (item: ProductInCart) => item.product.id != this.product.id
      );
    }
    filteredCart.push(boughtProduct);

    const stringifiedNewCart = JSON.stringify(filteredCart);
    localStorage.setItem('cart', stringifiedNewCart);
  }
}

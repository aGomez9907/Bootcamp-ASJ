import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './components/views/main/main.component';
import { ProductComponent } from './components/views/product/product.component';
import { CartComponent } from './components/views/cart/cart.component';

const routes: Routes = [
  {
    path: 'products',
    children: [
      { path: '', component: MainComponent },
      { path: ':id', component: MainComponent },
    ],
  },
  {
    path: 'product',
    children: [
      { path: '', component: MainComponent },
      { path: ':id', component: ProductComponent },
    ],
  },
  {path: 'cart', component: CartComponent},

// { path: ':id', component: ProductComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

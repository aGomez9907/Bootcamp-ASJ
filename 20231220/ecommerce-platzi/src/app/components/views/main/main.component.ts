import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';
import { Product } from '../../../models/Product';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/Category';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit{

  products: Product[] = [];
  categories: Category[] = [];


  minPrice : number = 0;
  maxPrice : number = 0;
  title: string = '';
  mensaje : string = "";
  currentCategory = '';
  categoryInUrl: string = this.ruta.snapshot.params['id'];
  isFiltered: boolean = false;

  constructor(private mainServiceService:MainServiceService, private ruta:ActivatedRoute){
    
  }

  categoriaID: string= '';
  categoryName: string = 'All Products'
  categoryFilterName: string = 'Select Category'

  ngOnInit(): void {
    this.getProducts();
    this.getCategories();
    
  }

  getProducts(){
    this.ruta.paramMap.subscribe((param: any)=>{
      this.categoriaID = param.get('id')
      this.mainServiceService.getAllProducts().subscribe(
        (res:Product[])=> {

          if(this.categoriaID){
            this.products = res.filter(item => item.category.id.toString() == this.categoriaID);
            this.mainServiceService.getCategories().subscribe((resp: Category[]) => {
              this.categoryName = resp[Number(this.categoriaID)-1].name;
            })
          } else {
            this.products = res;
          }
        }
      )
    })    
  }

  getFilteredProducts(){
    // if(this.minPrice < 1){
    //   this.mensaje = "El precio mínimo debe ser mayor que 1"
    //   return;
    // }
    //const currentCategory = this.ruta.snapshot.params['id'];
    
    if(this.currentCategory){
      this.mainServiceService.getFilteredPriceProductsByCategory(this.minPrice, this.maxPrice, Number(this.currentCategory), this.title).subscribe(
        (res : Product[]) => {
          this.products = res;
        }
        )
      } else {
        this.mainServiceService.getFilteredPriceProducts(this.minPrice, this.maxPrice, this.title).subscribe(
          (res : Product[]) => {
            this.products = res;
          }
          )
        }
  }

  getFilteredProductsWithoutPrice(){
    // if(this.minPrice < 1){
    //   this.mensaje = "El precio mínimo debe ser mayor que 1"
    //   return;
    // }
    //const currentCategory = this.ruta.snapshot.params['id'];
    
    if(this.minPrice==0 && this.maxPrice==0){
      if(this.currentCategory){
        this.mainServiceService.getFilteredPriceProductsByCategory(1, 999999999999, Number(this.currentCategory), this.title).subscribe(
          (res : Product[]) => {
            this.products = res;
          }
          )
        } else {
          this.mainServiceService.getFilteredPriceProducts(1, 999999999999, this.title).subscribe(
            (res : Product[]) => {
              this.products = res;
            }
            )
          }
  
    }
   
    

  }

  clearFilters(){
    this.minPrice = 0;
    this.maxPrice = 0;
    this.title = '';
    this.currentCategory = '';
    this.categoryFilterName = 'Select Category';
  }

  resetProductList(){
    this.clearFilters();
    this.getProducts();
  }


  getCategories(){
    this.mainServiceService.getCategories().subscribe(
      (data: Category[]) => {
        this.categories = data;
        console.log(this.categories)
      }
    );
  }

  setCategory(id: number, categoryFilterName : string){
    this.currentCategory = id.toString();
    this.categoryFilterName = categoryFilterName;
  }

}

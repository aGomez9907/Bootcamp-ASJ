import { Component, OnInit } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';
import { Product } from '../../../models/Product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent implements OnInit{

  products: Product[] = [];

  constructor(private mainServiceService:MainServiceService, private ruta:ActivatedRoute){
    
  }

  categoriaID: string= '';

  ngOnInit(): void {
    //this.categoriaID = this.ruta.snapshot.params['id'];
    this.getProducts();
  }
  

  getProducts(){
    this.ruta.paramMap.subscribe((param: any)=>{
      this.categoriaID = param.get('id')
      this.mainServiceService.getAllProducts().subscribe(
        (res:Product[])=> {
          
          if(this.categoriaID){
            this.products = res.filter(item => item.category.id.toString() == this.categoriaID);
          } else {
            this.products = res;
          }
        }
      )
    })
    
  }

}

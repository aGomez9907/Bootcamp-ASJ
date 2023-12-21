import { Component } from '@angular/core';
import { MainServiceService } from '../../../services/main-service.service';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../../models/Product';
import { Category } from '../../../models/Category';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
 
 
  constructor(private mainServiceService:MainServiceService, private ruta:ActivatedRoute){
    
  }

  ngOnInit(): void {

  }







}

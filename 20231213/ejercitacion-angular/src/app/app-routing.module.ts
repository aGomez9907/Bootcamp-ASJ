import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Component } from './components/proyecto-1/proyecto-1.component';
import { Proyecto2Component } from './components/proyecto-2/proyecto-2.component';
import { Proyecto3Component } from './components/proyecto-3/proyecto-3.component';
import { MyCardComponent } from './components/proyecto-3/my-card/my-card.component';
import { MyListComponent } from './components/proyecto-3/my-list/my-list.component';

//URL = https://localhost:4200/
const routes: Routes = [
  //   {
  //   path: 'inicio',component: inicioComponent
  // },
  { path: 'ToDoList', component: Proyecto1Component },
  { path: 'TheSimpsonsCharacterList', component: Proyecto2Component },
  { path: 'RickAndMortyList', component: MyListComponent },
  { path: 'RickAndMortyList/:id', component: MyCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Proyecto1Component } from './components/proyecto-1/proyecto-1.component';
import { Proyecto2Component } from './components/proyecto-2/proyecto-2.component';

//URL = https://localhost:4200/
const routes: Routes = [
  //   {
  //   path: '',component: homeComponent
  // },
  { path: 'ToDoList', component: Proyecto1Component },
  { path: 'TheSimpsonsCharacterList', component: Proyecto2Component },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

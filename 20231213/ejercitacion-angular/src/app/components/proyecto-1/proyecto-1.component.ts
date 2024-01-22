import { Component, OnInit } from '@angular/core';
import { ToDoServiceService } from '../../services/to-do-service.service';
import { Tarea } from '../../models/tarea';
import { Observable } from 'rxjs';
import { map, filter, shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-proyecto-1',
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css',
})
export class Proyecto1Component implements OnInit {
  task_title: string = '';
  task_date: Date = new Date();
  task_description: string = '';
 
  deletedTasks = new Array();
  
  tasks: Observable<Tarea[]> = new Observable();
  constructor(public toDoService: ToDoServiceService) {}
  
  ngOnInit(): void {
    
    this.tasks = this.toDoService.getTareas();
    this.filterAll();
    // this.toDoService.getTareas().subscribe((res) => {
      //   this.tasks = res;
      //   console.log('tareas:', res);
      // });
    }
    
    tasksToShow = new Observable<Array<Tarea>>;
  //isDone: boolean = false;
  // tasks = [
  //   {
  //     title: 'Hacer funcionar el boton para borrar',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //     date: '11-11-2023',
  //     isDone: false,
  //   },
  //   {
  //     title: 'hacer que el tachado tache solo una tarjeta',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //     date: '13-11-2023',
  //     isDone: false,
  //   },
  //   {
  //     title: 'otra cosa',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //     date: '13-11-2023',
  //     isDone: false,
  //   },
  //   {
  //     title: 'algo mas',
  //     description:
  //       'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
  //     date: '13-11-2023',
  //     isDone: false,
  //   },
  // ];

  //creo que podria crear la funcion sin pasarle parámetros
  // addTask(title1: string, description1: string, date1: string) {
  //   let newTask = {
  //     title: title1,
  //     description: description1,
  //     date: date1,
  //     isDone: false,
  //   };
  //   this.tasks.push(newTask);
  // }

  getTaskList() {
    this.tasks = this.toDoService.getTareas();
    // this.toDoService.getTareas().subscribe((res) => {
    //   this.tasks = res;
    //   console.log('tareas:', res);
    // });
  }

  addTask() {
     let newTask = {
      nombre: this.task_title,
      descripcion: this.task_description,
      fecha: this.task_date,
      estado: false,
      borrado: false,
    };
    this.toDoService.addTarea(newTask).subscribe(res =>{
      console.log(res)
      this.getTaskList();
    })
    // this.tasks.push(newTask);
  }

  updateTask(id:number | undefined, task: Tarea ){
    this.toDoService.updateTarea(id,task).subscribe((res)=>{
      console.log(res);
      this.getTaskList();
    })
  }

  deleteTask(i: number | undefined) {
    // if (this.tasksToShow == this.deletedTasks) {
    //   this.tasks.push(this.deletedTasks[i]);
    //   this.deletedTasks.splice(i, 1);
    // } else {
    //   this.deletedTasks.push(this.tasks[i]);
    //   this.tasks.splice(i, 1);
    // }
    this.toDoService.deleteTarea(i).subscribe(res=>{
      this.deletedTasks.push(res);
      this.getTaskList();
    })
  }

  filterDeleted() {
    // this.tasksToShow = this.deletedTasks;
    console.log(this.tasksToShow);
  }
  filterActive() {

    this.tasksToShow =  this.tasks.pipe(map(res => res.filter (task => task.estado == false)));

  }
  filterCompleted() {
   this.tasksToShow =  this.tasks.pipe(map(res => res.filter (task => task.estado == true)));
  }
  filterAll() {
    this.tasksToShow = this.tasks;
}
}

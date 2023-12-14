import { Component } from '@angular/core';

@Component({
  selector: 'app-proyecto-1',
  templateUrl: './proyecto-1.component.html',
  styleUrl: './proyecto-1.component.css',
})
export class Proyecto1Component {
  task_title: string = '';
  task_description: string = '';
  task_date: string = '';
  deletedTasks = new Array();
  //isDone: boolean = false;
  tasks = [
    {
      title: 'Hacer funcionar el boton para borrar',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
      date: '11-11-2023',
      isDone: false,
    },
    {
      title: 'hacer que el tachado tache solo una tarjeta',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
      date: '13-11-2023',
      isDone: false,
    },
    {
      title: 'otra cosa',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
      date: '13-11-2023',
      isDone: false,
    },
    {
      title: 'algo mas',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, recusandae.',
      date: '13-11-2023',
      isDone: false,
    },
  ];

  tasksToShow = this.tasks;
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

  addTask() {
    let newTask = {
      title: this.task_title,
      description: this.task_description,
      date: this.task_date,
      isDone: false,
    };
    this.tasks.push(newTask);
  }

  deleteTask(i: number) {
    if (this.tasksToShow == this.deletedTasks) {
      this.tasks.push(this.deletedTasks[i]);
      this.deletedTasks.splice(i, 1);
    } else {
      this.deletedTasks.push(this.tasks[i]);
      this.tasks.splice(i, 1);
    }
  }

  filterDeleted() {
    this.tasksToShow = this.deletedTasks;
    console.log(this.tasksToShow);
  }
  filterActive() {
    this.tasksToShow = this.tasks.filter((task) => task.isDone == false);
  }
  filterCompleted() {
    this.tasksToShow = this.tasks.filter((task) => task.isDone == true);
  }
  filterAll() {
    this.tasksToShow = this.tasks;
  }
}

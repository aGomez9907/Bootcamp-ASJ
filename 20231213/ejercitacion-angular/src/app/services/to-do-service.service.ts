import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class ToDoServiceService {

  constructor(private http: HttpClient) { }

  URL_API = "http://localhost:8080/tareas"

  getTareas(): Observable<Tarea[]>{
    return this.http.get<Tarea[]>(this.URL_API);
  }

  addTarea(t: Tarea): Observable<HttpResponse<any>>{
    
    return this.http.post(this.URL_API,t, { observe: 'response', responseType: 'text' as 'json'  });
  }

  updateTarea(id: number | undefined, task: Tarea): Observable<HttpResponse<any>>{
    return this.http.put(this.URL_API+"/"+id,task, { observe: 'response', responseType: 'text' as 'json'  });
  }
  
  deleteTarea(id: Number | undefined): Observable<Tarea>{
    return this.http.delete<Tarea>(this.URL_API + "/" + id)
  }
}

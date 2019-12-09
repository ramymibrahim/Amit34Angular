import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ToDo } from '../models/to-do';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  headers: HttpHeaders
  constructor(private http: HttpClient) {
    this.headers = new HttpHeaders({
      'Accept': '*/*',
      'Content-Type': 'application/json',
      'Authorization':'Bearer '+localStorage.getItem('token')
    });
  }
  get() {
    return this.http.get(environment.baseURL, { headers: this.headers });
  }
  add(data: any) {
    return this.http.post(environment.baseURL, data, { headers: this.headers });
  }
  edit(id:number,data:any) {
    return this.http.put(environment.baseURL+'/'+id, data, { headers: this.headers });
  }
  delete(id:number) {
    return this.http.delete(environment.baseURL+'/'+id, { headers: this.headers });
  }
}

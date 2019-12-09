import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  isLoggedIn() {
    var token = localStorage.getItem('token');
    if (token == null)
      return false;
    return true;
  }

  login(userName, password) {
    var data = { email: userName, password: password };
    return this.http.post(environment.baseURL + '/login', data);
  }
}

import { environment } from '../../../environments/environment';
import { LoginForm } from '../../models/login-form';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthResponse } from '../../models/auth-response';
import { User } from '../../models/user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  endpoint = environment.API_URL+"/subscription";

  constructor(private http: HttpClient) { }

  authenticate(loginForm: LoginForm) {
    return this.http.post<AuthResponse>(`${this.endpoint}/login`, loginForm)
  }

  register(user: User): Observable<User> {
    return this.http.post<User>(this.endpoint+'/register', user);
  }

  saveLoggedUser(authResponse: AuthResponse) {
    localStorage.setItem('token', authResponse.token);
    localStorage.setItem('id', authResponse.user.id);
    localStorage.setItem('username', authResponse.user.firstName);
    localStorage.setItem('fullName', authResponse.user.lastName);
    localStorage.setItem('role', authResponse.user.role.libelle);
  }

  signOut() {
    localStorage.clear();
  }


   

}

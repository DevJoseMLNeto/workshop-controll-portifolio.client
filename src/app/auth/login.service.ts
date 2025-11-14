import { HttpClient , HttpHeaders} from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, finalize, Observable, pipe } from 'rxjs';
import { Login } from './login';
import { Usuario } from './usuario';
import { jwtDecode , JwtPayload} from 'jwt-decode';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  http = inject(HttpClient);
  API =  environment.SERVIDOR + "/api/login";
  private isLoadingSub = new BehaviorSubject<boolean>(false);
  public isLoading = this.isLoadingSub.asObservable();
  constructor() { }



  logar(login: Login): Observable<string> {

    this.isLoadingSub.next(true);
    
    return this.http.post<string>(this.API, login, {responseType: "text" as "json"}).pipe(
      finalize(()=>{
        this.isLoadingSub.next(false);
      })
    );
  }

  addToken(token: string) {
    localStorage.setItem('token', token);
  }

  removerToken() {
    localStorage.removeItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

  jwtDecode() {
    let token = this.getToken();
    if (token) {
      return jwtDecode<JwtPayload>(token);
    }
    return "";
  }

  hasRole(role: string) {
    let user = this.jwtDecode() as Usuario;
    if (user.role == role)
      return true;
    else
      return false;
  }
  
  getUsuarioLogado() {
    return this.jwtDecode() as Usuario;
  }


}

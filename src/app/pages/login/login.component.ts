import { Component, inject } from '@angular/core';

import { Router } from '@angular/router';
import { Behavior } from 'popper.js';
import { Observable } from 'rxjs';
import { Login } from 'src/app/auth/login';
import { LoginService } from 'src/app/auth/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


router = inject(Router)
login: Login = new Login()
isLoading$!: Observable<boolean>;

constructor(private loginService: LoginService){
this.isLoading$ = this.loginService.isLoading
}

logar(){

    this.loginService.logar(this.login).subscribe({
      next: token => {
        if(token){
          this.loginService.addToken(token)
          this.router.navigate(['./home'])
        }
      },
      error: erro=> {
      }
    })

  }
}



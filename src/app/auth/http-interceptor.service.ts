import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, throwError } from 'rxjs';
import { LoginService } from './login.service';

export const meuhttpInterceptor: HttpInterceptorFn = (request, next) => {
  let loginService = inject(LoginService);
  let router = inject(Router);
  let token = localStorage.getItem('token');
  if (token && !router.url.includes('/login')) {
    request = request.clone({
      setHeaders: { Authorization: 'Bearer ' + token },
    });
  }

  console.log(request)


  return next(request).pipe(
    catchError((err: any) => {
      if (err instanceof HttpErrorResponse) {
        if (err.status === 401) {
          loginService.removerToken();
          alert("Senha ou usuario estão invalidos!")
          router.navigate(['/login']);
        } else
        if (err.status === 403) {
          router.navigate(['/login']);
        } else {
          console.error('HTTP error:', err);
        }
      } else {
        console.error('An error occurred:', err);
      }

      return throwError(() => err);
    })
  );
};

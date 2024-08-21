import { HttpErrorResponse, HttpInterceptorFn } from '@angular/common/http';
import { catchError, throwError } from 'rxjs';
export const errorHandlerInterceptor: HttpInterceptorFn = (req, next) => {

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      let errorMessage = '';
      if (error.error instanceof ErrorEvent) {
        errorMessage = `Error: ${error.error.message}`;
      } else {
        if ([401, 403].includes(error.status)) {
          errorMessage = 'No tienes permisos para ejecutar este endpoint';
          //deberíamos desloguear
        }
        errorMessage = `Error code: ${error.status}; Message: ${error.message}`;
      }

      return throwError(() => errorMessage);
    })
  );
};

import { HttpInterceptorFn } from '@angular/common/http';

export const tokenInterceptor: HttpInterceptorFn = (req, next) => {
  console.log(`Request interceptada: ${req.url}`);

  if (req.url.includes('alala')) {
    const urlClone = req.clone({ url: req.url.replace('alala', '')});
    return next(urlClone);
  }

  const authReq = req.clone({
    headers: req.headers.set('Authorization', 'Bearer xyz...')
  })
  return next(authReq);
};

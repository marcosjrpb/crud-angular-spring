import { ActivatedRouteSnapshot, RouterStateSnapshot, ResolveFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class CoursesResolver {
  resolve: ResolveFn<boolean> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> => {
    if (route.params && route.params['id']) {
      return of(true);
    }
    return of(false); // Retorne o valor desejado quando não há parâmetros 'id'
  }
}

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot } from '@angular/router';
import { catchError, of } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root',
})
export class ResolverService {
  constructor(private api: ApiService) {}
  resolve(route: ActivatedRouteSnapshot) {
    return this.api.someObs().pipe(catchError((err) => of(err)));
  }
}

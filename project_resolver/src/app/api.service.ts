import { Injectable } from '@angular/core';
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor() {}

  someObs() {
    const obs = from(['test data to display']);
    return obs;
  }
}

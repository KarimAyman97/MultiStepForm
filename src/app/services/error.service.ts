import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ErrorService {
  error = new BehaviorSubject<boolean>(false);

  getCurrentError() {
    return this.error;
  }

  setCurrentError(error: boolean) {
    this.error.next(error);
  }
}

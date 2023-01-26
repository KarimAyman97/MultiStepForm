import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  currentPage = new BehaviorSubject<number>(4);

  getCurrentPage() {
    return this.currentPage;
  }

  setCurrentPage(pageNumber: number) {
    this.currentPage.next(pageNumber);
  }

  constructor() {}
}

import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { IAddson } from './../interfaces/IAddson';
import { IOption } from './../interfaces/IOption';
import { IUser } from './../interfaces/IUser';

@Injectable({
  providedIn: 'root',
})
export class SummaryService {
  currentPlan = new BehaviorSubject<IOption>({
    imageUrl: '',
    imageAlt: '',
    name: '',
    planPerYear: 0,
    planPerMonth: 0,
    freeMonthsPerYear: 0,
  });
  planType = new BehaviorSubject<boolean>(false);
  selectedPlanIndex = new BehaviorSubject<number>(-1);
  user = new Subject<IUser>();
  currentAdds = new BehaviorSubject<IAddson[]>([
    {
      name: 'Onlince service',
      caption: 'Access to multiplayer games',
      monthFee: 1,
      yearFree: 10,
      checked: false,
    },
    {
      name: 'Larger storage',
      caption: 'Extra 1TB of cloud save',
      monthFee: 2,
      yearFree: 20,
      checked: false,
    },
    {
      name: 'Customizable profile',
      caption: 'Custom theme on your profile',
      monthFee: 2,
      yearFree: 20,
      checked: false,
    },
  ]);

  getCurrentAdds() {
    return this.currentAdds;
  }
  setCurrentAdds(adds: IAddson[]) {
    this.currentAdds.next(adds);
  }

  getCurrentPlan() {
    return this.currentPlan;
  }

  setCurrentPlan(plan: IOption) {
    this.currentPlan.next(plan);
  }

  getCurrentPlanIndex() {
    return this.selectedPlanIndex;
  }

  setCurrentPlanIndex(planIndex: number) {
    this.selectedPlanIndex.next(planIndex);
  }

  getCurrentUser() {
    return this.user;
  }

  setUser(user: IUser) {
    this.user.next(user);
  }

  getPlanType() {
    return this.planType;
  }

  setplanType(type: boolean) {
    this.planType.next(type);
  }

  constructor() {}
}

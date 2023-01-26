import { Component, OnInit } from '@angular/core';
import { IAddson } from './../interfaces/IAddson';
import { IOption } from './../interfaces/IOption';
import { IUser } from './../interfaces/IUser';
import { StepsService } from './../services/steps.service';
import { SummaryService } from './../services/summary.service';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss'],
})
export class SummaryComponent implements OnInit {
  user!: IUser;
  currentPlan!: IOption;
  AddsOn!: IAddson[];
  yearlySub!: boolean;
  constructor(
    private summaryService: SummaryService,
    private stepsService: StepsService
  ) {}
  ngOnInit() {
    this.summaryService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
    this.summaryService.getCurrentPlan().subscribe((data) => {
      this.currentPlan = data;
    });
    this.summaryService.getCurrentAdds().subscribe((data) => {
      const activatedAdds = data.filter((obj) => obj.checked === true);
      this.AddsOn = activatedAdds;
    });
    this.summaryService.getPlanType().subscribe((data) => {
      this.yearlySub = data;
    });
  }

  toPageTwo() {
    this.stepsService.setCurrentPage(2);
  }

  monthTotal() {
    let total = 0;
    this.AddsOn.forEach((element) => {
      total = total + element.monthFee;
    });
    return total + this.currentPlan.planPerMonth;
  }

  yearTotal() {
    let total = 0;
    this.AddsOn.forEach((element) => {
      total = total + element.yearFree;
    });
    return total + this.currentPlan.planPerYear;
  }
}

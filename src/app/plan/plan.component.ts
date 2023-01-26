import { Component, OnInit } from '@angular/core';
import { IOption } from './../interfaces/IOption';
import { ErrorService } from './../services/error.service';
import { SummaryService } from './../services/summary.service';

@Component({
  selector: 'app-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss'],
})
export class PlanComponent implements OnInit {
  selectedOption: number = -1;
  YearlySub: boolean = false;
  displayError: boolean = false;
  options: IOption[] = [
    {
      imageUrl: 'assets/images/icon-arcade.svg',
      imageAlt: 'icon 1',
      name: 'Arcade',
      planPerMonth: 9,
      planPerYear: 90,
      freeMonthsPerYear: 2,
    },
    {
      imageUrl: 'assets/images/icon-advanced.svg',
      imageAlt: 'icon 2',
      name: 'Advanced',
      planPerMonth: 9,
      planPerYear: 90,
      freeMonthsPerYear: 2,
    },
    {
      imageUrl: 'assets/images/icon-pro.svg',
      imageAlt: 'icon 3',
      name: 'Pro',
      planPerMonth: 9,
      planPerYear: 90,
      freeMonthsPerYear: 2,
    },
  ];

  constructor(
    private summaryService: SummaryService,
    private errorService: ErrorService
  ) {}
  ngOnInit() {
    this.getCurrentPlanIndex();
    this.checkError();
  }
  getCurrentPlanIndex() {
    this.summaryService.getCurrentPlanIndex().subscribe((data) => {
      this.selectedOption = data;
    });
  }
  setCurrentPlan(option: IOption) {
    this.summaryService.setCurrentPlan(option);
  }
  setCurrentPlanIndex(index: number) {
    this.summaryService.setCurrentPlanIndex(index);
  }
  setPlanType() {
    this.YearlySub = !this.YearlySub;
    this.summaryService.setplanType(this.YearlySub);
  }

  setPlan(event: any) {
    this.YearlySub = !this.YearlySub;
    console.log(this.YearlySub);
  }
  checkError() {
    this.errorService.getCurrentError().subscribe((data) => {
      this.displayError = data;
    });
  }
  selectOption(option: IOption, index: number) {
    this.selectedOption = index;
    this.errorService.setCurrentError(false);
    this.displayError = false;
    this.setCurrentPlan(option);
    this.setCurrentPlanIndex(index);
  }
}

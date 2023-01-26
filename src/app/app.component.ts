import { Component, OnInit } from '@angular/core';
import { IOption } from './interfaces/IOption';
import { ErrorService } from './services/error.service';
import { StepsService } from './services/steps.service';
import { SummaryService } from './services/summary.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'multi-step-form';
  pageNumber: number = 2;
  currentPlan: IOption = {
    imageUrl: '',
    imageAlt: '',
    name: '',
    planPerYear: 0,
    planPerMonth: 0,
    freeMonthsPerYear: 0,
  };
  constructor(
    private stepsService: StepsService,
    private summaryService: SummaryService,
    private errorService: ErrorService
  ) {}

  ngOnInit() {
    this.stepsService.getCurrentPage().subscribe((data) => {
      this.pageNumber = data;
    });
    this.summaryService.getCurrentPlan().subscribe((data) => {
      this.currentPlan = data;
    });
  }

  minusPage() {
    this.pageNumber--;
    this.stepsService.setCurrentPage(this.pageNumber);
  }

  plusPage() {
    if (this.currentPlan.name === '') {
      this.errorService.setCurrentError(true);
    } else {
      this.pageNumber++;
      this.stepsService.setCurrentPage(this.pageNumber);
    }
  }

  plusPagewithoutCheck() {
    this.pageNumber++;
    this.stepsService.setCurrentPage(this.pageNumber);
  }
}

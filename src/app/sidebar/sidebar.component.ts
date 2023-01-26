import { Component, OnInit } from '@angular/core';
import { StepsService } from './../services/steps.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {
  pageNumber: number = 1;

  constructor(private stepsService: StepsService) {}

  ngOnInit() {
    this.getCurrentPage();
  }

  getCurrentPage() {
    this.stepsService.getCurrentPage().subscribe((data) => {
      this.pageNumber = data;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { IAddson } from './../interfaces/IAddson';
import { SummaryService } from './../services/summary.service';

@Component({
  selector: 'app-add-ons',
  templateUrl: './add-ons.component.html',
  styleUrls: ['./add-ons.component.scss'],
})
export class AddOnsComponent implements OnInit {
  YearlySub: boolean = false;
  options: IAddson[] = [];
  constructor(private summaryService: SummaryService) {}
  ngOnInit() {
    this.summaryService.getPlanType().subscribe((data) => {
      this.YearlySub = data;
    });
    this.summaryService.getCurrentAdds().subscribe((data) => {
      this.options = data;
    });
  }

  getPlanType() {}

  changeOptions(option: IAddson, i: number) {
    option.checked = !option.checked;
    this.options.splice(i, 1, option);
    this.summaryService.setCurrentAdds(this.options);
  }
}

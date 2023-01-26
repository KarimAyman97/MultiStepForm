import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { IUser } from './../interfaces/IUser';
import { StepsService } from './../services/steps.service';
import { SummaryService } from './../services/summary.service';

@Component({
  selector: 'app-personal-info',
  templateUrl: './personal-info.component.html',
  styleUrls: ['./personal-info.component.scss'],
})
export class PersonalInfoComponent implements OnInit {
  personalForm = this.fb.group({
    name: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    phoneNumber: ['', [Validators.required, Validators.pattern(/^\d+$/)]],
  });
  user: IUser = {
    name: '',
    email: '',
    phoneNumber: '',
  };
  constructor(
    public fb: FormBuilder,
    private stepsService: StepsService,
    private summaryService: SummaryService
  ) {}

  ngOnInit() {
    this.summaryService.getCurrentUser().subscribe((data) => {
      this.user = data;
    });
  }

  onSubmit() {
    if (!this.personalForm.valid) {
      this.personalForm.markAllAsTouched();
    } else {
      const user: IUser = {
        name: this.personalForm.controls['name'].value as string,
        email: this.personalForm.controls['email'].value as string,
        phoneNumber: this.personalForm.controls['phoneNumber'].value as string,
      };
      this.summaryService.setUser(user);
      this.stepsService.setCurrentPage(2);
    }
  }
}

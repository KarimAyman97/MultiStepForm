import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarStepsComponent } from './sidebar-steps.component';

describe('SidebarStepsComponent', () => {
  let component: SidebarStepsComponent;
  let fixture: ComponentFixture<SidebarStepsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarStepsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidebarStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanDetailsComponent } from './mealplan-details.component';

describe('MealplanDetailsComponent', () => {
  let component: MealplanDetailsComponent;
  let fixture: ComponentFixture<MealplanDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplanDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealplanDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

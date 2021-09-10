import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MealplanCategoryMenuComponent } from './mealplan-category-menu.component';

describe('MealplanCategoryMenuComponent', () => {
  let component: MealplanCategoryMenuComponent;
  let fixture: ComponentFixture<MealplanCategoryMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MealplanCategoryMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MealplanCategoryMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import {Mealplan} from "../../common/mealplan";
import {MealplanCategory} from "../../common/mealplan-category";
import {MealplanService} from "../../services/mealplan.service";

@Component({
  selector: 'app-mealplan-category-menu',
  templateUrl: './mealplan-category-menu.component.html',
  styleUrls: ['./mealplan-category-menu.component.css']
})
export class MealplanCategoryMenuComponent implements OnInit {

  mealCategory: MealplanCategory[];

  constructor(private mealplanService: MealplanService) { }

  ngOnInit(): void {
    this.listMealplanCategories();
  }

  listMealplanCategories(){

    this.mealplanService.getMealplanCategories().subscribe(
      data =>{
        console.log('Mealplan Categories=' + JSON.stringify(data));
        this.mealCategory = data;
      }
    );
  }

}

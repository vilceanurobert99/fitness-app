import { Component, OnInit } from '@angular/core';
import {Mealplan} from "../../common/mealplan";
import {MealplanService} from "../../services/mealplan.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../common/cart-item";

@Component({
  selector: 'app-mealplan-details',
  templateUrl: './mealplan-details.component.html',
  styleUrls: ['./mealplan-details.component.css']
})
export class MealplanDetailsComponent implements OnInit {

  mealplan: Mealplan = new Mealplan();

  constructor(private mealplanService: MealplanService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() =>
    {
      this.handleMealplanDetails();
    })
  }

  handleMealplanDetails(){

    // luam id ca si string si il convertim la number cu "+"
    const theMealplanId: number = +this.route.snapshot.paramMap.get('id');

    this.mealplanService.getMealplan(theMealplanId).subscribe(
      data =>{
        this.mealplan = data;
      }
    )
  }

  addToCart() {

    console.log(`Adding to cart: ${this.mealplan.name}, ${this.mealplan.price}`);
    const theCartItem = new CartItem(this.mealplan);
    this.cartService.addToCart(theCartItem);

  }
}

import {Mealplan} from "./mealplan";

export class CartItem {

  id: number;
  name: string;
  imageUrl: string;
  price: number;

  quantity: number;

  constructor(mealplan: Mealplan){
    this.id = mealplan.id;
    this.name = mealplan.name;
    this.imageUrl = mealplan.imageUrl;
    this.price = mealplan.price;

    this.quantity=1;
  }
}

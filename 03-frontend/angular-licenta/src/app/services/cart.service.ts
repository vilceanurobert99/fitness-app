import { Injectable } from '@angular/core';
import {CartItem} from "../common/cart-item";
import {BehaviorSubject, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: CartItem[] = [];

  totalPrice: Subject<number> = new BehaviorSubject<number>(0);
  totalQuantity: Subject<number> = new BehaviorSubject<number>(0);

  constructor() { }


  addToCart(theCartItem: CartItem){

    // verificam daca avem obiect in cos
    let alreadyExistsInCart: boolean = false;
    let existingCartItem: CartItem = undefined;

    if( this.cartItems.length > 0 ) {
      // gasim obiectul in cos cu ajutorul id ului

      for ( let tempM of this.cartItems ){
        if( tempM.id == theCartItem.id)
          existingCartItem = tempM;
      }
    }
    // verificam daca l-am gasit

    alreadyExistsInCart = (existingCartItem != undefined);

    if(alreadyExistsInCart){
      existingCartItem.quantity++;
    }else{
      this.cartItems.push(theCartItem);
    }

    // compute cart total price and total quantity
    this.computeCartTotals();
  }

  computeCartTotals(){

    let totalPriceValue: number = 0;
    let totalQuantityValue: number = 0;

    for(let currentCartItem of this.cartItems){
      totalPriceValue +=currentCartItem.quantity * currentCartItem.price;
      totalQuantityValue += currentCartItem.quantity;
    }

    this.totalPrice.next(totalPriceValue);
    this.totalQuantity.next(totalQuantityValue);

    this.logCartData(totalPriceValue, totalQuantityValue);
  }

  logCartData(totalPriceValue: number, totalquantityValue: number){
    console.log('Continutul cosului')
    for (let  tempM of this.cartItems){
      const subTotalPrice = tempM.quantity * tempM.price;
      console.log(`name: ${tempM.name}, quantity=${tempM.quantity}, unitPrice=${tempM.price}, subTotalPrice=${subTotalPrice}`);
    }

    console.log(`totalPrice: ${totalPriceValue.toFixed(2)}, totalQuantity: ${totalquantityValue}`);
    console.log('----');
  }

  decrementQuantity(theCartItem: CartItem) {

    theCartItem.quantity--;

    if(theCartItem.quantity == 0){
      this.remove(theCartItem);
    }
    else{
      this.computeCartTotals();
    }
  }

  remove(theCartItem: CartItem) {

    // luam index ul elementului din array
    const itemIndex = this.cartItems.findIndex( tempCartItem => tempCartItem.id === theCartItem.id);
    // daca il gasim il stergem
    if(itemIndex > - 1){
      this.cartItems.splice(itemIndex,1);

      this.computeCartTotals();
    }
  }
}

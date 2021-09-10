import { Component, OnInit } from '@angular/core';
import {MealplanService} from "../../services/mealplan.service";
import {Mealplan} from "../../common/mealplan";
import {ActivatedRoute} from "@angular/router";
import {CartItem} from "../../common/cart-item";
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-mealplan-list',
  templateUrl: './mealplan-list-grid.component.html',
  styleUrls: ['./mealplan-list.component.css']
})
export class MealplanListComponent implements OnInit {

  mealplans: Mealplan[] =[];
  currentCategoryId: number = 1;
  previousCategoryId: number = 1;
  searchMode: boolean = false;

  thePageNumber: number = 1;
  thePageSize: number = 5;
  theTotalElements: number = 0;

  previousKeyword: string = null;


  constructor(private mealplanService: MealplanService,
              private cartService: CartService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(() => {
      this.listMealplans();
    });
  }

  listMealplans(){

    this.searchMode = this.route.snapshot.paramMap.has('keyword');

    if(this.searchMode){
      this.handleSearchMealplans();
    }
    else {
      this.handleListMealplans();
    }
  }

  handleSearchMealplans(){

      const theKeyword: string = this.route.snapshot.paramMap.get('keyword');

      if (this.previousKeyword != theKeyword ){
        this.thePageNumber = 1;
      }

      this.previousKeyword =  theKeyword;

      console.log(`keyword=${theKeyword}, thePageNumber=${this.thePageNumber}`);

      this.mealplanService.searchMealplanListPaginate(this.thePageNumber-1,
                                                              this.thePageSize,
                                                              theKeyword).subscribe(this.processResult());
  }

  handleListMealplans(){

    // verific daca id ul este valabil
    const hasCategoryId: boolean = this.route.snapshot.paramMap.has('id');

    if(hasCategoryId){
      // cast la number
      this.currentCategoryId= +this.route.snapshot.paramMap.get('id');
    }
    else{
      // nu are categorie deci default
      this.currentCategoryId=1;
    }

    // verificam daca avem o categorie diferita

    if( this.previousCategoryId != this.currentCategoryId) {
      this.thePageNumber = 1;
    }

    this.previousCategoryId = this.currentCategoryId;

    console.log(`currentCategoryId=${this.currentCategoryId}, thePageNumber=${this.thePageNumber}`);

    this.mealplanService.getMealplanListPaginate(  this.thePageNumber-1,
                                                           this.thePageSize,
                                                           this.currentCategoryId).subscribe(this.processResult());
  }

  processResult(){
    return data => {
      this.mealplans = data._embedded.mealplans;
      this.thePageNumber = data.page.number+1;
      this.thePageSize = data.page.size;
      this.theTotalElements = data.page.totalElements;
    };
  }

  updatePageSize(pageSize: number){
    this.thePageSize = pageSize;
    this.thePageNumber = 1;
    this.listMealplans();
  }

  addToCart(theMealplan: Mealplan){

    console.log(`Adding to cart: ${theMealplan.name}, ${theMealplan.price}`);

    const theCartItem = new CartItem(theMealplan);

    this.cartService.addToCart(theCartItem);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {Observable} from "rxjs";
import {Mealplan} from "../common/mealplan";
import {map} from "rxjs/operators";
import {MealplanCategory} from "../common/mealplan-category";

@Injectable({
  providedIn: 'root'
})
export class MealplanService {

  private baseUrl = 'http://localhost:8080/api/mealplans';

  private categoryUrl = 'http://localhost:8080/api/meal-category';
  constructor(private httpClient: HttpClient) { }

  getMealplanList(theCategoryId: number): Observable<Mealplan[]>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`;

    return this.getMealplans(searchUrl);
  }

  getMealplanListPaginate(thePage:number,
                        thePageSize: number,
                        theCategoryId: number): Observable<GetResponseMealplan>{

    const searchUrl = `${this.baseUrl}/search/findByCategoryId?id=${theCategoryId}`
                        + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseMealplan>(searchUrl);
  }

  searchMealplans(theKeyword: string): Observable<Mealplan[]> {

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`;
    return this.getMealplans(searchUrl);
  }

  searchMealplanListPaginate(thePage:number,
                          thePageSize: number,
                          theKeyword: string): Observable<GetResponseMealplan>{

    const searchUrl = `${this.baseUrl}/search/findByNameContaining?name=${theKeyword}`
      + `&page=${thePage}&size=${thePageSize}`;

    return this.httpClient.get<GetResponseMealplan>(searchUrl);
  }

  private getMealplans(searchUrl: string) {
    return this.httpClient.get<GetResponseMealplan>(searchUrl).pipe(
      map(response => response._embedded.mealplans)
    );
  }

  getMealplanCategories(): Observable<MealplanCategory[]> {

    return this.httpClient.get<GetResponseMealplanCategory>(this.categoryUrl).pipe(
      map(response => response._embedded.mealCategory)
    );
  }

  getMealplan(theMealplanId: number): Observable<Mealplan> {

    // need to build URL based on mealplan id
    const mealplanUrl = `${this.baseUrl}/${theMealplanId}`;

    return this.httpClient.get<Mealplan>(mealplanUrl);
  }
}

interface GetResponseMealplan{

  _embedded: {
    mealplans: Mealplan[];
  },
  page: {
    size: number;
    totalElements: number;
    totalPages: number;
    number: number;
  }
}

interface GetResponseMealplanCategory{

  _embedded: {
    mealCategory: MealplanCategory[];
  }
}

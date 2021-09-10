import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MealplanListComponent } from './components/mealplan-list/mealplan-list.component';
import { HttpClientModule } from "@angular/common/http";
import {MealplanService} from "./services/mealplan.service";
import {Routes, RouterModule, Router} from "@angular/router";
import { MealplanCategoryMenuComponent } from './components/mealplan-category-menu/mealplan-category-menu.component';
import { SearchComponent } from './components/search/search.component';
import { MealplanDetailsComponent } from './components/mealplan-details/mealplan-details.component';

import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import { CartStatusComponent } from './components/cart-status/cart-status.component';
import { CartDetailsComponent } from './components/cart-details/cart-details.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import {ReactiveFormsModule} from "@angular/forms";
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';

import {
  OKTA_CONFIG, OktaAuthGuard,
  OktaAuthModule,
  OktaCallbackComponent
} from '@okta/okta-angular';

import  myAppConfig from './config/my-app-config';
import { MembersPageComponent } from './components/members-page/members-page.component';

const oktaConfig = Object.assign({
  onAuthRequired: (oktaAuth, injector) =>{
    const router = injector.get(Router);

    router.navigate(['/login']);
  }
}, myAppConfig.oidc);

const routes: Routes = [
  {path: 'members', component: MembersPageComponent, canActivate: [ OktaAuthGuard ]},

  {path: 'login/callback', component: OktaCallbackComponent},
  {path: 'login', component: LoginComponent},


  {path: 'checkout', component: CheckoutComponent},
  {path: 'cart-details', component: CartDetailsComponent},
  {path: 'mealplans/:id', component: MealplanDetailsComponent},
  {path: 'search/:keyword', component: MealplanListComponent},
  {path: 'category/:id', component: MealplanListComponent},
  {path: 'category', component: MealplanListComponent},
  {path: 'meals', component: MealplanListComponent},
  {path: '', redirectTo: '/meals', pathMatch: 'full'},
  {path: '**', redirectTo: '/meals', pathMatch: 'full'}

];
@NgModule({
  declarations: [
    AppComponent,
    MealplanListComponent,
    MealplanCategoryMenuComponent,
    SearchComponent,
    MealplanDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
    LoginComponent,
    LoginStatusComponent,
    MembersPageComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    OktaAuthModule

  ],
  providers: [MealplanService, {provide: OKTA_CONFIG, useValue: oktaConfig}],
  bootstrap: [AppComponent]
})
export class AppModule { }

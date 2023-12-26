import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeedbackComponent } from './feedback/feedback.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReviewComponent } from './review/review.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'home-page',
    component: HomeComponent
  },
  {
    path:'search/:searchItem',
    component: HomeComponent
  },
  {
    path:'tag/:tag',
    component: HomeComponent
  },
  {
    path:'food/:id',
    component: FoodpageComponent
  },
  {
    path:'cart-page',
    component: CartPageComponent
  },
  {
    path: 'checkout-page',
    component: CheckoutComponent
  },
  {
    path: 'feedback-page',
    component: FeedbackComponent
  },
  {
    path: 'about-page',
    component: AboutPageComponent
  },
  {
    path:'review-page',
    component: ReviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

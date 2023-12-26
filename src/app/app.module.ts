import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { TagsComponent } from './tags/tags.component';
import { CartPageComponent } from './cart-page/cart-page.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { FeedbackComponent } from './feedback/feedback.component';
// import { RatingModule } from 'ng-starrating';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutPageComponent } from './about-page/about-page.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagsComponent,
    CartPageComponent,
    FoodpageComponent,
    CheckoutComponent,
    FeedbackComponent,
    AboutPageComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    // RatingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

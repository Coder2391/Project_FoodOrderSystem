import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { cartItem } from '../shared/Models/cartItem';
import { cart } from '../shared/Models/cart';
import { FoodService } from '../services/food/food.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {
  cart!: cart;
  constructor(private cartService: CartService, private router: Router){
    //  private foodService: FoodService) {
    // let foods = foodService.getall();
    // cartService.addToCart(foods[1]);
    // cartService.addToCart(foods[3]);
    // cartService.addToCart(foods[5]);
    this.setCart();
  }
  ngOnInit(): void {
  }
  setCart(){
    this.cart = this.cartService.getCart();
  }
  removeFromCart(cartItem: cartItem){
    this.cartService.removeFromCart(cartItem.food.id);
    this.setCart();  //instance load data
  }
  changeQuantity(cartItem: cartItem, quantityInString: string){
    const quantity = parseInt(quantityInString);
    this.cartService.changeQuantity(cartItem.food.id, quantity);
    this.setCart();
  }

  check(){
    this.router.navigateByUrl('/checkout-page');
  }
}

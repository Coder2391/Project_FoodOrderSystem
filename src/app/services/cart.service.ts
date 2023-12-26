import { Injectable } from '@angular/core';
import { cart } from '../shared/Models/cart';
import { cartItem } from '../shared/Models/cartItem'
import { Foods } from '../shared/Models/food';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:cart = new cart();
  addToCart(food:Foods):void{
    let cartItems = this.cart.items.find(item => item.food.id === food.id)
    if(cartItems){
      this.changeQuantity(food.id, cartItems.quantity +1)
      return;
    }
    this.cart.items.push(new cartItem(food));
  }

  removeFromCart(foodId:number):void{
    this.cart.items = this.cart.items.filter(item => item.food.id != foodId)
  }

  changeQuantity(quantity: number, foodId: number){
    let cartItem = this.cart.items.find(item => item.food.id === foodId)
    if(!cartItem){
      return;
    }
    cartItem.quantity = quantity;
  }

  getCart():cart{
    return this.cart;
  }
}

import { Component,OnInit } from '@angular/core';
import { Foods } from '../shared/Models/food';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FoodService } from '../services/food/food.service';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-foodpage',
  templateUrl: './foodpage.component.html',
  styleUrls: ['./foodpage.component.css']
})
export class FoodpageComponent implements OnInit{
  food !: Foods;
  constructor(private activatedRoute:ActivatedRoute, private foodServices:FoodService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params)=>{
      if(params['id'])
      {
        this.food = foodServices.getFoodById(params['id'])
      }
    })
  }

  ngOnInit(): void {
  }
  addToCart(){
    this.cartService.addToCart(this.food);
    this.router.navigateByUrl('/cart-page')
  }

}

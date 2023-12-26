import { Injectable } from '@angular/core';
import { Tag } from 'src/app/shared/Models/Tag';
import { Foods } from 'src/app/shared/Models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {
  constructor() { }
  getFoodById(id: number):Foods{
    return this.getall().find(food => food.id == id)!;
  }
  getAllFoodByTag(tag: string): Foods[]{
    // if(tag == 'All')
    // return this.getall()
    // else
    // return this.getall().filter(food => food.tags?.includes(tag))
    return tag == "All"? this.getall(): this.getall().filter(food => food.tags?.includes(tag));
  }
  getAllTag(): Tag[] {
    return [
      { name: 'All', count: 8},
      { name: 'Lunch', count: 6},
      { name: 'Dinner', count: 4},
      { name: 'Fastfood', count: 4},
      { name: 'Snacks', count: 4},
      { name: 'Healthyfood', count: 1}
    ]
  }
  getall():Foods[]{
    return [
      {
        id: 1,
        name:'Noodles',
        cookTime:'20-30',
        price:15,
        favourite:true,
        origins:['China','India'],
        star:4.5,
        imageUrl:'/assets/food1.jpg',
        tags:['Fastfood','Lunch','Snacks'],
      },
      {
        id: 2,
        name:'Pancakes',
        cookTime:'30-35',
        price:20,
        favourite:false,
        origins:['Greece','US'],
        star:4.6,
        imageUrl:'/assets/food2.jpg',
        tags:['Lunch','Snacks'],
      },
      {
        id: 3,
        name:'Pasta',
        cookTime:'20-25',
        price:25,
        favourite:false,
        origins:['China','Italy'],
        star:4,
        imageUrl:'/assets/food3.jpg',
        tags:['Fastfood','Lunch','Snacks','Dinner'],
      },
      {
        id: 4,
        name:'Pizza',
        cookTime:'30-40',
        price:30,
        favourite:true,
        origins:['Italy','US'],
        star:4.3,
        imageUrl:'/assets/food4.jpeg',
        tags:['Dinner','Lunch',],
      },
      {
        id: 5,
        name:'French fries',
        cookTime:'10-15',
        price:10,
        favourite:false,
        origins:['India'],
        star:5,
        imageUrl:'/assets/food5.jpg',
        tags:['Fastfood','Snacks'],
      },
      {
        id: 6,
        name:'Salad',
        cookTime:'10-20',
        price:15,
        favourite:true,
        origins:['India','US'],
        star:4.5,
        imageUrl:'/assets/food6.jpg',
        tags:['Healthyfood','Lunch','Dinner'],
      },
      {
        id: 7,
        name:'Frankie',
        cookTime:'20-25',
        price:20,
        favourite:false,
        origins:['Mumbai','Canada'],
        star:3.5,
        imageUrl:'/assets/food7.jpg',
        tags:['Fastfood',],
      },
      {
        id: 8,
        name:'Paneer tikka',
        cookTime:'25-30',
        price:30,
        favourite:false,
        origins:['India'],
        star:4.1,
        imageUrl:'/assets/food8.jpg',
        tags:['Dinner','Lunch',],
      }
    ]
  }
}


import { Foods } from "./food";

export class cartItem{
    constructor(food:Foods){
        this.food = food;

        // this.getPrice()
        this.price;
    }

    food: Foods;
    quantity:number =1;

    // getPrice(): Number{
    //     return this.food.price * this.quantity;
    // }
    get price(): number{
        return this.food.price * this.quantity;
    }
}
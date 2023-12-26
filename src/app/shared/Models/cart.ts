import { cartItem } from "./cartItem";

export class cart{
    items: cartItem[] = [];

    get totalPrice():number{
        let totalPrice = 0;
        this.items.forEach(item => {
            totalPrice += item.price;
        });
        return totalPrice;

    }
}
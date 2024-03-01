
// TODO Task 2
// Use the following class to implement your store

import { Injectable } from "@angular/core";
import { LineItem } from "./models";

@Injectable()
export class CartStore {

    private cart: LineItem[] = [];

    addToCart(item: LineItem): void {
        this.cart.push(item)
    }

    getCart(): LineItem[] {
        return this.cart;
    }

    clearCart(): void {
        this.cart = [];
    }

    getCartItemCount(): number {
        return this.cart.length;
    }

}

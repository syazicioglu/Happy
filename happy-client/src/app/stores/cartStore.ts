import { makeAutoObservable } from "mobx";
import agent from "../api/agent";
import { Cart } from "../models/cart";

export default class CartStore {
    cart: Cart | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    loadCart = async () => {
        try {
            const cart = await agent.Carts.get();
            this.cart = cart;
        } catch (error) {
            console.error("Error loading cart:", error);
        }
    };

    updateCart = async (productId: string, quantity: number) => {
        try {
            await agent.Carts.update(productId, quantity);

            const existingItem = this.cart?.items.find((item) => item.productId === productId);

            if (existingItem) {
                existingItem.quantity += quantity;
                if (existingItem.quantity <= 0) {
                    this.cart!.items = this.cart!.items.filter((item) => item.productId !== productId);
                }
            } else {
                // Yeni bir ürün ekleniyorsa, backend'den ürünü al
                const product = await agent.Products.details(productId); // Backend'den ürün bilgilerini al
                this.cart?.items.push({
                    productId: product.id,
                    productName: product.name,
                    quantity,
                    price: product.price,
                });
            }
        } catch (error) {
            console.error("Error updating cart:", error);
        }
    };
}

export interface Cart {
    id: string;
    items: CartItem[];
}

export interface CartItem {
    productId: string;
    productName: string;
    quantity: number;
    price: number;
}
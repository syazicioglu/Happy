import { makeAutoObservable } from "mobx";
import { Product } from "../models/product";
import agent from "../api/agent";

export default class ProductStore {
    products: Product[] = [];


    constructor() {
        makeAutoObservable(this)
    }

    loadProducts = async () => {
        try {
            const products = await agent.Products.list();
            products.forEach(product => {
                this.products.push(product);
            })
        } catch (error) {
            console.log(error);
        }
    }
}
import { createContext, useContext } from "react";
import ProductStore from "./productStore";
import UserStore from "./userStore";
import CommonStore from "./commonStore";
import CartStore from "./cartStore";

interface Store {
    productStore: ProductStore;
    commonStore: CommonStore;
    userStore: UserStore;
    cartStore: CartStore;
}

export const store: Store = {
    productStore: new ProductStore(),
    commonStore: new CommonStore(),
    userStore: new UserStore(),
    cartStore: new CartStore(),
}

export const StoreContext= createContext(store);

export function useStore() {
    return useContext(StoreContext);
}
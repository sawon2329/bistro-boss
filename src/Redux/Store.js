import { configureStore } from "@reduxjs/toolkit";
import CartManage from "./Cart";

 const Store = configureStore({
    reducer:{
        cart: CartManage
    }
 })


 export default Store;


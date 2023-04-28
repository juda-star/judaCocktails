import {configureStore }from "@reduxjs/toolkit";
import CocktailReducer from "./feature/cocktailSlice";
import userReducer from "./feature/userSlice";
export default configureStore({
    reducer:{
        app:CocktailReducer,
        user:userReducer,
    },
});
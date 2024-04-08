import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {userAPI} from "./action/userService";
import userSlice from "./reducer/userSlice";
import {productAPI} from "./action/productService";
import {orderAPI} from "./action/orderService";
import {feedbackAPI} from "./action/feedbackService";
import {recipeAPI} from "./action/recipteService";



const rootReducer = combineReducers({
    user: userSlice,
    [userAPI.reducerPath]: userAPI.reducer,
    [productAPI.reducerPath]: productAPI.reducer,
    [orderAPI.reducerPath]: orderAPI.reducer,
    [feedbackAPI.reducerPath]: feedbackAPI.reducer,
    [recipeAPI.reducerPath]: recipeAPI.reducer,
})


export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) => (
            getDefaultMiddleware().concat(userAPI.middleware, productAPI.middleware, orderAPI.middleware, feedbackAPI.middleware, recipeAPI.middleware)
        )

    })
}


import { configureStore } from '@reduxjs/toolkit';
import orderReducer from "./services/orderReducer";

export const store = configureStore({
  reducer: {
    order: orderReducer,
},
})
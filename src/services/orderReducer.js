import { createSlice } from "@reduxjs/toolkit";

const initialState = {};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    updateOrders: (state, action) => {
        console.log(action.payload);
      return action.payload;
    },
    updateOrderStatus: (state, action) => {
      const newOrderDetails = state.orderDetails.map((od,i) => {
        if (i === action.payload.idx) {
          return action.payload.data;
        } else {
          return od;
        }
      })
      return{
        ...state,
        orderDetails:newOrderDetails
      }
    },
    updateOrderPrice: (state, action) => {
        const data = action.payload;
        console.log(data);
        return state;
    },
    updateOrderQuantity: (state, action) => {
        const data = action.payload;
        console.log(data);
        return state;
    }
  },
});

export const { updateOrders, updateOrderStatus, updateOrderPrice, updateOrderQuantity } = orderSlice.actions;
export default orderSlice.reducer;
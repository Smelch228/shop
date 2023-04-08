import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    cartData: [],
    firstName: null,
    lastName: null,
    shippingAddress: null,
    phoneNumber: null,
    userEmail: null,
    userId: null,
};

const orderSlice = createSlice({
    name: "order",
    initialState: initialState,
    reducers: {
        setUserOrderData: (state, action) => {
            let tmp = [...action.payload.cart];
            for (let i = 0; i < tmp.length; ++i) {
                state.cartData.push({
                    productId: tmp[i].id,
                    name: tmp[i].name,
                    price: tmp[i].price,
                    quantity: tmp[i].quantity,
                });
            }
            state.userEmail = action.payload.email;
            state.userId = action.payload.id;
        },
        setOrderRequest: (state, action) => {
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phoneNumber = action.payload.phoneNumber;
            state.shippingAddress = `State: ${action.payload.state}; City: ${action.payload.city}; Address: ${action.payload.address}; Zip: ${action.payload.zip};`;
        },
        clearOrderRequest: (state) => {
            state.cartData = [];
            state.firstName = null;
            state.lastName = null;
            state.shippingAddress = null;
            state.phoneNumber = null;
        },
    },
});

export const { setOrderRequest, clearOrderRequest, setUserOrderData } =
    orderSlice.actions;

export default orderSlice.reducer;

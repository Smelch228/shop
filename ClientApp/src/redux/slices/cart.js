import { createSlice } from "@reduxjs/toolkit";

const getTotal = (cart) => {
    let total = 0.0;
    cart.forEach((element) => {
        total += element.price * element.quantity;
    });

    return total;
};

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cart: [],
        total: 0.0,
    },
    reducers: {
        addToCart: (state, action) => {
            const itemInCart = state.cart.find(
                (item) => item.id === action.payload.id
            );
            if (itemInCart) {
                itemInCart.quantity++;
                state.total = getTotal(state.cart);
            } else {
                state.cart.push({ ...action.payload, quantity: 1 });
                state.total = getTotal(state.cart);
            }
        },
        incrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            item.quantity++;
            state.total = getTotal(state.cart);
        },
        decrementQuantity: (state, action) => {
            const item = state.cart.find((item) => item.id === action.payload);
            if (item.quantity === 1) {
                item.quantity = 1;
            } else {
                item.quantity--;
                state.total = getTotal(state.cart);
            }
        },
        removeItem: (state, action) => {
            const removeItem = state.cart.filter(
                (item) => item.id !== action.payload
            );
            state.cart = removeItem;
            state.total = getTotal(state.cart);
        },
        clearCart: (state) => {
            state.cart = [];
            state.total = 0.0;
        },
    },
});

export const {
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItem,
    clearCart,
} = cartSlice.actions;

export default cartSlice.reducer;

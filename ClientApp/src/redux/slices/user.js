import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isAuth: false,
    token: null,
    id: null,
    role: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.isAuth = true;
            state.token = action.payload.token;
            state.id = action.payload.id;
            state.role = action.payload.role;
        },

        logoutSuccess: (state) => {
            state.isAuth = false;
            state.token = null;
            state.id = null;
            state.role = null;
            localStorage.removeItem("token");
        },
    },
});

export const { loginSuccess, logoutSuccess } = userSlice.actions;

export default userSlice.reducer;

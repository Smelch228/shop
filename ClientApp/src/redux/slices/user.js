import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { userRegister, userLogin, getProfile } from "./actions/authActions";
import jwt_decode from "jwt-decode";

let token = localStorage.getItem("token");
let id = null,
    role = null,
    isAuth = false,
    email = null;

if (token !== null) {
    const decoded = jwt_decode(token);
    id = parseInt(decoded.id);
    role = JSON.parse(decoded.role.toLowerCase());
    isAuth = true;
    email = decoded.email;
}

const initialState = {
    isAuth: isAuth,
    token: token,
    id: id,
    role: role,
    email: email,
    firstName: null,
    lastName: null,
    phone: null,
    address: "Kishington",
    loading: false,
    error: null,
    success: false,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialState,
    reducers: {
        logout: (state) => {
            localStorage.removeItem("token");
            state.isAuth = false;
            state.token = null;
            state.id = null;
            state.role = null;
            state.loading = false;
            state.error = null;
        },
    },
    extraReducers: {
        //get profile
        [getProfile.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        [getProfile.fulfilled]: (state, action) => {
            state.loading = false;
            state.success = true;
            state.email = action.payload.email;
            state.firstName = action.payload.firstName;
            state.lastName = action.payload.lastName;
            state.phone = action.payload.phoneNumber;
        },
        [getProfile.rejected]: (state, action) => {
            state.loading = false;
            console.log(action);
            state.error = action.payload;
        },
        //user login
        [userLogin.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        [userLogin.fulfilled]: (state, action) => {
            state.loading = false;
            state.isAuth = true;
            state.token = action.payload;
            const decoded = jwt_decode(state.token);
            state.id = parseInt(decoded.id);
            state.role = JSON.parse(decoded.role.toLowerCase());
            state.success = true;
        },
        [userLogin.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
        //user register
        [userRegister.pending]: (state) => {
            state.loading = true;
            state.error = null;
            state.success = false;
        },
        [userRegister.fulfilled]: (state) => {
            state.loading = false;
            state.success = true;
        },
        [userRegister.rejected]: (state, { payload }) => {
            state.loading = false;
            state.error = payload;
        },
    },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;

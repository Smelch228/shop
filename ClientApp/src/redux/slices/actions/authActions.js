import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import jwtDecode from "jwt-decode";

export const getProfile = createAsyncThunk(
    "user/profile",
    async (args, { rejectWithValue }) => {
        try {
            const token = localStorage.getItem("token");
            const decoded = jwtDecode(token);
            const { data } = await axios.get(`api/users/${decoded.id}`, {
                headers: { Authorization: `Bearer ${token}` },
            });
            console.log(data);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                console.log(error);
                return rejectWithValue(error.response.data.message);
            } else {
                console.log(error);
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userRegister = createAsyncThunk(
    "user/register",
    async (user, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            await axios.post("api/users/register", user, config);
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

export const userLogin = createAsyncThunk(
    "user/login",
    async (user, { rejectWithValue }) => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const { data } = await axios.post("api/users/login", user, config);
            localStorage.setItem("token", data);
            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

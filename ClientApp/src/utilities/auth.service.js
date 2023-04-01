import axios from "axios";
import jwt_decode from "jwt-decode";

const register = (user) => {
    return axios
        .post("api/users/register", user)
        .then((response) => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error(error);
        });
};

const login = (user) => {
    return axios
        .post("api/users/login", user)
        .then((response) => {
            console.log(response.data);
            localStorage.setItem("token", response.data);
            return response.data;
        })
        .catch((error) => {
            console.error(error);
        });
};

const logout = () => {
    localStorage.removeItem("token");
};

const authService = {
    register,
    login,
    logout,
};

export default authService;

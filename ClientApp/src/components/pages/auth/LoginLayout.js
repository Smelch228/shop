import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    MDBContainer,
    MDBCol,
    MDBRow,
    MDBBtn,
    MDBIcon,
    MDBInput,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";
import axios from "axios";
import authService from "../../../utilities/auth.service";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/slices/user";

function Login() {
    let decoded;

    const [redirect, setRedirect] = useState(false);
    const [user, setUser] = useState({
        email: "",
        password: "",
    });

    const dispatch = useDispatch();

    async function sendUserData() {
        const response = await authService.login(user);
        decoded = jwt_decode(response);
        console.log(decoded);
        dispatch(
            loginSuccess({
                token: response,
                id: decoded.id,
                role: decoded.role,
            })
        );
        setRedirect(true);
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        sendUserData();
    };

    return (
        <form onSubmit={handleSubmit}>
            <MDBContainer
                fluid
                className="p-3 my-5 d-flex d-flex justify-content-center align-items-center"
                styles={{}}
            >
                <MDBRow>
                    <MDBCol col="10" md="6">
                        <img
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            class="img-fluid"
                            alt="Phone image"
                        />
                    </MDBCol>

                    <MDBCol col="4" md="6">
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Email address"
                            id="emailLogin"
                            type="email"
                            size="lg"
                            name="email"
                            value={user.email}
                            onChange={handleInput}
                        />
                        <MDBInput
                            wrapperClass="mb-4"
                            label="Password"
                            id="passwordLogin"
                            type="password"
                            size="lg"
                            name="password"
                            value={user.password}
                            onChange={handleInput}
                        />

                        <div className="d-flex justify-content-between mx-4 mb-4">
                            <MDBCheckbox
                                name="flexCheck"
                                value=""
                                id="flexCheckLogin"
                                label="Remember me"
                            />
                            <a href="!#">Forgot password?</a>
                        </div>

                        <MDBBtn className="mb-4 w-100" size="lg" type="submit">
                            Sign in
                        </MDBBtn>

                        <Link to="/register">
                            <MDBBtn
                                className="mb-4 w-100"
                                outline
                                size="lg"
                                type="button"
                            >
                                Register
                            </MDBBtn>
                        </Link>
                    </MDBCol>
                </MDBRow>

                {redirect && <Navigate replace={true} to="/" />}
            </MDBContainer>
        </form>
    );
}

export default Login;

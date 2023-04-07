import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox,
} from "mdb-react-ui-kit";
import { useDispatch, useSelector } from "react-redux";
import { userRegister } from "../../../redux/slices/actions/authActions";

function Register() {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    });

    const { error } = useSelector((state) => state.user);
    const [redirect, setRedirect] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(userRegister(user));
        if (error === null) {
            setRedirect(true);
        }
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    return (
        <MDBContainer
            fluid
            className="d-flex justify-content-center align-items-center"
        >
            {redirect && <Navigate replace to="/login"></Navigate>}
            <form onSubmit={handleSubmit}>
                <MDBRow>
                    <MDBCol
                        col="10"
                        md="6"
                        className="order-2 order-lg-1 d-flex flex-column align-items-center"
                    >
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                            Sign up
                        </p>

                        {error && <p>*{error}</p>}

                        <div className="d-flex flex-row align-items-center mb-4 ">
                            <MDBIcon fas icon="user me-3" size="lg" />
                            <MDBInput
                                label="Your First Name"
                                id="form1"
                                type="text"
                                className="w-100"
                                name="firstName"
                                value={user.firstName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4 ">
                            <MDBIcon fas icon="user me-3" size="lg" />
                            <MDBInput
                                label="Your Last Name"
                                id="form2"
                                type="text"
                                className="w-100"
                                name="lastName"
                                value={user.lastName}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <MDBIcon fas icon="envelope me-3" size="lg" />
                            <MDBInput
                                label="Your Email"
                                id="form3"
                                type="email"
                                name="email"
                                value={user.email}
                                onChange={handleInput}
                            />
                        </div>

                        <div className="d-flex flex-row align-items-center mb-4">
                            <MDBIcon fas icon="lock me-3" size="lg" />
                            <MDBInput
                                label="Password"
                                id="form4"
                                type="password"
                                name="password"
                                value={user.password}
                                onChange={handleInput}
                            />
                        </div>

                        <MDBBtn className="mb-4" size="lg" type="submit">
                            Register
                        </MDBBtn>
                    </MDBCol>

                    <MDBCol
                        md="10"
                        lg="6"
                        className="order-1 order-lg-2 d-flex align-items-center"
                    >
                        <MDBCardImage
                            src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                            fluid
                        />
                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
}

export default Register;

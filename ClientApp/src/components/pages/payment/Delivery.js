import React from "react";
import {
    MDBBtn,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setUserOrderData, setOrderRequest } from "../../../redux/slices/order";
import { useState } from "react";

export default function DeliveryForm() {
    const { cart } = useSelector((state) => state.cart);
    const { isAuth, email, id } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber: "",
        address: "",
        state: "",
        city: "",
        zip: "",
    });

    const handleInput = (e) => {
        const { name, value } = e.target;
        setForm({ ...form, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(setOrderRequest(form));
        navigate("/payment");
    };

    useEffect(() => {
        dispatch(setUserOrderData({ cart, email, id }));
    }, []);

    if (cart.length !== 0 && isAuth) {
        return (
            <MDBContainer className="py-5" style={{ maxWidth: "1100px" }}>
                <MDBRow className="justify-content-center align-items-center">
                    <MDBCol>
                        <MDBCard className="my-4 shadow-3">
                            <MDBRow className="g-0">
                                <MDBCol md="6" className="d-xl-block bg-image">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Others/extended-example/delivery.webp"
                                        alt="Sample photo"
                                        fluid
                                    />
                                    <div
                                        className="mask"
                                        style={{
                                            backgroundColor:
                                                "rgba(0, 0, 0, 0.6)",
                                        }}
                                    >
                                        <div className="justify-content-center align-items-center h-100">
                                            <div
                                                className="text-center"
                                                style={{ marginTop: "220px" }}
                                            >
                                                <MDBIcon
                                                    fas
                                                    icon="truck text-white"
                                                    size="3x"
                                                />
                                                <p className="text-white title-style">
                                                    Lorem ipsum delivery
                                                </p>
                                                <p className="text-white mb-0"></p>

                                                <figure className="text-center mb-0">
                                                    <blockquote className="blockquote text-white">
                                                        <p className="pb-3">
                                                            <MDBIcon
                                                                fas
                                                                icon="quote-left text-primary"
                                                                size="xs"
                                                                style={{
                                                                    color: "hsl(210, 100%, 50%)",
                                                                }}
                                                            />
                                                            <span className="lead font-italic">
                                                                Everything at
                                                                your doorstep.
                                                            </span>
                                                            <MDBIcon
                                                                fas
                                                                icon="quote-right text-primary"
                                                                size="xs"
                                                                style={{
                                                                    color: "hsl(210, 100%, 50%)",
                                                                }}
                                                            />
                                                        </p>
                                                    </blockquote>
                                                </figure>
                                            </div>
                                        </div>
                                    </div>
                                </MDBCol>
                                <MDBCol md="6">
                                    <MDBCardBody className="p-md-5 text-black">
                                        <MDBTypography
                                            tag="h3"
                                            className="mb-4 text-uppercase"
                                        >
                                            Delivery Info
                                        </MDBTypography>

                                        <form onSubmit={handleSubmit}>
                                            <MDBRow>
                                                <MDBCol md="6" className="mb-4">
                                                    <MDBInput
                                                        label="First name"
                                                        type="text"
                                                        size="lg"
                                                        name="firstName"
                                                        value={form.firstName}
                                                        onChange={handleInput}
                                                    />
                                                </MDBCol>
                                                <MDBCol md="6" className="mb-4">
                                                    <MDBInput
                                                        label="Last name"
                                                        type="text"
                                                        size="lg"
                                                        name="lastName"
                                                        value={form.lastName}
                                                        onChange={handleInput}
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBInput
                                                label="Address"
                                                type="text"
                                                className="mb-4"
                                                size="lg"
                                                name="address"
                                                value={form.address}
                                                onChange={handleInput}
                                            />

                                            <MDBRow>
                                                <MDBCol md="6" className="mb-4">
                                                    <MDBInput
                                                        label="State"
                                                        type="text"
                                                        size="lg"
                                                        name="state"
                                                        value={form.state}
                                                        onChange={handleInput}
                                                    />
                                                </MDBCol>
                                                <MDBCol md="6" className="mb-4">
                                                    <MDBInput
                                                        label="City"
                                                        type="text"
                                                        size="lg"
                                                        name="city"
                                                        value={form.city}
                                                        onChange={handleInput}
                                                    />
                                                </MDBCol>
                                            </MDBRow>

                                            <MDBInput
                                                label="Zip"
                                                type="text"
                                                className="mb-4"
                                                size="lg"
                                                name="zip"
                                                value={form.zip}
                                                onChange={handleInput}
                                            />

                                            <MDBInput
                                                label="Phone"
                                                type="text"
                                                className="mb-4"
                                                size="lg"
                                                name="phoneNumber"
                                                value={form.phoneNumber}
                                                onChange={handleInput}
                                            />

                                            <div className="d-flex justify-content-end pt-3">
                                                <Link to="/shopping-cart">
                                                    <MDBBtn
                                                        size="lg"
                                                        className="ms-2"
                                                        outline
                                                    >
                                                        Back to cart
                                                    </MDBBtn>
                                                </Link>

                                                <MDBBtn
                                                    size="lg"
                                                    className="ms-2"
                                                    style={{
                                                        backgroundColor:
                                                            "hsl(210, 100%, 50%)",
                                                    }}
                                                    type="submit"
                                                >
                                                    Next step
                                                </MDBBtn>
                                            </div>
                                        </form>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        );
    } else {
        return (
            <>
                <Navigate to="/login" replace={true} />
            </>
        );
    }
}

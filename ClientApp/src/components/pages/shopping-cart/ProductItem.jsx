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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    incrementQuantity,
    decrementQuantity,
    removeItem,
} from "../../../redux/slices/cart";
import setCategory from "../../../utilities/categories";
import { useEffect } from "react";

export const ProductItem = () => {
    const dispatch = useDispatch();
    const { cart } = useSelector((state) => state.cart);

    useEffect(() => {});

    return (
        <>
            {cart &&
                cart.map((item) => {
                    return (
                        <MDBCard className="rounded-3 mb-4" key={item.id}>
                            <MDBCardBody className="p-4">
                                <MDBRow className="justify-content-between align-items-center">
                                    <MDBCol md="2" lg="2" xl="2">
                                        <MDBCardImage
                                            className="rounded-3"
                                            fluid
                                            src={item.image}
                                            alt={`${item.name} card image`}
                                            style={{
                                                minHeight: "150px",
                                                maxHeight: "150px",
                                            }}
                                        />
                                    </MDBCol>
                                    <MDBCol md="3" lg="3" xl="3">
                                        <p className="lead fw-normal mb-2">
                                            {item.name}
                                        </p>
                                        <p>
                                            <span className="text-muted">
                                                Category:
                                                {" " +
                                                    setCategory(item.category)}
                                            </span>
                                        </p>
                                    </MDBCol>
                                    <MDBCol
                                        md="3"
                                        lg="3"
                                        xl="2"
                                        className="d-flex align-items-center justify-content-around"
                                    >
                                        <MDBBtn
                                            color="link"
                                            className="px-2"
                                            onClick={() => {
                                                dispatch(
                                                    decrementQuantity(item.id)
                                                );
                                            }}
                                        >
                                            <MDBIcon fas icon="minus" />
                                        </MDBBtn>

                                        <MDBCard>
                                            <MDBCardBody
                                                style={{ height: 1 }}
                                                className="d-flex justify-content-center align-items-center"
                                            >
                                                {item.quantity}
                                            </MDBCardBody>
                                        </MDBCard>

                                        <MDBBtn
                                            color="link"
                                            className="px-2"
                                            onClick={() => {
                                                dispatch(
                                                    incrementQuantity(item.id)
                                                );
                                            }}
                                        >
                                            <MDBIcon fas icon="plus" />
                                        </MDBBtn>
                                    </MDBCol>
                                    <MDBCol
                                        md="3"
                                        lg="2"
                                        xl="2"
                                        className="offset-lg-1"
                                    >
                                        <MDBTypography
                                            tag="h5"
                                            className="mb-0"
                                        >
                                            {`$${parseFloat(item.price).toFixed(
                                                2
                                            )}`}
                                        </MDBTypography>
                                    </MDBCol>
                                    <MDBCol
                                        md="1"
                                        lg="1"
                                        xl="1"
                                        className="text-end"
                                    >
                                        <MDBBtn
                                            color="link"
                                            className=""
                                            onClick={() => {
                                                dispatch(removeItem(item.id));
                                            }}
                                        >
                                            <MDBIcon
                                                fas
                                                icon="trash text-danger"
                                                size="lg"
                                            />
                                        </MDBBtn>
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    );
                })}
        </>
    );
};

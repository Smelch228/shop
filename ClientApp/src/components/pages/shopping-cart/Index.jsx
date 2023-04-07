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
import { ProductItem } from "./ProductItem";
import { useSelector } from "react-redux";

export default function ProductCards() {
    const { total } = useSelector((state) => state.cart);

    return (
        <section className="h-100">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol md="10">
                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <MDBTypography
                                tag="h3"
                                className="fw-normal mb-0 text-black"
                            >
                                Shopping Cart
                            </MDBTypography>
                        </div>

                        <ProductItem />

                        <MDBCard>
                            <MDBCardBody>
                                <MDBCardBody className="p-4 d-flex flex-row justify-content-between align-items-center">
                                    <h3 className="fw-bold">Total:</h3>
                                    <h3>{`$${parseFloat(total).toFixed(
                                        2
                                    )}`}</h3>
                                </MDBCardBody>
                                {total > 0 ? (
                                    <Link to="/delivery-form">
                                        <MDBBtn
                                            className="ms-3"
                                            block
                                            size="lg"
                                        >
                                            Proceed to checkout
                                        </MDBBtn>
                                    </Link>
                                ) : (
                                    <MDBBtn
                                        className="ms-3"
                                        block
                                        size="lg"
                                        disabled
                                    >
                                        Proceed to checkout
                                    </MDBBtn>
                                )}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}

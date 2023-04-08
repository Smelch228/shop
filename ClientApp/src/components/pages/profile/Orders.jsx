import React, { useEffect } from "react";
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/slices/actions/authActions";
import { Navigate } from "react-router-dom";

export const Orders = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {
        email,
        firstName,
        lastName,
        phone,
        address,
        loading,
        error,
        isAuth,
    } = useSelector((state) => state.user);
    return (
        <>
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Product actions</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBBtn
                                outline
                                rounded
                                className="me-2"
                                color="dark"
                            >
                                Product list
                            </MDBBtn>
                            <MDBBtn
                                rounded
                                color="dark"
                                className="me-2"
                                onClick={() => navigate("/create-card")}
                            >
                                Add product
                            </MDBBtn>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Users actions</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                                {email}
                            </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Phone</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                                {phone || "Not specified"}
                            </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                    <hr />
                    <MDBRow>
                        <MDBCol sm="3">
                            <MDBCardText>Address</MDBCardText>
                        </MDBCol>
                        <MDBCol sm="9">
                            <MDBCardText className="text-muted">
                                {address || "Not specified"}
                            </MDBCardText>
                        </MDBCol>
                    </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </>
    );
};

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
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/slices/actions/authActions";
import { Navigate } from "react-router-dom";
import { Orders } from "./Orders";

export const RegularProfile = () => {
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

    useEffect(() => {
        dispatch(getProfile());
    }, []);

    return (
        <>
            {isAuth ? (
                <section style={{ backgroundColor: "#eee" }}>
                    {loading ? (
                        "Fetching your profile"
                    ) : (
                        <MDBContainer className="py-5">
                            <MDBRow>
                                <MDBCol>
                                    <MDBBreadcrumb className="bg-light rounded-3 p-3 mb-4">
                                        <MDBBreadcrumbItem>
                                            <Link to="/">Home</Link>
                                        </MDBBreadcrumbItem>
                                        <MDBBreadcrumbItem active>
                                            User Profile {error}
                                        </MDBBreadcrumbItem>
                                    </MDBBreadcrumb>
                                </MDBCol>
                            </MDBRow>

                            <MDBRow>
                                <MDBCol lg="4">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody className="text-center">
                                            <MDBCardImage
                                                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                                alt="avatar"
                                                className="rounded-circle"
                                                style={{ width: "150px" }}
                                                fluid
                                            />
                                            <p className="text-muted mb-1">
                                                Full Stack Developer
                                            </p>
                                            <p className="text-muted mb-4">
                                                Bay Area, San Francisco, CA
                                            </p>
                                            <div className="d-flex justify-content-center mb-2">
                                                <MDBBtn>Follow</MDBBtn>
                                                <MDBBtn
                                                    outline
                                                    className="ms-1"
                                                >
                                                    Message
                                                </MDBBtn>
                                            </div>
                                        </MDBCardBody>
                                    </MDBCard>

                                    <MDBCard className="mb-4 mb-lg-0">
                                        <MDBCardBody className="p-0">
                                            <MDBListGroup
                                                flush
                                                className="rounded-3"
                                            >
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon
                                                        fas
                                                        icon="globe fa-lg text-warning"
                                                    />
                                                    <MDBCardText>
                                                        https://mdbootstrap.com
                                                    </MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon
                                                        fab
                                                        icon="github fa-lg"
                                                        style={{
                                                            color: "#333333",
                                                        }}
                                                    />
                                                    <MDBCardText>
                                                        mdbootstrap
                                                    </MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon
                                                        fab
                                                        icon="twitter fa-lg"
                                                        style={{
                                                            color: "#55acee",
                                                        }}
                                                    />
                                                    <MDBCardText>
                                                        @mdbootstrap
                                                    </MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon
                                                        fab
                                                        icon="instagram fa-lg"
                                                        style={{
                                                            color: "#ac2bac",
                                                        }}
                                                    />
                                                    <MDBCardText>
                                                        mdbootstrap
                                                    </MDBCardText>
                                                </MDBListGroupItem>
                                                <MDBListGroupItem className="d-flex justify-content-between align-items-center p-3">
                                                    <MDBIcon
                                                        fab
                                                        icon="facebook fa-lg"
                                                        style={{
                                                            color: "#3b5998",
                                                        }}
                                                    />
                                                    <MDBCardText>
                                                        mdbootstrap
                                                    </MDBCardText>
                                                </MDBListGroupItem>
                                            </MDBListGroup>
                                        </MDBCardBody>
                                    </MDBCard>
                                </MDBCol>
                                <MDBCol lg="8">
                                    <MDBCard className="mb-4">
                                        <MDBCardBody>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Full Name
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {`${firstName} ${lastName}`}
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Email
                                                    </MDBCardText>
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
                                                    <MDBCardText>
                                                        Phone
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {phone ||
                                                            "Not specified"}
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>
                                                        Address
                                                    </MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">
                                                        {address ||
                                                            "Not specified"}
                                                    </MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                        </MDBCardBody>
                                    </MDBCard>
                                    <Orders />
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    )}
                </section>
            ) : (
                <Navigate replace to="/login"></Navigate>
            )}
        </>
    );
};

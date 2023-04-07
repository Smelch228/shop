import React, { useState } from "react";
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBCollapse,
    MDBBadge,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/user";

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);
    const dispatch = useDispatch();
    const { isAuth } = useSelector((state) => state.user);
    const navigate = useNavigate();

    const { cart } = useSelector((state) => state.cart);

    return (
        <MDBNavbar expand="lg" light bgColor="light">
            <MDBContainer fluid>
                <Link to="/">
                    <MDBNavbarBrand>Market</MDBNavbarBrand>
                </Link>

                <MDBNavbarToggler
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon="bars" fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className=" mb-2 mb-lg-0 mr-auto">
                        <MDBNavbarItem>
                            <Link to="/">
                                <MDBNavbarLink active aria-current="page">
                                    Home
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href="#">Promo</MDBNavbarLink>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <Link to="/feedbacks">
                                <MDBNavbarLink>Feedbacks</MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>

                        <MDBNavbarItem></MDBNavbarItem>
                    </MDBNavbarNav>

                    <div className="d-inline-flex align-items-center">
                        <Link to="/shopping-cart">
                            <div className={cart.length > 0 ? "me-2" : ""}>
                                <MDBIcon
                                    fas
                                    icon="shopping-cart me-2"
                                    size="2x"
                                />
                                {cart.length !== 0 && (
                                    <MDBBadge color="danger" notification pill>
                                        {cart.length}
                                    </MDBBadge>
                                )}
                            </div>
                        </Link>

                        {isAuth && (
                            <Link to="/profile">
                                <MDBIcon
                                    far
                                    icon="user-circle me-2"
                                    size="2x"
                                />
                            </Link>
                        )}

                        {isAuth && (
                            <MDBBtn
                                outline
                                className="me-2"
                                style={{ height: "50%" }}
                                onClick={() => {
                                    dispatch(logout());
                                    navigate("/");
                                }}
                            >
                                Logout
                            </MDBBtn>
                        )}

                        {!isAuth && (
                            <>
                                <Link to="/login">
                                    <MDBBtn
                                        outline
                                        className="me-2"
                                        style={{ height: "50%" }}
                                    >
                                        Login
                                    </MDBBtn>
                                </Link>
                                <Link to="/register">
                                    <MDBBtn style={{ height: "50%" }}>
                                        Register
                                    </MDBBtn>
                                </Link>
                            </>
                        )}
                    </div>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}

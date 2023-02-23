import React, { useState } from 'react';
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
} from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

export default function Navbar() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' light bgColor='light'>
            <MDBContainer fluid>
                <Link to='/'>
                    <MDBNavbarBrand>Market</MDBNavbarBrand>
                </Link>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className=' mb-2 mb-lg-0 mr-auto'>
                        <MDBNavbarItem>
                            <Link to='/'>
                                <MDBNavbarLink active aria-current='page'>
                                    Home
                                </MDBNavbarLink>
                            </Link>
                        </MDBNavbarItem>
                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Promo</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>

                        </MDBNavbarItem>
                    </MDBNavbarNav>


                    <div className='d-inline-flex align-items-center'>
                        <Link to='/profile'>
                            <MDBIcon far icon="user-circle me-2" size='2x' />
                        </Link>
                        <Link to='/shopping-cart'>
                            <MDBIcon fas icon="shopping-cart me-2" size='2x' />
                        </Link>
                        <Link to='/login'>
                            <MDBBtn outline className="me-2" style={{ height: "50%" }}>Login</MDBBtn>
                        </Link>

                        <Link to='/register'>
                            <MDBBtn style={{ height: "50%" }}>Register</MDBBtn>
                        </Link>
                    </div>
                </MDBCollapse>

            </MDBContainer>

        </MDBNavbar>
    );
}
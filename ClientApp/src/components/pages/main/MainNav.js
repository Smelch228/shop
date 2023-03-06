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
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
} from 'mdb-react-ui-kit';


export default function App() {
    const [showBasic, setShowBasic] = useState(false);

    return (
        <MDBNavbar expand='lg' dark className='mt-3 mb-3 shadow p-2' style={{backgroundColor: '#607D8B'}}>
            <MDBContainer fluid>
                <MDBNavbarBrand tag="span">Categories</MDBNavbarBrand>

                <MDBNavbarToggler
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'
                    onClick={() => setShowBasic(!showBasic)}
                >
                    <MDBIcon icon='bars' fas />
                </MDBNavbarToggler>

                <MDBCollapse navbar show={showBasic}>
                    <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
                        <MDBNavbarItem>
                            <MDBNavbarLink active aria-current='page' href='#'>
                                All
                            </MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Category 1</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Category 2</MDBNavbarLink>
                        </MDBNavbarItem>

                        <MDBNavbarItem>
                            <MDBNavbarLink href='#'>Category 3</MDBNavbarLink>
                        </MDBNavbarItem>
                    </MDBNavbarNav>

                    <form className='d-flex input-group w-auto'>
                        <input type='search' className='form-control' placeholder='Search' aria-label='Search' />
                    </form>
                </MDBCollapse>
            </MDBContainer>
        </MDBNavbar>
    );
}
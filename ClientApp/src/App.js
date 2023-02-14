import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';

import './custom.css';
import {MDBContainer} from "mdb-react-ui-kit";
import Nav from './components/Nav.js'
import Carousel from './components/Carousel.js'
import MainNav from './components/main/MainNav.js'
import MainLayout from './components/main/MainLayout.js'

function App() {
    return (
        <div className="App">
            <Nav/>
            <Carousel/>
            <MDBContainer>
                <MainNav/>
                <MainLayout/>

            </MDBContainer>
        </div>
    );
}

export default App;


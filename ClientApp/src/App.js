import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';

import './custom.css';
import {MDBContainer} from "mdb-react-ui-kit";
import Nav from './components/Nav.js'
import Carousel from './components/Carousel.js'

function App() {
    return (
        <div className="App">
            <Nav/>
            <Carousel/>
            <MDBContainer>

            </MDBContainer>
        </div>
    );
}

export default App;


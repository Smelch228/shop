import React from 'react';
import {Route, Routes} from 'react-router-dom';
import AppRoutes from './AppRoutes';
import AuthorizeRoute from './components/api-authorization/AuthorizeRoute';

import './custom.css';
import {MDBContainer} from "mdb-react-ui-kit";
import Nav from './components/Nav.js'
import Carousel from './components/pages/main/Carousel.js'
import MainNav from './components/pages/main/MainNav.js'
import MainLayout from './components/pages/main/MainLayout.js'
import Footer from './components/Footer.js'
import LoginLayout from './components/pages/auth/LoginLayout.js'
import RegisterLayout from './components/pages/auth/RegisterLayout.js'
import Payment from './components/pages/payment/Payment.js'
import ShoppingCart from './components/pages/shopping-cart/ShoppingCart.js'

function App() {
    return (
        <div className="App">
            <Nav/>
            <Routes>
                <Route path="/" element={<MainLayout/>}/>
                <Route path="/login" element={<LoginLayout/>}/>
                <Route path="/register" element={<RegisterLayout/>}/>
                <Route path="/payment" element={<Payment/>}/>
                <Route path="shopping-cart" element={<ShoppingCart/>}/>


            </Routes>
            <Footer className="mt-3"/>

        </div>
    );
}

export default App;

// Добавить профиль, 
// корзину,
// форму оплаты,
// карточку продукта,
// форма для доставки товара,

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './custom.css';
import Nav from './components/Nav.js'
import MainLayout from './components/pages/main/MainLayout.js'
import Footer from './components/Footer.js'
import LoginLayout from './components/pages/auth/LoginLayout.js'
import RegisterLayout from './components/pages/auth/RegisterLayout.js'
import Payment from './components/pages/payment/Payment.js'
import ShoppingCart from './components/pages/shopping-cart/ShoppingCart.js'
import DeliveryForm from './components/pages/payment/Delivery.js'
import { ProfilePage } from './components/pages/profile';

function App() {
    return (
        <div className="App d-flex justify-content-center">
            <Nav />
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<LoginLayout />} />
                <Route path="/register" element={<RegisterLayout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/delivery-form" element={<DeliveryForm />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/card/card:id" element={<ProfilePage />} />

            </Routes>
            <Footer className="" />

        </div>
    );
}

export default App;
//registr+
//login+
//promos(home)+
// Добавить профиль, +
// корзину,+
// форму оплаты, +
// карточку продукта,
// форма для доставки товара, +

import React from "react";
import { Route, Routes } from "react-router-dom";
import "./custom.css";
import Nav from "./components/Nav.js";
import MainLayout from "./components/pages/main/MainLayout.js";
import Footer from "./components/Footer.js";
import LoginLayout from "./components/pages/auth/LoginLayout.js";
import RegisterLayout from "./components/pages/auth/RegisterLayout.js";
import Payment from "./components/pages/payment/Payment.js";
import ShoppingCart from "./components/pages/shopping-cart/Index.jsx";
import DeliveryForm from "./components/pages/payment/Delivery.js";
import CreateCard from "./components/pages/card/CreateCard.js";
import { ProfilePage } from "./components/pages/profile";
import CardDescription from "./components/description/[cardId]";
import FeedbackPage from "./components/pages/feedback";

function App() {
    return (
        <div className="App d-flex justify-content-between">
            <Nav />
            <Routes>
                <Route path="/" element={<MainLayout />} />
                <Route path="/login" element={<LoginLayout />} />
                <Route path="/register" element={<RegisterLayout />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/shopping-cart" element={<ShoppingCart />} />
                <Route path="/delivery-form" element={<DeliveryForm />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/create-card" element={<CreateCard />} />
                <Route path="/card/:cardId" element={<CardDescription />} />
                <Route path="/feedbacks" element={<FeedbackPage />} />
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
// карточку продукта,+
// форма для доставки товара, +

//

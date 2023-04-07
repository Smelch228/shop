import React from "react";
import { useSelector } from "react-redux";
import CardCreateForm from "./CardCreateForm";
import { Navigate } from "react-router";

const CreateCard = () => {
    const { role, isAuth } = useSelector((state) => state.user);

    if (isAuth && role) {
        return (
            <>
                <CardCreateForm />
            </>
        );
    } else {
        alert("You are not an admin!");
        return (
            <>
                <Navigate replace to="/"></Navigate>
            </>
        );
    }
};

export default CreateCard;

// Выбор категории
//

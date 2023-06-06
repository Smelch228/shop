import React, { useEffect, useState } from "react";
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
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProfile } from "../../../redux/slices/actions/authActions";
import { Navigate } from "react-router-dom";
import axios from "axios";

export const Orders = () => {
    const [orders, setOrders] = useState();
    const { token, id } = useSelector((state) => state.user);

    useEffect(() => {
        axios
            .get(`/api/orders/getUserOrders/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response.data);
                setOrders(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <>
            <MDBCard className="mb-4">
                <MDBCardBody>
                    <MDBRow>
                        <MDBCardText>
                            <h4>Orders:</h4>
                        </MDBCardText>
                    </MDBRow>
                    {orders &&
                        orders.map((order) => {
                            return (
                                <>
                                    {order.products.map((product, index) => {
                                        return (
                                            <MDBRow key={index}>
                                                <MDBCol md="6">
                                                    Product name:{" "}
                                                    {product.productName}
                                                </MDBCol>
                                                <MDBCol md="3">
                                                    Quantity: {product.quantity}
                                                </MDBCol>
                                                <MDBCol md="3">
                                                    Unit price:{" $"}
                                                    {product.unitPrice}
                                                </MDBCol>
                                            </MDBRow>
                                        );
                                    })}
                                    <hr></hr>
                                </>
                            );
                        })}
                </MDBCardBody>
            </MDBCard>
        </>
    );
};

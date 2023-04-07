import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import axios from "axios";

import {
    MDBCard,
    MDBCardBody,
    MDBCardHeader,
    MDBCheckbox,
    MDBCol,
    MDBContainer,
    MDBInput,
    MDBRow,
    MDBRadio,
    MDBBtn,
    MDBFile,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

const CardCreateForm = () => {
    const navigate = useNavigate();

    const [product, setProduct] = useState({
        name: "",
        category: 0,
        description: "",
        price: 0.0,
        inStock: true,
        image: null,
    });

    const token = localStorage.getItem("token");

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
        console.log(product);
    };

    const handleInputInt = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: parseInt(value) });
        console.log(product);
    };

    const handleInputFloat = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: parseFloat(value) });
        console.log(product);
    };

    const onFileChange = (e) => {
        setProduct({ ...product, image: e.target.files[0] });
    };

    async function sendProductData() {
        await axios
            .post("/api/product", product, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((response) => {
                console.log(response.data);
                navigate(`/card/${response.data}`);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        sendProductData();
    };

    return (
        <MDBContainer className="py-5">
            <MDBRow>
                <MDBCol className="mb-4">
                    <MDBCard className="mb-4">
                        <MDBCardHeader className="py-3">
                            <h5 className="mb-0">Product creation</h5>
                        </MDBCardHeader>
                        <MDBCardBody>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group
                                    className="mb-3"
                                    controlId="submitForm.ControlName"
                                >
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder=""
                                        name="name"
                                        onChange={handleInput}
                                        value={product.name}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3">
                                    <Form.Label>Categories</Form.Label>
                                    <Form.Select
                                        aria-label="Select category"
                                        name="category"
                                        onChange={handleInputInt}
                                        value={product.category}
                                    >
                                        <option value="0">PC</option>
                                        <option value="1">Laptop</option>
                                        <option value="2">Smartphone</option>
                                        <option value="3">TV</option>
                                        <option value="4">Console</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="exampleForm.ControlDescription"
                                >
                                    <Form.Label>Description</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        name="description"
                                        onChange={handleInput}
                                        value={product.description}
                                    />
                                </Form.Group>

                                <Form.Group
                                    className="mb-3"
                                    controlId="submitForm.ControlPrice"
                                >
                                    <Form.Label>Price</Form.Label>
                                    <Form.Control
                                        type="number"
                                        placeholder="999.99"
                                        name="price"
                                        onChange={handleInputFloat}
                                        value={product.price}
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group
                                    controlId="formFile"
                                    className="mb-3"
                                >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control
                                        type="file"
                                        onChange={onFileChange}
                                    />
                                </Form.Group>

                                <hr className="my-4" />

                                <MDBBtn
                                    size="lg"
                                    block
                                    className="mt-3"
                                    type="submit"
                                >
                                    Add new product
                                </MDBBtn>
                            </Form>
                        </MDBCardBody>
                    </MDBCard>
                </MDBCol>
            </MDBRow>
        </MDBContainer>
    );
};

export default CardCreateForm;

// Выбор категории
//

import React from "react";
import {
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBIcon,
    MDBBtn,
    MDBRipple,
} from "mdb-react-ui-kit";
import setCategory from "../../../utilities/categories";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../redux/slices/cart";
import Alert from "react-bootstrap/Alert";

const ItemCard = (props) => {
    const { id, name, price, category, image } = props;
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(addToCart({ id, name, price, category, image }));
        return (
            <>
                <Alert variant="success">Added to cart.</Alert>
            </>
        );
    };

    return (
        <MDBCol md="8" lg="6" xl="4">
            <MDBCard style={{ borderRadius: "15px" }}>
                <MDBRipple
                    rippleColor="light"
                    rippleTag="div"
                    className="bg-image rounded hover-overlay"
                >
                    <MDBCardImage
                        src={image}
                        fluid
                        className="w-100"
                        style={{
                            borderTopLeftRadius: "15px",
                            borderTopRightRadius: "15px",
                            width: "600px",
                            height: "350px",
                            cursor: "pointer",
                        }}
                        alt={name + " image"}
                        onClick={() => {
                            navigate(`/card/${id}`);
                        }}
                    />
                </MDBRipple>
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>
                                <a href="#!" className="text-dark">
                                    {name}
                                </a>
                            </p>
                            <p className="small text-muted">
                                {setCategory(category)}
                            </p>
                        </div>
                        <div>
                            <div className="d-flex flex-row justify-content-end mt-1 mb-4 text-danger">
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                                <MDBIcon fas icon="star" />
                            </div>
                            <p className="small text-muted">Rated 4.0/5</p>
                        </div>
                    </div>
                </MDBCardBody>
                <hr className="my-0" />
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between">
                        <p>
                            <a href="#!" className="text-dark">
                                {price} $
                            </a>
                        </p>
                        <p className="text-dark">#### 8787</p>
                    </div>
                    <p className="small text-muted">VISA Platinum</p>
                </MDBCardBody>
                <hr className="my-0" />
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between align-items-center pb-2 mb-4">
                        <MDBBtn
                            color="primary"
                            outline
                            onClick={() => {
                                navigate(`/card/${id}`);
                            }}
                        >
                            Read more
                        </MDBBtn>
                        <MDBBtn color="primary" onClick={addProductToCart}>
                            Add to cart
                        </MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    );
};

export default ItemCard;

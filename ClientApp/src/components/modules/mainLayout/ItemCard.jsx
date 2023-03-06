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
import { Link } from "react-router-dom";

const setCategory = id => {
    switch (id) {
        case 0:
            return "PC";
        case 1:
            return "Laptop";
        case 2:
            return "Smartphone";
        case 3:
            return "TV";
        case 4:
            return "Console";

    }
}

const ItemCard = (props) => {
    const { name, price, category, image } = props;

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
                            height: "350px"
                        }}
                        alt={name + " image"}
                    />
                    <a href="#!">
                        <div className="mask"></div>
                    </a>
                </MDBRipple>
                <MDBCardBody className="pb-0">
                    <div className="d-flex justify-content-between">
                        <div>
                            <p>
                                <a href="#!" className="text-dark">
                                    {name}
                                </a>
                            </p>
                            <p className="small text-muted">{setCategory(category)}</p>
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
                        <Link to="huy" className="text-dark fw-bold">
                            <MDBBtn color="primary" outline>Read more</MDBBtn>
                        </Link>
                        <MDBBtn color="primary">Buy now</MDBBtn>
                    </div>
                </MDBCardBody>
            </MDBCard>
        </MDBCol >
    );
}

export default ItemCard;
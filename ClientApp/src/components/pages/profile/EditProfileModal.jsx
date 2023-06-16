import React, { useState } from "react";
import {
    MDBBadge,
    MDBBtn,
    MDBModal,
    MDBModalDialog,
    MDBModalContent,
    MDBModalHeader,
    MDBModalTitle,
    MDBModalBody,
    MDBTable,
    MDBTableHead,
    MDBTableBody,
} from "mdb-react-ui-kit";
import Form from "react-bootstrap/Form";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { update } from "../../../redux/slices/user";

const ProfileForm = () => {
    const dispatch = useDispatch();

    const { id, token, email, firstName, lastName, phoneNumber } = useSelector(
        (state) => state.user
    );
    const [profile, setProfile] = useState({
        id,
        email,
        firstName,
        lastName,
        phoneNumber,
    });

    async function updateProfile() {
        await axios
            .put("/api/users/update", profile, {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                dispatch(update(profile));
                console.log(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const handleInput = (e) => {
        const { name, value } = e.target;
        setProfile({ ...profile, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateProfile();
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="submitForm.ControlEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    name="email"
                    onChange={handleInput}
                    value={profile.email}
                ></Form.Control>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="submitForm.ControlFirstName"
            >
                <Form.Label>First Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    name="firstName"
                    onChange={handleInput}
                    value={profile.firstName}
                ></Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="submitForm.ControlLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    name="lastName"
                    onChange={handleInput}
                    value={profile.lastName}
                ></Form.Control>
            </Form.Group>

            <Form.Group
                className="mb-3"
                controlId="submitForm.ControlPhoneNumber"
            >
                <Form.Label>Phone Number</Form.Label>
                <Form.Control
                    type="text"
                    placeholder=""
                    name="phoneNumber"
                    onChange={handleInput}
                    value={profile.phoneNumber}
                ></Form.Control>
            </Form.Group>

            <MDBBtn size="lg" block className="mt-3" type="submit">
                Update Profile
            </MDBBtn>
        </Form>
    );
};

export const EditProfileModal = () => {
    const [optXLModal, setOptXLModal] = useState(false);

    const toggleShow = () => setOptXLModal(!optXLModal);

    return (
        <>
            <MDBBtn outline className="ms-1" onClick={toggleShow}>
                Edit profile
            </MDBBtn>
            <MDBModal show={optXLModal} tabIndex="-1" setShow={setOptXLModal}>
                <MDBModalDialog size="lg">
                    <MDBModalContent>
                        <MDBModalHeader>
                            <MDBModalTitle>Users list</MDBModalTitle>
                            <MDBBtn
                                className="btn-close"
                                color="none"
                                onClick={toggleShow}
                            ></MDBBtn>
                        </MDBModalHeader>
                        <MDBModalBody>
                            <ProfileForm />
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

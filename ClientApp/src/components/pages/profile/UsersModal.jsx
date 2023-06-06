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
import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const UsersTable = () => {
    const TableRow = (props) => {
        const { email, firstName, lastName, role, phoneNumber, id } = props;
        const [count, setCount] = useState(0);
        const { token } = useSelector((state) => state.user);

        useEffect(() => {
            axios
                .get(`/api/orders/getUserOrders/${id}`, {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json",
                    },
                })
                .then((response) => {
                    setCount(response.data.length);
                })
                .catch((error) => {
                    console.error(error);
                });
        }, []);

        return (
            <>
                <tr>
                    <td>
                        <div className="d-flex align-items-center">
                            <div className="ms-3">
                                <p className="fw-bold mb-1">
                                    {firstName + " " + lastName}
                                </p>
                                <p className="text-muted mb-0">{email}</p>
                            </div>
                        </div>
                    </td>
                    <td>
                        <p className="fw-normal mb-1">{count} orders</p>
                    </td>
                    <td>
                        {role ? (
                            <MDBBadge color="danger" pill>
                                Admin
                            </MDBBadge>
                        ) : (
                            <MDBBadge color="success" pill>
                                Customer
                            </MDBBadge>
                        )}
                    </td>
                    <td>{phoneNumber}</td>
                    <td>
                        <MDBBtn color="link" rounded size="sm">
                            Edit
                        </MDBBtn>
                    </td>
                </tr>
            </>
        );
    };

    const [users, setUsers] = useState([{}]);

    useEffect(() => {
        const token = localStorage.getItem("token");
        axios
            .get("/api/users", {
                headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
                },
            })
            .then((response) => {
                console.log(response);
                setUsers(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    return (
        <MDBTable align="middle">
            <MDBTableHead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Total Orders</th>
                    <th scope="col">Role</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Actions</th>
                </tr>
            </MDBTableHead>
            <MDBTableBody>
                {users.map((user) => (
                    <TableRow
                        key={user.userId}
                        email={user.email}
                        firstName={user.firstName}
                        lastName={user.lastName}
                        phoneNumber={user.phoneNumber}
                        id={user.userId}
                        role={user.role}
                    />
                ))}
            </MDBTableBody>
        </MDBTable>
    );
};

export const UsersModal = () => {
    const [optXLModal, setOptXLModal] = useState(false);

    const toggleShow = () => setOptXLModal(!optXLModal);

    return (
        <>
            <MDBBtn
                onClick={toggleShow}
                rounded
                className="me-2"
                color="dark"
                outline
            >
                Users list
            </MDBBtn>
            <MDBModal show={optXLModal} tabIndex="-1" setShow={setOptXLModal}>
                <MDBModalDialog size="xl">
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
                            <UsersTable />
                        </MDBModalBody>
                    </MDBModalContent>
                </MDBModalDialog>
            </MDBModal>
        </>
    );
};

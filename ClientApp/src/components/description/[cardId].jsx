import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBTypography, MDBIcon, MDBBtn, } from 'mdb-react-ui-kit';
import { useParams } from 'react-router-dom';
export default function CardDescription() {
    const { cardId } = useParams();
    return (
        <section className="vh-100" style={{ backgroundColor: '#f4f5f7' }}>
            <MDBContainer className="py-5 h-200">
                <MDBRow className="justify-content-center align-items-center h-200">
                    <MDBCol lg="6" className="mb-4 mb-lg-0">
                        <MDBCard className="mb-3" style={{ borderRadius: '.5rem' }}>
                            <MDBRow className="g-0">
                                <MDBCol md="4" className="gradient-custom text-center"
                                >
                                    <MDBCardImage src="https://mdbcdn.b-cdn.net/img/Photos/Horizontal/E-commerce/Products/12.webp"
                                        alt="Avatar" className="my-5" style={{ width: '120px' }} fluid />
                                    <MDBTypography tag="h5">Notebook</MDBTypography>
                                    <MDBCardText style={{ color: 'ligthgreen' }}>In stock</MDBCardText>
                                </MDBCol>
                                <MDBCol md="8">
                                    <MDBCardBody className="p-4">
                                        <MDBTypography tag="h6">Description</MDBTypography>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            {/* <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Email</MDBTypography>
                                            </MDBCol>
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Phone</MDBTypography>
                                                <MDBCardText className="text-muted">123 456 789</MDBCardText>
                                            </MDBCol> */}
                                                <MDBCardText className="text-muted">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque iusto expedita fugiat doloribus nulla. Commodi unde voluptate, cumque impedit quod voluptatem quos sint quam, similique ut amet corporis quas ullam.</MDBCardText>
                                        </MDBRow>
                                        <hr className="mt-0 mb-4" />
                                        <MDBRow className="pt-1">
                                            <MDBCol size="6" className="mb-3">
                                                <MDBTypography tag="h6">Price</MDBTypography>
                                            </MDBCol>
                                            {/* <MDBTypography tag="h6">Phone</MDBTypography> */}
                                            <MDBCol size="6" className="mb-3">
                                                <MDBCardText  className="text-muted">44.50$</MDBCardText>

                                                <div className='d-flex flex-row justify-content-center gap-2'>
                                                    <MDBBtn color="primary" size='sm' outline>Add to cart +</MDBBtn>
                                                    <MDBBtn color="primary" size='sm'>Buy now</MDBBtn>
                                                </div>
                                            </MDBCol>
                                            {/* <MDBCardText className="text-muted">123 456 789</MDBCardText> */}
                                        </MDBRow>
                                    </MDBCardBody>
                                </MDBCol>
                            </MDBRow>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </section>
    );
}
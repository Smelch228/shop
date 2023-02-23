import React, { useState } from "react";

import Select from 'react-select';
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

  

const options = [

]

const Selector = () => {
    return (
        <>
        </>
    );
}

const CreateCard = (props) => {
    return (

    <MDBContainer className="py-5">
      <MDBRow>
        <MDBCol className="mb-4">
          <MDBCard className="mb-4">
            <MDBCardHeader className="py-3">
              <h5 className="mb-0">Card creation</h5>
            </MDBCardHeader>
            <MDBCardBody>
                <MDBInput wrapperClass="mb-4" label="Name of the product" id="form1" type="text" />
                <MDBInput wrapperClass="mb-4" label="Description of the product" id="form1" type="text" />

              <MDBInput
                wrapperClass="mb-4"
                label="Enter price"
                id="form4"
                type="email"
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Phone"
                id="form5"
                type="tel"
              />

              <hr className="my-4" />

            
                <MDBFile label='Input image of the product' id='customFile' />
              
            

              <MDBBtn size="lg" block className="mt-3">
                Add new product
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        </MDBRow>
    </MDBContainer>
    )
}

export default CreateCard;

// Выбор категории
// 
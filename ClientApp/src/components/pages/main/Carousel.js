import React from 'react';
import {
    MDBCarousel,
    MDBCarouselItem,
    MDBRow,
    MDBCol,
} from 'mdb-react-ui-kit';

export default function Carousel() {
    return (
            <MDBRow>
                <MDBCol size='md' className='d-none d-lg-inline-block d-md-inline-block mb-1 min-vw-100' style={{padding: "0"}}>
                    <MDBCarousel showIndicators showControls className=''>
                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={1}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg'
                            alt='...'
                            style = {{ height: "45vh"}}
                        >
                            <h5>First slide label</h5>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </MDBCarouselItem>

                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={2}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg'
                            alt='...'
                            style = {{ height: "45vh"}}
                        >
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </MDBCarouselItem>

                        <MDBCarouselItem
                            className='w-100 d-block'
                            itemId={3}
                            src='https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg'
                            alt='...'
                            style = {{ height: "45vh"}}
                        >
                            <h5>Third slide label</h5>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </MDBCarouselItem>
                    </MDBCarousel>
                </MDBCol>
            </MDBRow>
    );
}
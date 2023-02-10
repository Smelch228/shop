import React from 'react';
import {
  MDBCarousel,
  MDBCarouselItem,
} from 'mdb-react-ui-kit';

const Carousel = () => {
    return(
        <MDBCarousel showIndicators showControls fade>
          <MDBCarouselItem
            className='w-100 d-block'
            itemId={1}
            src="https://picsum.photos/1600/800"
            alt="First slide"
          >
          <h5>First slide label</h5>
          <p>Some shitty shit...</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={2}
            src="https://picsum.photos/1600/801"
            alt="Second slide"
          >
            <h5>Second slide label</h5>
            <p>Other shitty shit...</p>
          </MDBCarouselItem>

          <MDBCarouselItem
            className='w-100 d-block'
            itemId={3}
            src="https://picsum.photos/1600/799"
            alt='Third slide'
          >
            <h5>Third slide label</h5>
            <p>Some shitty shit...</p>
          </MDBCarouselItem>
        </MDBCarousel>

        
    );
}

export default Carousel;
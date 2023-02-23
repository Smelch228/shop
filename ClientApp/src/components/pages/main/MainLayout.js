import React from 'react';
import {
    MDBRow,
    MDBContainer
} from 'mdb-react-ui-kit';
import MainNav from './MainNav.js';
import MainCarousel from './Carousel.js';
import MainPagination from './MainPagination.js';
import ItemCard from '../../modules/mainLayout/ItemCard.jsx';


export default function App() {
    return (
        <>
            <MainCarousel styles />
            <MDBContainer>
                <MainNav />
                <MDBRow className='row-cols-1 row-cols-md-4 row-cols-sm-2 g-4'>
                    {[1, 2, 3, 4, 5, 'fd', 4, 4, 4, 4, 4, 4, 4, 4, 4, 4].map((item, index) => {
                        return <ItemCard key={index} cardId={index}></ItemCard>
                    })}
                </MDBRow>
                <MainPagination />
            </MDBContainer>
        </>
    );
}

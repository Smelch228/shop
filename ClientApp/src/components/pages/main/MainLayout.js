import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {
    MDBRow,
    MDBContainer
} from 'mdb-react-ui-kit';
import MainNav from './MainNav.js';
import MainCarousel from './Carousel.js';
import MainPagination from './MainPagination.js';
import ProductCard from '../../modules/mainLayout/ItemCard.jsx';


export default function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.
            get('api/product')
            .then(data => {
                console.log(data);
                setProducts(data.data);
                console.log(products);
            })
    }, [])

    return (
        <>
            <MainCarousel styles />
            <MDBContainer>
                <MainNav />
                <MDBRow className='row-cols-1 row-cols-md-4 row-cols-sm-2 g-4'>
                    {products.map((product => {
                        console.log(product);
                        return (
                            <ProductCard key={product.id}
                                id= { product.id }
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                image={product.image}
                            />
                        );
                    }))}
                </MDBRow>
                <MainPagination />
            </MDBContainer>
        </>
    );
}

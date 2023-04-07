import React, { useState, useEffect } from "react";
import axios from "axios";
import { MDBRow, MDBContainer } from "mdb-react-ui-kit";
import MainNav from "./MainNav.js";
import ProductCard from "../../modules/mainLayout/ItemCard.jsx";
import ReactPaginate from "react-paginate";

export default function PaginatedItems() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        window.scrollTo(0, 0);
        axios.get("api/product").then((response) => {
            setProducts(response.data);
            console.log(products);
        });
    }, []);

    const Items = ({ currentItems }) => {
        return (
            <>
                {currentItems &&
                    currentItems.map((product) => (
                        <ProductCard
                            key={product.id}
                            id={product.id}
                            name={product.name}
                            price={product.price}
                            category={product.category}
                            image={product.image}
                        />
                    ))}
            </>
        );
    };

    function PaginatedItems() {
        // Here we use item offsets; we could also use page offsets
        // following the API or data you're working with.
        const [itemOffset, setItemOffset] = useState(0);

        // Simulate fetching items from another resources.
        // (This could be items from props; or items loaded in a local state
        // from an API endpoint with useEffect and useState)
        const endOffset = itemOffset + 6;
        console.log(`Loading items from ${itemOffset} to ${endOffset}`);
        const currentItems = products.slice(itemOffset, endOffset);
        const pageCount = Math.ceil(products.length / 6);

        // Invoke when user click to request another page.
        const handlePageClick = (event) => {
            const newOffset = (event.selected * 6) % products.length;
            console.log(
                `User requested page number ${event.selected}, which is offset ${newOffset}`
            );
            setItemOffset(newOffset);
        };

        return (
            <MDBContainer>
                <MainNav />
                <MDBRow className="row-cols-1 row-cols-md-4 row-cols-sm-2 g-4">
                    <Items currentItems={currentItems} />
                </MDBRow>
                <div className="d-flex list-unstyled justify-content-center align-items-center my-4 p-0">
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="next >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< previous"
                        pageClassName="page-item"
                        pageLinkClassName="page-link"
                        previousClassName="page-item"
                        previousLinkClassName="page-link"
                        nextClassName="page-item"
                        nextLinkClassName="page-link"
                        breakClassName="page-item"
                        breakLinkClassName="page-link"
                        containerClassName="pagination"
                        activeClassName="active"
                        renderOnZeroPageCount={null}
                    />
                </div>
            </MDBContainer>
        );
    }

    return (
        <>
            <PaginatedItems />
        </>
    );
}
/*<PaginatedItems />*/

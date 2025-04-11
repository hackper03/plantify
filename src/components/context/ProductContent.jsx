import React, { createContext } from 'react'
import { useState, useEffect } from 'react';
export const ProductContent = createContext();

export const ProductProvider = (props) => {
    const [product, setProduct] = useState(null);
    const [productID, setProductID] = useState(1);
    console.log("Printing Product ID",productID)
    useEffect(() => {
        if (props.plant_id) {
            fetch(`http://localhost:8080/plant/${productID}`)
                .then((response) => response.json())
                .then((data) => setProduct(data))
                .catch((error) => console.error('Error fetching product:', error));
        }
    }, [productID]);
    console.log("Printing product",product)
    return (
        <ProductContent.Provider value={{ product, setProductID }}>
            {props.children}
        </ProductContent.Provider>
    );
};

export default ProductContent;
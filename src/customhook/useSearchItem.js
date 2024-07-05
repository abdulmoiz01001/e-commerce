import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearFiltered } from "../lib/store/features/filteredSlice/filteredSlice";

const useSearchItem = (searchItem) => {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const [filteredProducts, setFilteredProducts] = useState(null);
    console.log(products);

    console.log(searchItem); // Log the searchItem instead of searchTerm
    useEffect(() => {

        if (searchItem === '') {
            setFilteredProducts(null);
            dispatch(clearFiltered());
        } else {
            setFilteredProducts(
                products.filter((product) =>
                    product.title.toLowerCase().includes(searchItem.toLowerCase())
                )
            );
        }
    }, [searchItem, products]);

    return filteredProducts;
}

export default useSearchItem;

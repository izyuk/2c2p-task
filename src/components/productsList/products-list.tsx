import React, {useEffect} from 'react';
import ProductsListItem from "./products-list-item";
import './product-list.less';
import {RootState} from "../../store";
import {useDispatch, useSelector} from "react-redux";
import {GetProducts} from "../../store/products/actions";


const Products = () => {
    const dispatch = useDispatch();

    const productsState = useSelector((state: RootState) => state.product.products);

    useEffect(() => {
        dispatch(GetProducts());
    }, []);

    return (
        <div className='list-wrap'>
            <h2>Chose you're own plan</h2>
            {productsState &&
            <ProductsListItem products={productsState}/>}

        </div>
    )
};

export default Products;

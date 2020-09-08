import React from 'react';
import {Product} from "../../store/products/types";
import {useDispatch} from "react-redux";
import {useHistory} from 'react-router-dom';
import {SetPaymentData} from "../../store/payment-data/actions";

interface ProductsI {
    products: Product[]
}

const ProductsListItem = ({products}: ProductsI) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const settingHandler = (info: Product) => {
        dispatch(SetPaymentData(info));
        history.push('/payment');
    };

    return (
        <ul>
            {products && products.map((item: Product, i: number) => {
                return <li key={i} onClick={() => settingHandler(item)}>
                    <p>Product name: {item.title}</p>
                    <p>Price is: ${item.price}</p>
                </li>
            })}
        </ul>
    )
};

export default ProductsListItem;

import React from 'react';
import './payment.less';
import ProductInfo from "./productInfo/product-info";
import PaymentForm from "./paymentForm/payment-form";

const Payment = () => {
    return (
        <div className='wrap'>
            <ProductInfo/>
            <PaymentForm/>
        </div>
    )

};

export default Payment

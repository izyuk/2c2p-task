import React from 'react';
import './product-info.less';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";

const ProductInfo = () => {
    const paymentInfo = useSelector((state: RootState) => state.paymentData.data);
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    return (
        <div className='payment-info'>
            <p className="name">
                Product: {paymentInfo.title}
            </p>
            <p className="date">{dateTime}</p>
            <p className="amount">
                Amount: {paymentInfo.price} USD
            </p>
        </div>
    )
};

export default ProductInfo;

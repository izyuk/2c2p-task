import React from 'react';
import './product-info.less';
import {useSelector} from "react-redux";
import {RootState} from "../../../store";


const ProductInfo = () => {
    const {isLoaded: {loaded}, info} = useSelector((state: RootState) => state.paymentInfo);
    const paymentInfo = useSelector((state: RootState) => state.paymentData.data);
    const today = new Date();
    const date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const dateTime = date + ' ' + time;

    const statusStyle = loaded && info.responseCode === '00' ? 'success' : 'error';

    return (
        <div className='payment-info'>
            <div>
                <p className="name">
                    Product: {paymentInfo.title}
                </p>
                <p className="date">{dateTime}</p>
                <p className="amount">
                    Amount: {paymentInfo.price} USD
                </p>
            </div>
            {loaded && <div>
                <p className={statusStyle}>{info.responseMessage}</p>
                <p>{info.invoiceNo}</p>
            </div>}
        </div>
    )
};

export default ProductInfo;

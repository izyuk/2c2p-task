import React from 'react';
import './success-page.less';
import {PaymentInfo} from "../../store/payment-info/types";

const SuccessInfo = ({info}: {info: PaymentInfo}) => {

    const statusStyle = info.responseCode === '00' ? 'success' : 'error';

    return (
        <div>
            <p className={statusStyle}>{info.responseMessage}</p>
            <p>{info.invoiceNo}</p>
        </div>
    )
};

export default SuccessInfo;

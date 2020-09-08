import React from 'react';
import './success-page.less';
import ProductInfo from "../payment/productInfo/product-info";
import {useSelector} from "react-redux";
import {RootState} from "../../store";
import SuccessInfo from "./success-info";

const SuccessPage = () => {

    const paymentState = useSelector((state: RootState) => state.paymentInfo);

    return (
        <div className={'wrap'}>
            <ProductInfo/>
            {paymentState.loaded && <SuccessInfo info={paymentState.info}/>}
        </div>
    )
};

export default SuccessPage;

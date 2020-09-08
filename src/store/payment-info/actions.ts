import axios from "axios";
import {CHANGE_LOADED_STATE, GET_PAYMENT_INFO, PaymentInfoActionTypes, UserPaymentData} from "./types";
import {Dispatch} from "redux";


export const GetPaymentInformation = (userPaymentData: UserPaymentData) => async (dispatch: Dispatch<PaymentInfoActionTypes>) => {
    try {
        const res = await axios.post(`http://www.mocky.io/v2/5d8de422310000b19d2b517a`,{
            data: userPaymentData
        });
        dispatch({
            type: GET_PAYMENT_INFO,
            payload: res.data
        });

        dispatch({
            type: CHANGE_LOADED_STATE,
            payload: {loaded: true}
        })

    } catch (e) {
        dispatch({
            type: CHANGE_LOADED_STATE,
            payload: {loaded: false}
        })
    }
};

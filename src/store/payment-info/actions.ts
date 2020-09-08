import axios from "axios";
import {CHANGE_LOADED_STATE, GET_PAYMENT_INFO, PaymentInfoActionTypes, UserPaymentData} from "./types";
import {Dispatch} from "redux";


export const GetPaymentInformation = (userPaymentData: UserPaymentData) => async (dispatch: Dispatch<PaymentInfoActionTypes>) => {
    try {
        const res = await axios.post(`http://www.mocky.io/v2/5d8de441310000a2612b517c`, {
            data: userPaymentData
        });
        dispatch({
            type: GET_PAYMENT_INFO,
            payload: res.data
        });

    } catch (e) {
        dispatch({
            type: GET_PAYMENT_INFO,
            payload: e.response.data
        });
    } finally {
        dispatch({
            type: CHANGE_LOADED_STATE,
            payload: {loaded: true}
        })
    }
};

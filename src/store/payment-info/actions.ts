import axios from "axios";
import {CHANGE_LOADED_STATE, GET_PAYMENT_INFO, PaymentInfoActionTypes, UserPaymentDataI} from "./types";
import {Dispatch} from "redux";
import {MOCKY_API_METHODS} from "../../enums/endpoints";


export const GetPaymentInformation = (userPaymentData: UserPaymentDataI) => async (dispatch: Dispatch<PaymentInfoActionTypes>) => {
    try {
        const res = await axios.post(`http://www.mocky.io/v2/${MOCKY_API_METHODS.SUCCESS}`, {
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

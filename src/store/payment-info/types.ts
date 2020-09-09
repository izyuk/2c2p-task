import {IsLoadedI, PaymentInfoI} from "../../enums/shared/interfaces";

export const GET_PAYMENT_INFO = 'GET_PAYMENT_INFO';
export const CHANGE_LOADED_STATE = 'CHANGE_LOADED_STATE';

export interface UserPaymentDataI {
    cardType: string,
    cardNumber: string,
    expiry: string,
    userName: string,
    email: string
}


interface GetPaymentInfo {
    type: typeof GET_PAYMENT_INFO,
    payload: PaymentInfoI
}

interface LoadedInfoState {
    type: typeof CHANGE_LOADED_STATE,
    payload: IsLoadedI
}


export type PaymentInfoActionTypes = GetPaymentInfo | LoadedInfoState;

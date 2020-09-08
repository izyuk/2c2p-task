export const GET_PAYMENT_INFO = 'GET_PAYMENT_INFO';
export const CHANGE_LOADED_STATE = 'CHANGE_LOADED_STATE';

export interface PaymentInfo {
    responseCode: string,
    responseMessage: string,
    invoiceNo: string,
    approvalCode: string
}

export interface UserPaymentData {
    cardType: string,
    cardNumber: string,
    expiry: string,
    userName: string,
    email: string
}

export interface LoadedState {
    loaded: boolean
}


interface GetPaymentInfo {
    type: typeof GET_PAYMENT_INFO,
    payload: PaymentInfo
}

interface LoadedInfoState {
    type: typeof CHANGE_LOADED_STATE,
    payload: LoadedState
}


export type PaymentInfoActionTypes = GetPaymentInfo | LoadedInfoState;

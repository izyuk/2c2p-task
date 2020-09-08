export const SET_DATA = 'SET_DATA';
export const USE_DATA = 'USE_DATA';

export interface PaymentData {
    id: number,
    title: string,
    price: number
}


interface SetPaymentData {
    type: typeof SET_DATA,
    payload: PaymentData[]
}

interface UsePaymentData {
    type: typeof USE_DATA
}

export type PaymentActionTypes = SetPaymentData | UsePaymentData;

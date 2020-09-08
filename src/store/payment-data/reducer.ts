import {PaymentActionTypes, PaymentData, SET_DATA} from "./types";

interface DefaultStateI {
    data: PaymentData
}

const initialState: DefaultStateI = {
    data: {
        id: 0,
        title: '',
        price: 0
    }
};

const paymentDataReducer = (state: DefaultStateI = initialState, action: PaymentActionTypes): DefaultStateI => {
    switch (action.type) {
        case SET_DATA:
            return {
                data: {...state.data, ...action.payload}
            };
        default:
            return state;
    }
};

export default paymentDataReducer;

import {CHANGE_LOADED_STATE, GET_PAYMENT_INFO, PaymentInfo, PaymentInfoActionTypes} from "./types";

interface DefaultStateI {
    info: PaymentInfo,
    loaded: boolean
}

const initialState: DefaultStateI = {
    info: {
        responseCode: '',
        responseMessage: '',
        invoiceNo: '',
        approvalCode: ''
    },
    loaded: false
};

const paymentInfoReducer = (state: DefaultStateI = initialState, action: PaymentInfoActionTypes): DefaultStateI => {
    switch (action.type) {
        case GET_PAYMENT_INFO:
            return {
                info: {...state.info, ...action.payload},
                loaded: state.loaded
            };
        case CHANGE_LOADED_STATE:
            return {
                info: state.info,
                loaded: action.payload.loaded
            };
        default:
            return state;
    }
};

export default paymentInfoReducer;

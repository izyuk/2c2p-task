import {CHANGE_LOADED_STATE, GET_PAYMENT_INFO, PaymentInfoActionTypes} from "./types";
import {IsLoadedI, PaymentInfoI} from "../../enums/shared/interfaces";

interface DefaultStateI {
    info: PaymentInfoI,
    isLoaded: IsLoadedI
}

const initialState: DefaultStateI = {
    info: {
        responseCode: '',
        responseMessage: '',
        invoiceNo: '',
        approvalCode: ''
    },
    isLoaded: {
        loaded: false
    }
};

const paymentInfoReducer = (state: DefaultStateI = initialState, action: PaymentInfoActionTypes): DefaultStateI => {
    switch (action.type) {
        case GET_PAYMENT_INFO:
            return {
                info: {...state.info, ...action.payload},
                isLoaded: state.isLoaded
            };
        case CHANGE_LOADED_STATE:
            return {
                info: state.info,
                isLoaded: {
                    loaded: action.payload.loaded
                }
            };
        default:
            return state;
    }
};

export default paymentInfoReducer;

import productsReducer from "./products/reducer";
import paymentDataReducer from "./payment-data/reducer";
import {combineReducers} from "redux";
import cardTypesReducer from "./payment-data/card-types/reducer";
import paymentInfoReducer from "./payment-info/reducer";

export const rootReducer = combineReducers({
    product: productsReducer,
    paymentData: paymentDataReducer,
    cardTypes: cardTypesReducer,
    paymentInfo: paymentInfoReducer
});

export type RootState = ReturnType<typeof rootReducer>

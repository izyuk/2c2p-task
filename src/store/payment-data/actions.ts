import {Dispatch} from "redux";
import {SET_DATA, USE_DATA} from "./types";
import {Product} from "../products/types";

export const SetPaymentData = (data: Product) => (dispatch: Dispatch) => {
    const {category, image, description, ...rest} = data;
    dispatch({
        type: SET_DATA,
        payload: rest
    })
};

export const UsePaymentData = () => (dispatch: Dispatch) => {
    dispatch({
        type: USE_DATA
    })
};

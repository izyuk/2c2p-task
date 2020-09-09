import axios from 'axios';
import {
    ProductActionTypes,
    PRODUCTS_LOADING,
    PRODUCTS_LOADING_FAIL,
    PRODUCTS_LOADING_SUCCESS
} from "./types";
import {Dispatch} from "redux";
import {FAKE_STORE_API_METHODS} from "../../enums/endpoints";


export const GetProducts = () => async (dispatch: Dispatch<ProductActionTypes>) => {
    try {
        dispatch({
            type: PRODUCTS_LOADING
        });

        const res = await axios.get(`https://fakestoreapi.com/${FAKE_STORE_API_METHODS.products}`);

        dispatch({
            type: PRODUCTS_LOADING_SUCCESS,
            payload: res.data
        });

    } catch (e) {
        dispatch({
            type: PRODUCTS_LOADING_FAIL
        });
    }
};

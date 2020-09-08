import {Product, ProductActionTypes, PRODUCTS_LOADING, PRODUCTS_LOADING_FAIL, PRODUCTS_LOADING_SUCCESS} from "./types";

interface DefaultStateI {
    loading: boolean,
    products?: Product[]
}

const initialState: DefaultStateI = {
    loading: false
};

const productsReducer = (state: DefaultStateI = initialState, action: ProductActionTypes): DefaultStateI => {
    switch (action.type) {
        case PRODUCTS_LOADING_FAIL:
            return {
                loading: false
            };
        case PRODUCTS_LOADING:
            return {
                loading: true
            };
        case PRODUCTS_LOADING_SUCCESS:
            return {
                loading: false,
                products: [...state.products || [], ...action.payload]
            };
        default:
            return state;

    }
};

export default productsReducer;

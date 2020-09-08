export const PRODUCTS_LOADING = 'PRODUCTS_LOADING';
export const PRODUCTS_LOADING_FAIL = 'PRODUCTS_LOADING_FAIL';
export const PRODUCTS_LOADING_SUCCESS = 'PRODUCTS_LOADING_SUCCESS';

export interface Product {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string
}

interface ProductsLoading {
    type: typeof PRODUCTS_LOADING
}

interface ProductsLoadingFail {
    type: typeof PRODUCTS_LOADING_FAIL
}

interface ProductsLoadingSuccess {
    type: typeof PRODUCTS_LOADING_SUCCESS,
    payload: Product[]
}

export type ProductActionTypes = ProductsLoading | ProductsLoadingFail | ProductsLoadingSuccess;

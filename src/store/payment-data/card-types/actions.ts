import axios from "axios";
import {CardActionTypes, CardType, RECEIVE_CARD_TYPES, USE_CARD_TYPES} from "./types";
import {Dispatch} from "redux";


export const SetCardList = () => async (dispatch: Dispatch<CardActionTypes>) => {
    try {
        const res = await axios.get(`http://www.mocky.io/v2/5d145fa22f0000ff3ec4f030`);
        const {cardTypes} = res.data;
        const filtered = cardTypes.filter((item: CardType) => item.value !== 'JCB');

        dispatch({
            type: RECEIVE_CARD_TYPES,
            payload: filtered
        });

    } catch (e) {

    }
};

export const UsePaymentData = () => (dispatch: Dispatch) => {
    dispatch({
        type: USE_CARD_TYPES
    })
};

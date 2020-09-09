import axios from "axios";
import {CardActionTypes, CardType, RECEIVE_CARD_TYPES, USE_CARD_TYPES} from "./types";
import {Dispatch} from "redux";
import {MOCKY_API_METHODS} from "../../../enums/endpoints";


export const SetCardList = () => async (dispatch: Dispatch<CardActionTypes>) => {
    try {
        const res = await axios.get(`http://www.mocky.io/v2/${MOCKY_API_METHODS.CARDS_LIST}`);
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

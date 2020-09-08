import {CardActionTypes, CardType, RECEIVE_CARD_TYPES, USE_CARD_TYPES} from "./types";

interface DefaultStateI {
    data: CardType[]
}

const initialState: DefaultStateI = {
    data: []
};

const cardTypesReducer = (state: DefaultStateI = initialState, action: CardActionTypes): DefaultStateI => {
    switch (action.type) {
        case RECEIVE_CARD_TYPES:
            return {
                data: [...state.data || [], ...action.payload]
            };
        case USE_CARD_TYPES:
            return state;
        default:
            return state;
    }
};

export default cardTypesReducer;

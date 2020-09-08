export const RECEIVE_CARD_TYPES = 'RECEIVE_CARD_TYPES';
export const USE_CARD_TYPES = 'USE_CARD_TYPES';

export interface CardType {
    id: number,
    value: string
}

interface SetCardData {
    type: typeof RECEIVE_CARD_TYPES,
    payload: CardType[]
}

interface UseCardData {
    type: typeof USE_CARD_TYPES
}

export type CardActionTypes = SetCardData | UseCardData;

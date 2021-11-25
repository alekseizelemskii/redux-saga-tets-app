import { Action, ActionType } from "../action-types";

export interface Items {
    img: string,
    asin: string,
    price: string,
    bsr_category: string,
    link: string,
    name: string,
};

interface State {
    items: Items[],
    loading: boolean,
    error: string | null,
    category: string[]
}

const defaultState = {
    items: [],
    loading: false,
    error: null,
    category: []
};

export const itemsReducer = (state: State = defaultState, action: Action): State => {
    switch (action.type) {

        case ActionType.KNOCKING_TO_API: {
            return {
                ...state,
                loading: true
            }
        }

        case ActionType.FETCH_SUCCESS: {
            return {
                ...state,
                loading: false,
                items: action.payload,
                category: Array.from(new Set(action.payload?.map(items => items.bsr_category))),

            }
        }

        case ActionType.FETCH_FAILURE: {
            return {
                ...state,
                loading: false,
                error: 'Error'
            }
        }

        default: {
            return state;
        }
    }
}
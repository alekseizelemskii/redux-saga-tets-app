import { Items } from "../reducers/itemsReducer";

export enum ActionType {
    SET_ITEMS = 'SET_ITEMS',
    SET_IS_FETCHING = 'SET_IS_FETCHING',
    GET_ITEMS = 'GET_ITEMS',
    FETCH_SUCCESS = 'FETCH_SUCCESS',
    FETCH_FAILURE = 'FETCH_FAILURE',
    KNOCKING_TO_API = 'KNOCKING_TO_API' 
};

interface KnockingToApi { 
    type: ActionType. KNOCKING_TO_API

}

interface FetchSuccess { 
    type: ActionType. FETCH_SUCCESS,
    payload: Items[];
};

interface FetchFailure { 
    type: ActionType. FETCH_FAILURE

};

export type Action = KnockingToApi | FetchFailure | FetchSuccess;

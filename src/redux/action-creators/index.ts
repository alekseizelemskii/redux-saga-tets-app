import { AnyAction } from "redux";
import { ActionType } from '../action-types';
import { Items } from '../reducers/itemsReducer';

export const getData = (): AnyAction => ({type: ActionType.KNOCKING_TO_API });

export const fetchSuccess = (payload: Items[]): AnyAction => ({type: ActionType.FETCH_SUCCESS, payload });

export const fetchFailure = (): AnyAction => ({type: ActionType.FETCH_FAILURE})

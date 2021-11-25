import { Action, ActionType } from "../action-types";
import { Dispatch } from 'redux';

// export const setItems = (items) => ({type: SET_ITEMS, payload: items}); 
// export const setIsFetching = (bool) => ({type:SET_IS_FETCHING, payload: bool});

// export const getItems = () => {
//     return async (dispatch: Dispatch<Action>) => {

//         const response = await fetch(`http://myjson.dit.upm.es/api/bins/fbe1`);
        
//         const {products} = await response.json();
//         dispatch({
//             type: ActionType.SET_ITEMS,
//             payload: products
//         });
//     };
// };

// export const setItems = (payload) => ({type: ActionType.SET_ITEMS, payload});
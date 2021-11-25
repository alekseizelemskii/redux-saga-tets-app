import { ActionType } from './../action-types/index';
import {put, takeEvery, call} from 'redux-saga/effects';
import { fetchSuccess, fetchFailure } from '../action-creators';
import { expectSaga } from "redux-saga-test-plan";


export const fetchItemsFromApi = async () => {
    const data = await fetch(`http://myjson.dit.upm.es/api/bins/fbe1`)
    const json = await data.json();
    return json;
};


export function* fetchWorker(): any {

    try {
        const {products} = yield call(fetchItemsFromApi);
        
        yield put(fetchSuccess(products)); 

    }catch (error) {
        yield put(fetchFailure())
    }
}

export function* fetchWatcher() {
    yield takeEvery(ActionType.KNOCKING_TO_API, fetchWorker);
}

export function* rootSaga(){
    yield fetchWatcher();    
} 
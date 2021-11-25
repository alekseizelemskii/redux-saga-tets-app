import { ActionType } from './../action-types/index';
import {put, takeEvery, call} from 'redux-saga/effects';
import { fetchSuccess, fetchFailure } from '../action-creators';

export const fetchItemsFromApi = async () => {
    const response = await fetch(`http://myjson.dit.upm.es/api/bins/fbe1`)
    const {products} = await response.json();
    return products;
};

export function* fetchWorker(): any {
    try {
        const products = yield call(fetchItemsFromApi);
        yield put(fetchSuccess(products)); 

    }catch (error) {
        yield put(fetchFailure())
    }
};

export function* fetchWatcher() {
    yield takeEvery(ActionType.KNOCKING_TO_API, fetchWorker);
};

export function* rootSaga(){
    yield fetchWatcher();    
};
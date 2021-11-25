import { call, put } from "redux-saga/effects";
import { expectSaga } from 'redux-saga-test-plan';
import { fetchFailure, fetchSuccess } from '../action-creators';
import { fetchWorker, fetchItemsFromApi } from './index';
import { throwError } from "redux-saga-test-plan/providers";

it("fetches items", () => {
    const items = [
        {
            img: "d",
            asin: "s",
            price: "x",
            bsr_category: "x",
            link: "x",
            name: "x"
        },
    ]

    return expectSaga(fetchWorker)
        .provide([[call(fetchItemsFromApi), items]])
        .put(fetchSuccess(items))
        .run();
});

it('check error handling', () => {
    const error = new Error('Whoops:(');
    return expectSaga(fetchWorker)
        .provide([[call(fetchItemsFromApi), throwError(error)]])
        .put(fetchFailure())
        .run()
});
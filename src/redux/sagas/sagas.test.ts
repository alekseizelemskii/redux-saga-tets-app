import * as matchers from 'redux-saga-test-plan/matchers';
import { expectSaga } from 'redux-saga-test-plan';
import { fetchWorker, fetchItemsFromApi } from './index';
import { fetchFailure, fetchSuccess } from '../action-creators';
import { throwError } from 'redux-saga-test-plan/providers';


const data =
{
    img: "img",
    asin: "string",
    price: "string",
    bsr_category: "string",
    link: "string",
    name: "string"
}


describe('get Product', () => {
    it('Get product seccuss', () => {
        return expectSaga(fetchWorker)
            .provide([[matchers.call.fn(fetchItemsFromApi), {items: {json: data}}]])
            .put(fetchSuccess(data)
            .run()
    });
    it('Throws error', () => {
        return expectSaga(fetchWorker)
            .provide([[matchers.call.fn(fetchItemsFromApi), throwError()]])
            .put(fetchFailure())
            .run()
    }); 
});



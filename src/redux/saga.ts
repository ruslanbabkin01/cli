import {takeEvery, put, call} from 'redux-saga/effects';
import {fetchCurrencies} from '../api/currenciesAPI';
import {ICurrencie} from '../interfaces/types';
import {CURRENCIES_FETCH_REQUESTED, FETCH_CURRENCIES} from './actionTypes';

// saga workers
function* getCurrenciesAction() {
  try {
    const currencies: ICurrencie[] = yield call(fetchCurrencies);
    yield put({type: FETCH_CURRENCIES, payload: currencies});
  } catch (error) {
    console.log(error);
  }
}

export function* rootSaga() {
  yield takeEvery(CURRENCIES_FETCH_REQUESTED, getCurrenciesAction);
}

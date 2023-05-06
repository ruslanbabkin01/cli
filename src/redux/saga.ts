import {takeEvery, put} from 'redux-saga/effects';
import {fetchCurrencies} from '../api/currenciesAPI';
import {ICurrencie} from '../interfaces/types';
import {CURRENCIES_FETCH_REQUESTED, FETCH_CURRENCIES} from './actionTypes';

function* getCurrenciesAction() {
  try {
    const currencies: ICurrencie[] = yield fetchCurrencies();
    yield put({type: FETCH_CURRENCIES, payload: currencies});
  } catch (error) {
    console.log(error);
  }
}

export function* rootSaga() {
  yield takeEvery(CURRENCIES_FETCH_REQUESTED, getCurrenciesAction);
  // yield takeEvery("UPDATE_TODO_REQUESTED", updateTodoAction);
  // yield takeEvery("DELETE_TODO_REQUESTED", deleteTodoAction);
  // yield takeEvery("CREATE_TODO_REQUESTED", createTodoAction);
}

// function* createTodoAction({
//   payload,
// }: {
//   type: "CREATE_TODO_REQUESTED";
//   payload: string;
// }) {
//   yield createTodo(payload);
//   yield put({ type: "TODOS_FETCH_REQUESTED" });
// }

// export function* sagaObserver() {
//   yield takeEvery(FETCH_CURRENCIES, sagaWorker);
// }

// function* sagaWorker() {
//   try {
//     const currencies = yield call(fetchCurrencies);
//     yield put({type: FETCH_CURRENCIES, payload: currencies});
//   } catch (e) {
//     console.log(e);
//   }
// }

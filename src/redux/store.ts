import {currenciesReducer} from './currenciesReducer';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

const saga = createSagaMiddleware();

// const rootReducer = combineReducers({currenciesReducer});

export const store = createStore(
  currenciesReducer,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(rootSaga);

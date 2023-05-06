import {currenciesReducer} from './currenciesReducer';
import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {rootSaga} from './saga';

const saga = createSagaMiddleware();

// const rootReducer = combineReducers({curReducer: currenciesReducer});

export const store = createStore(
  currenciesReducer,
  composeWithDevTools(applyMiddleware(saga)),
);

saga.run(rootSaga);

// Задание 1
// Инициализируйте Redux в мобильном приложении.
// Создайте корзину для покупок криптовалют с использованием Redux.
// Должна содержать минимум 8 наименований товаров.
// Пример:
// https://codesandbox.io/s/github/reduxjs/redux/tree/master/examples/shopping-cart

// Задание 2
// Добавьте к корзине аналог кошелька пользователя с которого будут списываться средства при
// нажатии кнопки checkout.

// Задание 3
// При  помощи  запроса  в  Redux  Saga  получить  8  первых  названий  криптовалют  для  списка  и
// заменить существующие на полученные.
// Адрес для запроса:
// https://api.coingecko.com/api/v3/coins/listoin

// Пример запроса для командной строки:
// curl -X GET "https://api.coingecko.com/api/v3/coins/list" -H "accept: application/json"

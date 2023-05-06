import {FETCH_CURRENCIES} from './actionTypes';
// import {ICurrencie} from '../interfaces/types';

const initialState = {
  currencies: [],
};

export const currenciesReducer = (
  state = initialState,
  action: {type: FETCH_CURRENCIES; payload: any},
) => {
  switch (action.type) {
    case FETCH_CURRENCIES:
      return {...state, currencies: state.currencies.concat(action.payload)};
    default:
      return state;
  }
};

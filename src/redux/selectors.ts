import {ICurrencie} from '../interfaces/types';

export const selectCurrencies = (state: {
  currencies: ICurrencie[];
}): ICurrencie[] => state.currencies;

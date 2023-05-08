import axios from 'axios';
import {ICurrencie} from '../interfaces/types';

axios.defaults.baseURL =
  'https://645606bd2e41ccf1691210f3.mockapi.io/api/currencies';

export async function fetchCurrencies(): Promise<ICurrencie[]> {
  const {data} = await axios.get('');
  return data;
}

export async function deleteCurrencie(currencieId: string) {
  const response = await axios.delete(currencieId);
  return response.data;
}

// export async function addCurrencies(currencie) {
//   const {data} = await axios.post('', currencie);
//   return data;
// }

import React, {useEffect} from 'react';
import {ScrollView, Text} from 'native-base';
import CurrencieItem from './CurrencieItem';
import {useDispatch, useSelector} from 'react-redux';
import {selectCurrencies} from '../redux/selectors';
import {getCurrenciesAction} from '../redux/actions';

const CurrenciesList: React.FC = () => {
  const currencies = useSelector(selectCurrencies);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCurrenciesAction());
  }, []);

  return (
    <ScrollView>
      <Text>Sale of currency</Text>
      {currencies?.map(item => (
        <CurrencieItem
          key={item.id}
          name={item.name}
          code={item.code}
          symbol={item.symbol}
          price={item.price}
          id={item.id}
        />
      ))}
    </ScrollView>
  );
};

export default CurrenciesList;

import {Card, Text} from 'native-base';
import {Button} from 'react-native';
import React from 'react';
import {ICurrencie} from '../interfaces/types';

interface ICurrencieItemProps extends ICurrencie {}

const CurrencieItem: React.FC<ICurrencieItemProps> = ({
  name,
  symbol,
  price,
  code,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  id,
}) => {
  return (
    <Card>
      <Text>
        {name}, {symbol}
      </Text>
      <Text>Code: {code}</Text>
      <Text>Price: {price}</Text>
      <Button title="Buy" />
    </Card>
  );
};

export default CurrencieItem;

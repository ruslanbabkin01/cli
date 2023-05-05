import React from 'react';
import {Button, Text} from 'native-base';
import {SafeAreaView} from 'react-native';

interface DetailsScreenProps {
  navigation: any;
}

const DetailsScreen: React.FC<DetailsScreenProps> = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text>Details Page</Text>
      <Button onPress={() => navigation.navigate('Profile')}>toProfile</Button>
      <Button
        onPress={() => navigation.navigate('Home', {home: 'From Details'})}>
        toHome
      </Button>
    </SafeAreaView>
  );
};

export default DetailsScreen;

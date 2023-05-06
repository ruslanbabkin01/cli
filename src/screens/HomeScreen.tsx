import React from 'react';
import {Button, ScrollView} from 'native-base';
import {SafeAreaView} from 'react-native';
import CurrenciesList from '../components/CurrenciesList';

interface HomeScreenProps {
  navigation: any;
  route?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView>
        <Button
          onPress={() =>
            navigation.navigate('Profile', {profile: 'From Home'})
          }>
          toProfile
        </Button>
        {/* <Text>{route.params.home}</Text> */}
        <CurrenciesList />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

import {Button, Text} from 'native-base';
import React from 'react';
import {SafeAreaView} from 'react-native';

interface HomeScreenProps {
  navigation: any;
  route?: any;
}

const HomeScreen: React.FC<HomeScreenProps> = ({navigation, route}) => {
  return (
    <SafeAreaView style={{flex: 1, alignItems: 'center'}}>
      <Text>Home Page</Text>
      <Button
        onPress={() => navigation.navigate('Profile', {profile: 'From Home'})}>
        toProfile
      </Button>
      {/* <Text>{route.params.home}</Text> */}
    </SafeAreaView>
  );
};

export default HomeScreen;

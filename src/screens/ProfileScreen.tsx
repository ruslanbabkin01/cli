import React from 'react';
import {View} from 'react-native';
import SelectList from '../components/SelectList';
import {Button, Text} from 'native-base';

interface ProfileScreenProps {
  navigation: any;
  route?: any;
}

const ProfileScreen: React.FC<ProfileScreenProps> = ({navigation, route}) => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Text>Profile Page</Text>
      {/* <Text>{route.params.profile}</Text> */}
      <Button onPress={() => navigation.navigate('Details')}>toDetails</Button>
      <SelectList />
    </View>
  );
};

export default ProfileScreen;

/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {NativeBaseProvider} from 'native-base';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

const TabNavigator = createBottomTabNavigator();
const MyStack = createNativeStackNavigator();

const TabPage = () => {
  return (
    <TabNavigator.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          if (route.name === 'Home') {
            iconName = focused
              ? 'ios-information-circle'
              : 'ios-information-circle-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'ios-list' : 'ios-list-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: 'gray',
        headerShown: false,
      })}>
      <TabNavigator.Screen name="Home" component={HomeScreen} />
      <TabNavigator.Screen name="Profile" component={ProfileScreen} />
    </TabNavigator.Navigator>
  );
};

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <SafeAreaView style={styles.sectionContainer}>
          <MyStack.Navigator
            initialRouteName="TabPage"
            screenOptions={{headerShown: false}}>
            <MyStack.Screen name="TabPage" component={TabPage} />
            <MyStack.Screen name="Details" component={DetailsScreen} />
          </MyStack.Navigator>
        </SafeAreaView>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
    flex: 1,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

// import Task2 from './src/components/Task2';
// import Task1 from './src/components/Task1';
import {NativeBaseProvider} from 'native-base';
import Task3 from './src/components/Task3';

function App(): JSX.Element {
  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.sectionContainer}>
        {/* <Task1 />
        <Task2 /> */}
        <Task3 />
      </SafeAreaView>
    </NativeBaseProvider>
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

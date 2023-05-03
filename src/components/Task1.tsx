import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  Image,
  Button,
  Text,
  View,
} from 'react-native';

function Task1(): JSX.Element {
  const [click, setClick] = useState(0);
  const [text, onChangeText] = useState('');

  function clickHandlerBtn() {
    setClick(prev => prev + 1);
    console.log(click);
  }
  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
      />
      <Text style={styles.text}>{text}</Text>
      <Button
        onPress={clickHandlerBtn}
        title="Click me"
        color="#841584"
        accessibilityLabel="Click me about this purple button"
      />
      <View style={styles.imageContainer}>
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
        <Image
          style={styles.tinyLogo}
          source={{
            uri: 'https://reactnative.dev/img/tiny_logo.png',
          }}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
    flex: 1,
    display: 'flex',
  },
  text: {
    fontSize: 20,
    justifyContent: 'center',
  },
  imageContainer: {
    marginTop: 20,
    flex: 1,
    display: 'flex',
    flexDirection: 'row',
    marginHorizontal: 16,
    justifyContent: 'space-evenly',
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  input: {
    borderWidth: 1,
    borderColor: '#a9a9a9',
    height: 50,
    padding: 16,
    borderRadius: 8,
    backgroundColor: '#f5f5dc',
    marginTop: 16,
    marginHorizontal: 16,
  },
});

export default Task1;

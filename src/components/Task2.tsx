import React, {useState} from 'react';
import {
  TextInput,
  StyleSheet,
  ScrollView,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';

function Task2(): JSX.Element {
  const [R, setR] = useState('');
  const [G, setG] = useState('');
  const [B, setB] = useState('');
  const [active, setActive] = useState(false);
  return (
    <ScrollView style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setR}
        value={R}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setG}
        value={G}
        keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        onChangeText={setB}
        value={B}
        keyboardType="numeric"
      />
      <TouchableOpacity
        style={styles.btnClick}
        onPress={() => setActive(!active)}>
        <Text>Click me</Text>
      </TouchableOpacity>
      <View
        style={{
          ...(active ? styles.bigBox : styles.smallButton),
          backgroundColor: `rgb(${R}, ${G}, ${B})`,
          marginHorizontal: 16,
        }}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 20,
  },
  bigBox: {
    width: 200,
    height: 50,
  },
  smallButton: {
    width: 50,
    height: 20,
  },
  input: {
    borderWidth: 1,
    height: 50,
    padding: 16,
    borderRadius: 8,
    marginTop: 16,
    marginHorizontal: 16,
  },
  btnClick: {
    borderRadius: 50,
    marginVertical: 20,
    width: 100,
    padding: 8,
    marginHorizontal: 16,
    alignItems: 'center',
    backgroundColor: '#ff7f50',
  },
});

export default Task2;

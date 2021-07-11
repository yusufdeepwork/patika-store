/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.appTitle}>PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder="Ara.." />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    marginBottom: 3,
    color: 'purple',
  },
  textInput: {
    margin: 10,
    marginTop: 3,
    backgroundColor: 'rgb(239,239,239)',
    padding: 10,
    borderRadius: 10,
  },
});

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet, Text} from 'react-native';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={styles.appTitle}>PATIKASTORE</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  appTitle: {
    fontSize: 25,
    fontWeight: 'bold',
    margin: 10,
    color: 'purple',
  },
});

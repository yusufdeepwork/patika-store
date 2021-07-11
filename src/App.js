/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
} from 'react-native';
import product_data from './product_data';
import ProductCard from './components/ProductCard';

const App = () => {
  const renderProducts = ({item}) => <ProductCard data={item} />;
  console.log(product_data);
  return (
    <SafeAreaView>
      <Text style={styles.appTitle}>PATIKASTORE</Text>
      <TextInput style={styles.textInput} placeholder="Ara.." />
      <FlatList
        data={product_data}
        renderItem={renderProducts}
        numColumns={2}
        contentContainerStyle={{paddingBottom: 150}}
      />
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

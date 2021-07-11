import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const ProductCard = ({data}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{uri: data.imgURL}}
        resizeMode={'contain'}
      />
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.price}>{data.price}</Text>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(239,239,239)',
    margin: 10,
    borderRadius: 10,
    padding: 5,
  },
  image: {
    height: 200,
    margin: 10,
    borderRadius: 2,
  },
  title: {
    marginLeft: 10,
    fontSize: 19,
    fontWeight: 'bold',
  },
  price: {
    marginLeft: 10,
    color: 'gray',
    fontWeight: '400',
  },
});

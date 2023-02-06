import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const Categories = ( { navigation}) => {
  return (
    <View style={styles.container}> 
      <Text>Categories</Text>
      <Button title='Ver Items' onPress={() => navigation.navigate('Items')}/>
    </View>
  );
};


export default Categories;
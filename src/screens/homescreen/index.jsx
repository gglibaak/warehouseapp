import React from 'react';
import { View, Text, Button } from 'react-native';
import { styles } from './styles';

const HomeScreen = ( { navigation }) => {
  return (
    <View style={styles.container}>
      <Text >Home Screen</Text>
      <Button title='Ver listado de Items' onPress={() => navigation.navigate('Categories')}/>
    </View>
  );
};


export default HomeScreen;
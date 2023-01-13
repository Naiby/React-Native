import React from 'react'
import { Text, View, StyleSheet } from 'react-native';

export const BoxObjextModelScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Box object Model</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    backgroundColor: 'red',
  },
    title: {
      fontSize:20,
      // backgroundColor: 'red', // test with a strong color to know the size of the element
    }
});
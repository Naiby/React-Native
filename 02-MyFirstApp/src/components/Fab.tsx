import React from 'react'
import { StyleSheet, Text, TouchableNativeFeedback, View, Platform, TouchableOpacity } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface Props {
  title: string
  position?: 'br' | 'bl'
  onPress: () => void
}


export const Fab = ({ title, position = 'bl', onPress }: Props) => {
  const ios = () => {
    return (

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={onPress}
        style={
          [style.fabLocation,
          (position == 'bl')
            ? style.left
            : style.right]
        }
      >
        <View style={style.fab}>
          <Text style={style.fabText}>{title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
  const android = () => {
    return (
      <View
        style={
          [style.fabLocation,
          (position == 'bl')
            ? style.left
            : style.right]
        }>
        <TouchableNativeFeedback
          onPress={onPress}
          background={TouchableNativeFeedback.Ripple('#284256', false, 30)}
        >
          <View style={style.fab}>
            <Text style={style.fabText}>{title}</Text>
          </View>
        </TouchableNativeFeedback>

      </View>
    )
  }

  return (Platform.OS === 'ios') ? ios() : android();

}

const style = StyleSheet.create({
  fabLocation: {
    bottom: 25,
    position: 'absolute',
  },
  right: {
    right: 25
  },
  left: {
    left: 25
  },
  fab: {
    backgroundColor: '#5856D6',
    borderRadius: 100,
    height: 60,
    justifyContent: 'center',
    width: 60,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  fabText: {
    // textAlign: 'center',
    alignSelf: 'center',
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  }
})
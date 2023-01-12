import { useState } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { Fab } from '../components/Fab';
export const CounterScreen = () => {

    const [counter, setCounter] = useState(10)
    return (
        <View style={style.container}>
            <Text style={style.title}>Coounter : {counter}</Text>
            {/* <Button
        title='Click'
        onPress={()=> setCounter(counter + 1)}
        // color='red'
        /> */}
            {/* <TouchableOpacity
                onPress={() => setCounter(counter + 1)}
                style={style.fabLocationBR}
            >
                <View style={style.fab}>
                    <Text style={style.fabText}>+1</Text>
                </View>
            </TouchableOpacity> */}
            <Fab
            title='-1'
            onPress={() => setCounter(counter - 1)}
            />
            <Fab
            title='+1'
            onPress={() => setCounter(counter + 1)}
            position='br'
            />
           
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
    },
    title: {
        fontSize: 40,
        // position:'relative',
        textAlign: 'center',
        top: -10
    }
})
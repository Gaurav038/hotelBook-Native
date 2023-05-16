import React from 'react'
import { Text ,StyleSheet, View, Pressable} from 'react-native'
import { Ionicons } from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={headerStyle.container}>
        <Pressable style={headerStyle.item}>
            <Ionicons name="bed-sharp" size={26} color="white" />
            <Text style={headerStyle.itemText} >Stay</Text>
        </Pressable>
        <Pressable style={headerStyle.item}>
            <Ionicons name="ios-airplane-outline" size={26} color="white" />
            <Text style={headerStyle.itemText} >Flights</Text>
        </Pressable>
        <Pressable style={headerStyle.item}>
            <Ionicons name="car-outline" size={26} color="white" />
            <Text style={headerStyle.itemText} >Car Rent</Text>
        </Pressable>
    </View>
  )
}

export default Header

const headerStyle = StyleSheet.create({
    container: {
        backgroundColor: '#0e1111',
        height: 65,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    item:{
        flexDirection: 'row',
         alignItems: 'center',
         borderColor: 'white',
         justifyContent: 'center',
         borderWidth: 1,
         borderRadius: 25,
         padding: 5,
         width: '30%'
    },
    itemText:{
        color: 'white',
        marginLeft: 8,
        fontWeight: 'bold',
        fontSize: 15
    }

})

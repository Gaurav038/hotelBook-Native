import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import TabNavigator from './src/navigator/TabNavigator'
import MovieDetails from './src/screens/MovieDetails'
import SeatBooking from './src/screens/SeatBooking'


const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name='Tab' component={TabNavigator} options={{animation:'default'}} />
        <Stack.Screen name='MovieDetail' component={MovieDetails} options={{animation:'slide_from_right'}} />
        <Stack.Screen name='Booking' component={SeatBooking} options={{animation: 'slide_from_bottom'}} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({})
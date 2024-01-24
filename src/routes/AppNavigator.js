import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from '../screens/Splash/SplashScreen'
import HomeScreen from '../screens/Home/HomeScreen'
import VideoPlayer from '../screens/VideoPlayer/VideoPlayer'

const Stack = createNativeStackNavigator()

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName='Splash' screenOptions={{headerShown:false}}>
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Splash' component={SplashScreen} />
        <Stack.Screen name='VideoPlayer' component={VideoPlayer} />
    </Stack.Navigator>
  )
}

export default AppNavigator
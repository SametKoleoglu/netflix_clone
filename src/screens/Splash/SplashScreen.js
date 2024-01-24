import { StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import colors from '../../utils/Theme'
colors


const SplashScreen = ({navigation}) => {

  useEffect(()=>{
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  },[])

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor='transparent' hidden />
      <Image source={{uri:'https://miro.medium.com/v2/resize:fit:1400/1*ehJUoLjFHvstZs1jUPTG0Q.png'}} style={styles.logo} />
    </SafeAreaView>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:colors.primary,
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:20
  },
  logo:{
    width:'75%',
    height:200
  }
})
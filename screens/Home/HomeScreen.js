import { View, Text, SafeAreaView } from 'react-native'
import { StatusBar } from "expo-status-bar"; 
import React from 'react'

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1">
      <Text>HomeScreen</Text>
      <StatusBar style="dark" translucent={false} backgroundColor={"#fff"}/>
    </SafeAreaView>
  )
}

export default HomeScreen
import {
  View,
  Text,
  ImageBackground,
  StatusBar,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { useNavigation } from "@react-navigation/native";

const Onboarding = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require("../../assets/banner.jpeg")}
      className="flex-1 w-full object-cover"
    >
      <LinearGradient
        className="absolute top-0 bottom-0 right-0 left-0"
        colors={["rgba(0,0,0,0.8)", "rgba(0,0,0,0.9)"]}
      >
        <SafeAreaView className="w-full absolute bottom-6">
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            activeOpacity={0.9}
            className="mx-4 py-3 bg-red-600 rounded-xl shadow-md items-center justify-between"
          >
            <Text className="text-lg text-white font-bold capitalize tracking-wider">
              explore now
            </Text>
          </TouchableOpacity>
        </SafeAreaView>
      </LinearGradient>
      <StatusBar
        barStyle={"light-content"}
        translucent={true}
        backgroundColor="transparent"
      />
    </ImageBackground>
  );
};

export default Onboarding;

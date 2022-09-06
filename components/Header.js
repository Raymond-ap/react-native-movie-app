import { View, Text, Image } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="px-4 py-2">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-black text-lg font-bold">Hi there!</Text>
          <Text className="text-gray-600 text-xs">See what's next</Text>
        </View>
        <View className="w-12 h-12 rounded-full border-4 items-center justify-center border-red-500">
          <Image
            source={require("../assets/profile.jpg")}
            className="w-11 h-11 rounded-full"
          />
        </View>
      </View>
    </View>
  );
};

export default Header;

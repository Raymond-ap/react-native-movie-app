import { View, Text } from "react-native";
import React from "react";

const Header = () => {
  return (
    <View className="px-4 py-2">
      <View className="flex-row items-center justify-between">
        <View>
          <Text className="text-white text-lg font-bold">Hi there!</Text>
          <Text className="text-gray-400 text-xs">See what's next</Text>
        </View>
        <View className="w-11 h-11 bg-white rounded-full border-2 border-red-500" />
      </View>
    </View>
  );
};

export default Header;

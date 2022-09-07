import { View, Text, SafeAreaView, TextInput, ScrollView } from "react-native";
import React, { useState, useEffect } from "react";
import { FeaturedRow, Header, Statusbar } from "../../components";
import { Ionicons } from "@expo/vector-icons";

const HomeScreen = () => {
  return (
    <SafeAreaView className="flex-1 bg-neutral-900">
      <ScrollView showsVerticalScrollIndicator={false}>
        <Header />
        <FeaturedRow lable={"upcoming"} />
        <FeaturedRow lable={"trending"} />
        <FeaturedRow lable={"popular"} />
        <FeaturedRow lable={"top rated"} />
      </ScrollView>
    </SafeAreaView>
  );
};

const SearchInput = () => {
  return (
    <View className="my-3 bg-gray-300 px-2 py-1 mx-4 rounded-md flex-row items-center">
      <Ionicons name="search" size={20} color="gray" />
      <TextInput
        placeholder="Search Movies"
        className="flex-1 w-full px-2 py-2 text-white"
        placeholderTextColor={"gray"}
      />
    </View>
  );
};

export default HomeScreen;

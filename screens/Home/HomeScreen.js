import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  ActivityIndicator,
  RefreshControl
} from "react-native";
import React, { useState, useEffect } from "react";
import { FeaturedRow, Header, Movie, Statusbar } from "../../components";
import { Ionicons } from "@expo/vector-icons";
import useAuth from "../../hooks/useAuth";

const HomeScreen = () => {
  const { popular, topRated, trending, upcoming, loading, onRefresh } = useAuth();
  if (loading) {
    <SafeAreaView className="flex-1 bg-black grid items-center justify-center">
      <ActivityIndicator size={"large"} color={"white"} />
    </SafeAreaView>;
  }
  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView 
      refreshControl={<RefreshControl refreshing={loading} onRefresh={onRefresh} />}
      showsVerticalScrollIndicator={false}>
        <Header />
        <FeaturedRow lable={"upcoming"} render={<Movie data={upcoming} />} />
        <FeaturedRow lable={"trending"} render={<Movie data={trending} />} />
        <FeaturedRow lable={"popular"} render={<Movie data={popular} />} />
        <FeaturedRow lable={"top rated"} render={<Movie data={topRated} />} />
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

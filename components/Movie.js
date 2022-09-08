import { View, Text, Image, FlatList, TouchableOpacity } from "react-native";
import React from "react";

const Movie = ({ data }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(_, index) => index.toString()}
      renderItem={({ item }) => (
        <TouchableOpacity activeOpacity={0.9} className="h-48 w-32 mx-2">
          <Image 
          source={{ uri: `https://image.tmdb.org/t/p/w500${item.poster_path}` }}
          className="h-full w-full object-cover rounded-lg" />
        </TouchableOpacity>
      )}
    />
  );
};

export default Movie;

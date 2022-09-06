import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";
import useAuth from "../hooks/useAuth";
import { LinearGradient } from "expo-linear-gradient";
import { Ionicons } from "@expo/vector-icons";

const MovieSeries = () => {
  const { episodes } = useAuth();
  const [groupedEpisodes, setGroupedEpisodes] = React.useState([]);

  React.useEffect(() => {}, []);

  return (
    <View className="my-2">
      <Text className="px-4 capitalize font-bold text-black text-lg tracking-wider mb-2">
        episodes
      </Text>
      <View className="my-2">
        <FlatList
          horizontal
          showsHorizontalScrollIndicator={false}
          data={episodes}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => <Episode item={item} />}
        />
      </View>
    </View>
  );
};

const Episode = ({ item }) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      className="w-72 h-44 mx-2 rounded-md shadow-md"
    >
      <Image
        source={{ uri: item.serie.image }}
        className="w-full h-full rounded-md object-cover"
      />
      <LinearGradient
        colors={["rgba(0,0,0,0.1)", "rgba(0,0,0,0.9)"]}
        className="absolute top-0 left-0 right-0 bottom-0 rounded-md"
      >
        <View className="flex-1 justify-end">
          <Text className="px-2 text-gray-400 text-sm font-bold mb-1">
            {item.title}
          </Text>
          <View className="mb-3 flex-row items-center justify-between">
            <Text className="px-2 text-white text-base tracking-wider font-bold">
              {item.serie.title}
            </Text>
            <View>
              <View className="flex items-end justify-end">
                <Text className="px-2 text-white text-sm tracking-wider font-bold">
                  <Text className="">{item.serie.rating}&nbsp;</Text>ratings
                </Text>
                <Text className="px-2 text-white text-sm tracking-wider font-bold">
                  {item.serie.year}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default MovieSeries;

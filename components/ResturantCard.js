import { View, Text, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { MapIcon, MapPinIcon, StarIcon } from "react-native-heroicons/outline";
import { urlFor } from "../sanity";
import { Navigator, useNavigation, useRouter } from "expo-router";
import { useDispatch } from "react-redux";
import { addRestaurant } from "../features/restaurantSlice";
urlFor;
const ResturantCard = ({
  id,
  imgUrl,
  title,
  rating,
  genre,
  address,
  short_desc,
  dishes,
  long,
  lat,
}) => {
  const route = useRouter();
  const dispatch = useDispatch();
  return (
    <TouchableOpacity
      onPress={() => {
        route.push({
          pathname: "restaurant",
        }),
          dispatch(
            addRestaurant({
              id,
              imgUrl,
              title,
              rating,
              genre,
              address,
              short_desc,
              dishes,
              long,
              lat,
            })
          );
      }}
      className="bg-white mr-3 shadow-sm mmax-w-64"
    >
      <Image
        source={{ uri: urlFor(imgUrl).url() }}
        className="w-64 h-36 rounded-sm "
      />
      <View className="px-3 pb-4 ">
        <Text className="font-bold text-lg pt-2">{title}</Text>
        <View className="flex-row space-x-1 items-center">
          <StarIcon color="green" opacity={0.5} size={22} />
          <Text className="text-xs text-green-500">
            {rating}
            <Text className=" text-gray-500"> · {genre}</Text>
          </Text>
        </View>
        <View className="flex-row space-x-1 items-center">
          <MapPinIcon color="green" opacity={0.5} size={22} />
          <Text className=" text-gray-500 ">
            Nearby · <Text className="truncate">{address}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ResturantCard;

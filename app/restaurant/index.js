import { View, Text } from "react-native";
import React, { useEffect, useLayoutEffect, useState } from "react";

import { Sanityclient, urlFor } from "../../sanity";
import { Image } from "react-native";
import { ScrollView } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";
import {
  ArrowLeftIcon,
  MapPinIcon,
  QuestionMarkCircleIcon,
  StarIcon,
} from "react-native-heroicons/outline";
import Basket from "../../components/Basket";
import DishRow from "../../components/DishRow";

const Resturant = () => {
  const navigation = useNavigation();
  const restu = useSelector((state) => state.restaurant.restu);
  const {
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
  } = restu;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: "Testing",
      headerShown: false,
    });
  }, []);

  return (
    <>
      <Basket />
      <ScrollView>
        <View className="relative">
          {imgUrl && (
            <Image
              source={{
                uri: urlFor(imgUrl).url(),
              }}
              className=" h-60 w-69 bg-gray-300 border-b-2"
            />
          )}
          <TouchableOpacity
            className="absolute left-5 top-14 p-2 bg-gray-200 rounded-full"
            onPress={navigation.goBack}
          >
            <ArrowLeftIcon color="#00ccbb" size={20} />
          </TouchableOpacity>
        </View>

        <View className="bg-white border-t-2 border-gray-400/20">
          <View className="px-4 pt-4">
            <Text className="text-3xl font-bold">{title}</Text>
            <View className="flex-row my-1 space-x-2">
              <View className="flex-row items-center space-x-1">
                <StarIcon size={22} color="green" opacity={1.5} />
                <Text className="text-xs text-green-500">
                  {rating}
                  <Text className=" text-gray-500"> · {genre}</Text>
                </Text>
              </View>

              <View className="flex-row items-center space-x-1">
                <MapPinIcon size={22} color="green" opacity={1.5} />
                <Text className="text-xs text-green-500">
                  Nearby
                  <Text className=" text-gray-500"> · {address}</Text>
                </Text>
              </View>
            </View>
            <Text className="mt-2 pb-4 text-gray-400">{short_desc}</Text>
          </View>

          <TouchableOpacity className="flex-row items-center space-x-2 p-4 border-y border-gray-300">
            <QuestionMarkCircleIcon color="gray" size={20} opacity={0.5} />
            <Text className="pl-2 flex-1 text-md font-bold">
              Have a food allergy?
            </Text>
          </TouchableOpacity>
        </View>

        <View className="pb-32">
          <Text className="pt-6 mb-3 font-bold text-xl ">Menu</Text>
          {dishes?.map((dish) => (
            <DishRow
              key={dish._id}
              id={dish._id}
              name={dish.name}
              desc={dish.short_desc}
              price={dish.price}
              image={dish.image}
            />
          ))}
        </View>

        {/* {dishrow} */}
      </ScrollView>
    </>
  );
};

export default Resturant;

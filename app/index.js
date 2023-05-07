import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Stack } from "expo-router";
import { Image } from "react-native";
import {
  AdjustmentsVerticalIcon,
  ChevronDownIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "react-native-heroicons/outline";
import Categories from "../components/Categories";
import FeaturedRow from "../components/FeaturedRow";
import { Sanityclient } from "../sanity";
import "react-native-url-polyfill/auto";

export { ErrorBoundary } from "expo-router";

const index = () => {
  const [FeaturedCategories, setFeaturedCategories] = useState();
  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == "featured"]{
    ...,
    restaurants[]->{
        ...,
        dishes[]->
    }
}`
    ).then((data) => setFeaturedCategories(data));
  }, []);

  return (
    <SafeAreaView className="bg-white pt-5">
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <View className="flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="h-7 w-7 bg-gray-200 p-4 rounded-full"
        />

        <View className="flex-1">
          <Text className="font-bold text-xs text-gray-400">Deliver NOw!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>

        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search */}

      <View>
        <View className="flex-row space-x-2 pb-2 px-4">
          <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3">
            <MagnifyingGlassIcon size={20} />
            <TextInput
              placeholder="Restaurants and Cuisines"
              keyboardType="default"
            />
          </View>
          <TouchableOpacity className="flex justify-center items-center">
            <AdjustmentsVerticalIcon size={25} color="#00ccbb" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Body */}

      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 150,
        }}
      >
        <Categories />
        {FeaturedCategories?.map((category) => (
          <FeaturedRow
            key={category._id}
            id={category._id}
            title={category.name}
            desc={category.short_desc}
          />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default index;

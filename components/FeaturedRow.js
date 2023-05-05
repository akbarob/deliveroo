import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import ResturantCard from "./ResturantCard";
import { Sanityclient } from "../sanity";

const FeaturedRow = ({ id, title, desc }) => {
  console.log(id);
  const [restaurants, setRestaurants] = useState([]);
  useEffect(() => {
    Sanityclient.fetch(
      `*[_type == 'featured' && _id == $id] {
        ...,
        restaurants[]->{
          ...,
          dishes[]->,
          type->{
            name
            }
        }
      }[0]`,
      { id }
    )
      .then((data) => setRestaurants(data?.restaurants))
      .catch(console.error);
    // console.log("frow", restaurants);
  }, [id]);

  return (
    <View className="">
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-xs text-gray-500 px-4">{desc}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: 15,
        }}
        className="py-4"
      >
        {/* Resterant cards */}
        {restaurants.map((restaurant) => (
          <ResturantCard
            key={restaurant._id}
            id={restaurant._id}
            imgUrl={restaurant.image}
            title={restaurant.name}
            rating={restaurant.rating}
            genre={restaurant.type.name}
            address={restaurant.address}
            short_desc={restaurant.short_desc}
            dishes={restaurant.dishes}
            long={restaurant.long}
            lat={restaurant.lat}
          />
        ))}
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;

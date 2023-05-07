import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import { Link, useNavigation, useRouter } from "expo-router";
import { selectBastketTotal } from "../features/basketSlice";
import Currency from "react-currency-formatter";

const Basket = () => {
  const items = useSelector((state) => state.basket.items);
  const BasketTotal = useSelector(selectBastketTotal);
  const route = useRouter();
  if (items.length === 0) return null;

  return (
    <View className="absolute bottom-8 w-full z-50 px-4 ">
      <TouchableOpacity
        className="bg-[#00ccbb] p-4 rounded-lg flex-row  items-center space-x-10"
        onPress={() => route.push(`/modal/basketModal`)}
      >
        <View className=" bg-[#01a296] rounded-lg ">
          <Text className="text-white font-extrabold text-lg py-1 px-2 ">
            {items.length}
          </Text>
        </View>

        <Text className="flex-1 text-white font-extrabold text-lg text-center">
          View Basket
        </Text>
        <Text className="text-lg text-white font-extrabold">
          <Currency quantity={BasketTotal} currency="NGN" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Basket;

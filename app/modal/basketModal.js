import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SafeAreaView } from "react-native";
import { Link, Stack, useNavigation, useRouter } from "expo-router";
import { TouchableOpacity } from "react-native";
import { XCircleIcon } from "react-native-heroicons/outline";
import { Image } from "react-native";
import { urlFor } from "../../sanity";
export { ErrorBoundary } from "expo-router";
import Currency from "react-currency-formatter";
import {
  removeFromBasket,
  selectBastketTotal,
} from "../../features/basketSlice";

const BasketScreen = () => {
  const dispatch = useDispatch();
  const route = useRouter();
  const navigation = useNavigation();
  const isPresented = navigation.canGoBack();

  const [isReady, setReady] = useState(false);
  const restaurant = useSelector((state) => state.restaurant.restaurant);
  const items = useSelector((state) => state.basket.items);
  const BasketTotal = useSelector(selectBastketTotal);
  const [groupedItemsInBasket, setGroupedItemsInBasket] = useState([]);

  useMemo(() => {
    const groupedItems = items.reduce((results, item) => {
      (results[item.id] = results[item.id] || []).push(item);
      return results;
    }, {});

    setGroupedItemsInBasket(groupedItems);
  }, [items]);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {!isPresented && <Link href="../">Dismiss</Link>}
      <View className="flex-1 bg-gray-100">
        <View className=" p-5 border-b border-b-[#00ccbb] bg-white shadow-sm">
          <View className="">
            <Text className="text-lg font-bold text-center">BasketScreen</Text>
            <Text className="text-2xl text-gray-500 text-center ">
              {restaurant.title}
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => route.back()}
            className="rounded-full absolute top-3 right-5"
          >
            <XCircleIcon color="#00ccbb" size={50} />
          </TouchableOpacity>
        </View>

        <View className="flex-row items-center space-x-2 px-4 my-3 py-3 bg-white">
          <Image
            source={{ uri: "https://links.papareact.com/wru" }}
            className="h-7 w-7 bg-gray-300 p-4 rounded-full"
          />
          <Text className="flex-1">Deliver in 45-60 mins</Text>
          <TouchableOpacity onPress={() => route.back()} className="">
            <Text className="text-[#00ccbb] text-center">Change</Text>
          </TouchableOpacity>
        </View>

        <ScrollView className="divide-y divide-gray-200">
          {Object.entries(groupedItemsInBasket).map(([key, items]) => (
            <View
              key={key}
              className="flex-row items-center space-x-3 bg-white py-2 px-5"
            >
              <Text className="text-[#00ccbb]">{items.length} x </Text>
              <Image
                source={{ uri: urlFor(items[0]?.image).url() }}
                className="w-12 h-12 rounded-full"
              />
              <Text className="flex-1">{items[0]?.name}</Text>
              <Text>
                <Currency quantity={items[0]?.price} currency="NGN" />
              </Text>
              <TouchableOpacity onPress={() => dispatch(removeFromBasket(key))}>
                <Text>Remove</Text>
              </TouchableOpacity>
            </View>
          ))}
        </ScrollView>

        <View className="p-5 bg-white mt-5 space-y-4">
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Subtotal</Text>
            <Text className="text-gray-400">
              <Currency quantity={BasketTotal} currency="NGN" />
            </Text>
          </View>

          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="text-gray-400">
              <Currency quantity={1200} currency="NGN" />
            </Text>
          </View>
          <View className="flex-row justify-between ">
            <Text className="text-gray-400">Delivery Fee</Text>
            <Text className="font-black text-black">
              <Currency quantity={1200 + BasketTotal} currency="NGN" />
            </Text>
          </View>
          <TouchableOpacity
            className="rounded-lg bg-[#00ccbb] p-4"
            onPress={() => {
              // alert("yes"),
              // route.back(),
              route.replace({ pathname: "preparingOrder" });
            }}
          >
            <Text className="text-center font-bold text-lg text-white">
              Place Order
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default BasketScreen;

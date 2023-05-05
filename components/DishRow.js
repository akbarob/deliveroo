import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Currency from "react-currency-formatter";
import { urlFor } from "../sanity";
import { Image } from "react-native";
import {
  MinusCircleIcon,
  PlusCircleIcon,
} from "react-native-heroicons/outline";
import { useDispatch, useSelector } from "react-redux";
import {
  addToBasket,
  removeFromBasket,
  selectBasketItemWithId,
} from "../features/basketSlice";

const DishRow = ({ id, name, desc, price, image }) => {
  const [isPressed, setIsPressed] = useState();
  const items = useSelector((state) => selectBasketItemWithId(state, id));
  const dispatch = useDispatch();
  console.log(image);

  const addItem = () => {
    dispatch(addToBasket({ id, name, desc, price, image }));
  };
  const removeItem = () => {
    if (!items.length > 0) return;
    dispatch(removeFromBasket(id));
  };
  return (
    <>
      <TouchableOpacity
        className={` bg-white border p-4 border-gray-200 ${
          isPressed && "border-b-0"
        }`}
        onPress={() => setIsPressed(!isPressed)}
      >
        <View className="flex-row">
          <View className="flex-1">
            <Text className="text-lg mb-1">{name}</Text>
            <Text className="text-gray-400">{desc}</Text>
            <Text className="text-gray-400 mt-2">
              <Currency quantity={price} currency="NGN" />
            </Text>
          </View>
          {/* <Text>DIshRow</Text> */}
          <View>
            <Image
              source={{ uri: urlFor(image).url() }}
              className="w-20 h-20 bg-gray-200 p-4"
            />
          </View>
        </View>
        <View></View>
      </TouchableOpacity>
      {isPressed && (
        <View className="w-full bg-white px-4 ">
          <View className="flex-row items-center space-x-2 pb-3">
            <TouchableOpacity disabled={items.length < 1} onPress={removeItem}>
              <MinusCircleIcon
                size={30}
                color={items.length < 1 ? "gray" : "#00ccbb"}
              />
            </TouchableOpacity>

            <Text>{items.length}</Text>

            <TouchableOpacity onPress={addItem}>
              <PlusCircleIcon size={30} color="#00ccbb" />
            </TouchableOpacity>
          </View>
        </View>
      )}
    </>
  );
};

export default DishRow;

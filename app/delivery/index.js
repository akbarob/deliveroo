import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { useSelector } from "react-redux";
import { XCircleIcon } from "react-native-heroicons/outline";
import * as Progress from "react-native-progress";
import MapView, { Marker } from "react-native-maps";

const Delivery = () => {
  const route = useRouter();
  const restaurant = useSelector((state) => state.restaurant.restaurant);

  return (
    <View className="bg-[#00ccbb] flex-1">
      <SafeAreaView className="z-50 ">
        <View className="flex-row justify-between items-center p-5">
          <TouchableOpacity onPress={() => route.push(`/`)}>
            <XCircleIcon color="white" size={30} />
          </TouchableOpacity>
          <Text className="text-white text-lg">Order Help</Text>
        </View>

        <View className="bg-white mx-5 my-2 rounded-md p-6 z-50 shadow-md">
          <View className="flex-row">
            <View className="flex-1">
              <Text className="text-4xl font-bold">45-55 minutes</Text>
              <Text className="text-lg  text-gray-400 font-extralight italic">
                Estimated Arrival
              </Text>
            </View>
            <Image
              source={{ uri: "https://links.papareact.com/fls" }}
              className="h-20 w-20"
            />
          </View>
          <Progress.Bar size={30} color="#00ccbb" indeterminate={true} />
          <Text className="mt-3 text-gray-500">
            Your order at {restaurant.title} is being prepared
          </Text>
        </View>
      </SafeAreaView>

      <MapView
        className="flex-1 -mt-10 z-0"
        mapType="mutedStandard"
        initialRegion={{
          latitude: 6.617564594639449,
          longitude: 3.3579845190078,
          latitudeDelta: 0.005,
          longitudeDelta: 0.005,
        }}
      >
        <Marker
          coordinate={{
            latitude: 6.617564594639449,
            longitude: 3.3579845190078,
          }}
          title={restaurant.title}
          description={restaurant.short_desc}
          identifier="origin"
          pinColor="red"
        />
      </MapView>

      <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
        <Image
          source={{ uri: "https://links.papareact.com/wru" }}
          className="h-12 w-12 bg-gray-200 rounded-full ml-5"
        />
        <View className="flex-1">
          <Text className="text-lg">Badmus AKbar</Text>
          <Text className="text-gray-400 ">Your Rider</Text>
        </View>
        <Text className="text-[#00ccbb] text-lg font-bold mr-5">Call</Text>
      </SafeAreaView>
    </View>
  );
};
// , 3.3579845190078
export default Delivery;

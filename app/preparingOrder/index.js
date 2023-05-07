import { View, Text } from "react-native";
import React, { useEffect } from "react";
import { SafeAreaView } from "react-native";
import * as Animatable from "react-native-animatable";
import * as Progress from "react-native-progress";
import { useRouter } from "expo-router";

const PreparingOrder = () => {
  const route = useRouter();
  useEffect(() => {
    //afetr 5 seecs
    setTimeout(() => route.push({ pathname: "delivery" }), 5000);
  }, []);

  return (
    <SafeAreaView className="flex-1 bg-[#00ccbb] justify-center items-center">
      <Animatable.Image
        source={require("../../assets/car.gif")}
        animation="slideInUp"
        iterationCount={1}
        className="h-96 w-96"
      />
      <Animatable.Text
        animation="slideInUp"
        iterationCount={1}
        className="text-xl my-10 text-white font-bold text-center"
      >
        Processing Your Order !!!
      </Animatable.Text>

      <Progress.CircleSnail
        thickness={3}
        showsText={true}
        formatText={() => "300"}
        // shouldRasterizeIOS:true
        size={60}
        indeterminate={true}
        color="white"
      />
    </SafeAreaView>
  );
};

export default PreparingOrder;

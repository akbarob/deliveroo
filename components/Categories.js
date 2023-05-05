import { View, Text, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";
import { Sanityclient } from "../sanity";

const Categories = () => {
  const [categorires, setCategorires] = useState([]);
  useEffect(() => {
    Sanityclient.fetch(`*[_type =='category']`).then((data) =>
      setCategorires(data)
    );
  }, []);

  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {/* CateoryCard */}
      {categorires?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          Title={category.name}
        />
      ))}
    </ScrollView>
  );
};

export default Categories;

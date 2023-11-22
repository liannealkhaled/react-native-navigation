import {
  View,
  Text,
  useAnimatedValue,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/categories";

const Category = () => {
  const { data: categories } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getAllCategories(),
  });

  const categoryList = categories?.map((category, index) => {
    return (
      <View style={styles.container} key={index}>
        <Text> {category.name} </Text>
      </View>
    );
  });

  return (
    <SafeAreaView>
      <ScrollView
        horizontal
        contentContainerStyle={{
          gap: 5,
        }}
      >
        {categoryList}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    width: 100,
    height: 90,

    justifyContent: "center",
    alignItems: "center",
  },
});

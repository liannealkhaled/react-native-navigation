import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllItems } from "../api/items";
import { BASE_URL } from "../api";

const Item = () => {
  const { data: items } = useQuery({
    queryKey: ["items"],
    queryFn: () => getAllItems(),
  });

  const itemsList = items?.map((item) => {
    return (
      <View style={styles.container}>
        <Text>{item.name}</Text>
        <Image
          source={{ uri: `${BASE_URL}/${item.image}` }}
          style={{
            width: 100,
            height: 100,
          }}
        />
      </View>
    );
  });
  return (
    <ScrollView contentContainerStyle={styles.scrollview}>
      {itemsList}
    </ScrollView>
  );
};

export default Item;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    width: 250,
    height: 200,
    borderRadius: 15,
  },
  scrollview: {
    backgroundColor: "yellow",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
});

import { View, Text, SafeAreaView, TextInput } from "react-native";
import React from "react";
import Category from "./Category";
import Item from "./Item";

const Home = () => {
  return (
    <View>
      {/* ///// search bar 
      ///// all categories */}

      <TextInput placeholder="search" />
      <Category />
      {/* ///// all items */}
      <Item />
    </View>
  );
};

export default Home;

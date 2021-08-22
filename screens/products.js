import React from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  FlatList,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";

import {fetchDataRequest} from '../state/actionCreator'

// const productss = useSelector((state) => state.theReducer.item);

const products = (props) => {
  const [isLoading, setLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchDataRequest());
    setLoading(true);
  }, []);
//
console.log("local props", props)


  return (
    // <FlatList
    //   style={styles.screen}
    //   data={}
    //   renderItem={({item}) => <Text>{item.title}</Text> }
    //   numColumns={2}
    // />
    <Text>rrrrrrrrr</Text>
  );
};
products.navigationOptions = {
  headerTitle: "Products Screen",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
export default products;

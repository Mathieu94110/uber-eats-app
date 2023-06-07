import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useAppDispatch, useAppSelector } from '../../redux/store/hooks';
import { cartSelector } from '../../redux/features/cartSlice';

export default function MenuItems({ restaurantName, foods }: { restaurantName: any; foods: any }) {
  const dispatch = useAppDispatch();

  const selectItem = (item: any, checkboxValue: boolean) =>
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        ...item,
        restaurantName: restaurantName,
        checkboxValue: checkboxValue,
      },
    });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      {foods.map((food: any, index: any) => (
        <View key={index}>
          <View className="flex-row justify-between m-5">
            <BouncyCheckbox
              iconStyle={{ borderColor: 'lightgray', borderRadius: 0 }}
              fillColor="green"
              onPress={(checkboxValue) => selectItem(food, checkboxValue)}
            />

            <FoodInfo food={food} />
            <FoodImage food={food} />
          </View>
          <Divider width={0.5} orientation="vertical" style={{ marginHorizontal: 20 }} />
        </View>
      ))}
    </ScrollView>
  );
}

const FoodInfo = (props: any) => (
  <View className="w-60 justify-evenly">
    <Text className="text-lg font-semi-bold">{props.food.title}</Text>
    <Text>{props.food.description}</Text>
    <Text>{props.food.price}</Text>
  </View>
);

const FoodImage = ({ marginLeft, ...props }: { marginLeft: number; props: any }) => (
  <View>
    <Image
      source={{ uri: props.food.image }}
      style={{
        marginLeft: marginLeft,
      }}
      className="w-24 h-24 rounded-lg"
    />
  </View>
);

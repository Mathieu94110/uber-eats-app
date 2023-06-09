import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { items } from '../../locales/locales';

export default function Categories() {
  return (
    <View className="pt-1.5 background-white py-2.5 pl-5">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {items.map((item, index) => (
          <View key={index} className="items-center mr-7 ">
            <Image source={item.image} className="w-12 h-10 object-contain" />
            <Text className="text-sm font-black">{item.text}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

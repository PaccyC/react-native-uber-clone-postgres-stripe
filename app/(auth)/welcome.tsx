import { Text, SafeAreaView, View, TouchableOpacity } from 'react-native';
import React, { useRef, useState } from 'react';
import tw from "twrnc";
import { router } from 'expo-router';
import Swiper from "react-native-swiper";
import { onboarding } from '@/constants';

const Welcome = () => {
  const swiperRef = useRef(null);
  const [index, setIndex] = useState(0)

  return (
    <SafeAreaView style={tw`flex h-full items-center justify-between`}>
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-in")}
        style={tw`flex w-full justify-end items-end p-5`}
      >
        <Text style={tw`text-black text-base`}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={[tw`h-1 mx-1`, { width: 32, backgroundColor: '#E2E8F0' }]} />}
        activeDot={<View style={[tw`h-1 mx-1 rounded-full`, { width: 32, backgroundColor: '#0286FF' }]} />}
        onIndexChanged={(index)=> setIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.title}>
            <Text>{item.title}</Text>
          </View>
        ))}
      </Swiper>
    </SafeAreaView>
  );
};

export default Welcome;

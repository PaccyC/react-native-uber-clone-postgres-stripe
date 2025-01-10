import { Text, SafeAreaView, View, TouchableOpacity,Image } from 'react-native';
import React, { useRef, useState } from 'react';
import tw from "twrnc";
import { router } from 'expo-router';
import Swiper from "react-native-swiper";
import { onboarding } from '@/constants';
import CustomButton from '@/components/CustomButton';

const Welcome = () => {
  const swiperRef = useRef<Swiper>(null);
  const [activeIndex, setActiveIndex] = useState(0)
  const isLastIndex= activeIndex === onboarding.length -1;

  return (
    <SafeAreaView style={tw`flex h-full items-center justify-between`}>
      <TouchableOpacity
        onPress={() => router.replace("/(auth)/sign-up")}
        style={tw`flex w-full justify-end items-end p-5`}
      >
        <Text style={tw`text-black text-base`}>Skip</Text>
      </TouchableOpacity>

      <Swiper
        ref={swiperRef}
        loop={false}
        dot={<View style={[tw`h-1 mx-1`, { width: 32, backgroundColor: '#E2E8F0' }]} />}
        activeDot={<View style={[tw`h-1 mx-1 rounded-full`, { width: 32, backgroundColor: '#0286FF' }]} />}
        onIndexChanged={(index)=> setActiveIndex(index)}
      >
        {onboarding.map((item) => (
          <View key={item.id}>
            <Image 
            source={item.image}
            style={[tw`w-full`,{ height: 300}]}
            resizeMode='contain'
            />
            <View style={tw`flex flex-row items-center justify-center w-full mt-10`}>
              <Text style={tw`text-black text-3xl font-bold text-center`}>{item.title}</Text>

            </View>
            <Text style={[tw`mx-10 mt-3 text-center`,{fontFamily: "JakartaSemiBold",color:"#858585",fontSize: 16}]}>{item.description}</Text>
          </View>
        ))}
      </Swiper>
      <CustomButton
        onPress={()=> isLastIndex ? router.replace("/(auth)/sign-up") : swiperRef.current?.scrollBy(1) } 
        title={isLastIndex ? "Get Started" :"Next"} 
        style={tw`w-11/12 mt-10`}/>
    </SafeAreaView>
  );
};

export default Welcome;

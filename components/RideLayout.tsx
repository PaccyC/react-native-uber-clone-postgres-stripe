import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { ReactNode, useRef } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import tw from 'twrnc'
import { router } from 'expo-router'
import { icons } from '@/constants'
import Map from './Map'
import  BottomSheet, { BottomSheetScrollView }  from '@gorhom/bottom-sheet'
interface Props {
    children: ReactNode;
    title:string
}
const RideLayout = ({children,title}:Props) => {
    const bottomSheetRef= useRef<BottomSheet>(null);
  return (
    <GestureHandlerRootView>
     <View style={tw`flex-1 bg-white`}>
        <View style={tw`flex flex-col h-screen bg-blue-500`}>
            <View style={tw`flex flex-row absolute z-10 top-8 items-center justify-start px-5`}>
                <TouchableOpacity onPress={()=>router.back()}>
                    <View style={tw`w-10 h-10 bg-white rounded-full items-center justify-center`}>
                        <Image
                         source={icons.backArrow}
                         resizeMode='contain'
                         style={tw`w-6 h-6`}
                        />
                    </View>
                </TouchableOpacity>
                <Text style={[tw`text-xl  ml-5`,{fontFamily:"Jakarta-SemiBold"}]}>{title || "Go Back"}</Text>
            </View>
            <Map/>
            <BottomSheet
            ref={bottomSheetRef}
            snapPoints={["40%","85%"]}
            index={0}
            >
                <BottomSheetScrollView style={tw`flex-1 p-5`}>
                    {children}
                </BottomSheetScrollView>
            </BottomSheet>

        </View>
     </View>
    </GestureHandlerRootView>
  )
}

export default RideLayout
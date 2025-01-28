import { View, Text } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '@/types/type'
import tw from "twrnc"

const GoogleTextInput = ({
icon,
initialLocation,
containerStyle,
textInputBackgroundColor,

}:GoogleInputProps) => {
  return (
    <View style={tw`flex flex-row  w-full items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}>
      <Text>Search</Text>
    </View>
  )
}

export default GoogleTextInput
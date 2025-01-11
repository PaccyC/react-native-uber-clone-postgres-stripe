import { View, Text,Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import CustomButton from './CustomButton'
import { icons } from '@/constants'

const OAuth = () => {
    const handleGoogleSignIn= async() =>{

    }
  return (
    <View>
      <View style={tw`flex flex-row justify-center items-center mt-4 gap-x-3`}>
         <View style={[tw`flex-1`,{height: 1, backgroundColor: "#CED1DD"}]}/>
         <Text style={tw`text-lg`}>Or</Text>
         <View style={[tw`flex-1`,{height: 1, backgroundColor: "#CED1DD"}]}/>
      </View>
      <CustomButton
       title='Log In wit Google'
       style="mt-5 w-full shadow-none"
       IconLeft={()=>(
        <Image 
        source={icons.google}
        style={tw`w-5 h-5 mx-2`}
        resizeMode='contain'
        />
       )}
       bgVariant='outline'
       textVariant='primary'
       onPress={handleGoogleSignIn}
      />
    </View>
  )
}

export default OAuth
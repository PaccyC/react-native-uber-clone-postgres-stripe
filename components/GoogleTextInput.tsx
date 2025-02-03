import 'react-native-get-random-values';
import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { GoogleInputProps } from '@/types/type'
import tw from "twrnc"
// import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete'
import { icons } from '@/constants'
import { TextInput } from 'react-native-gesture-handler';
import { router } from 'expo-router';
import CustomButton from './CustomButton';
const googlePlacesApiKey= process.env.EXPO_PUBLIC_GOOGLE_API_KEY;
const GoogleTextInput = ({
icon,
initialLocation,
containerStyle,
textInputBackgroundColor,
handlePress

}:GoogleInputProps) => {
  return (
    <View style={tw`flex flex-row  w-full items-center justify-center relative z-50 rounded-xl ${containerStyle} mb-5`}>
      {/* <GooglePlacesAutocomplete
      
       fetchDetails={true}
       placeholder='Where do you want to go?'
       debounce={200}
       styles={{
        textInputContainer:{
          alignItems: "center",
          justifyContent:"center",
          borderRadius:20,
          marginHorizontal: 20,
          position:"relative",
          shadowColor: "#d4d4d4"
        },
        textInput:{
          backgroundColor: textInputBackgroundColor  || "white",
          fontSize:16,
          fontWeight: 600,
          marginTop:5,
          width:"100%",
          borderRadius:200,
        },
        listView:{
          backgroundColor: textInputBackgroundColor || "white",
          position: "relative",
          top: 0,
          width: "100%",
          borderRadius: 10,
          shadowColor:"#d4d4d4",
          zIndex:99
        }
       }}
       onPress={(data,details=null)=>{
        handlePress({
          latitude: details?.geometry.location.lat!,
          longitude: details?.geometry.location.lng!,
          address: data.description
          
        })
       }}

       query={{
        key:googlePlacesApiKey,
        language: "en",
        
       }}
       renderLeftButton={()=>(
        <View style={tw`justify-center items-center w-6 h-6`}>

          <Image 
          style={tw`w-6 h-6`}
          resizeMode='contain'
          source={icon ? icon : icons.search }/>
        </View>
       )}
       textInputProps={{
        placeholderTextColor: "gray",
        placeholder: initialLocation ?? "Where do you want to go?"
       }}
      /> */}
      <CustomButton 
      title='Find Ride'
      onPress={()=>router.replace("/(root)/find-ride")}>
        
      </CustomButton>
    </View>
  )
}

export default GoogleTextInput
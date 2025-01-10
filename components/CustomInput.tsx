import {
  View,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  TextInput,
  Image,
  Platform,
  Keyboard,
} from "react-native";
import React from "react";
import tw from "twrnc";
import { InputFieldProps } from "@/types/type";


const CustomInput = ({
  label,
  labelStyle,
  icon,
  iconStyle,
  inputStyle,
  style,
  value,
  containerStyle,
  onChangeText,
  secureTextEntry = false,
  placeholder,
  
  
}: InputFieldProps) => {
  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding":"height"}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={tw`my-2 w-full`}>
          <Text style={tw`text-lg font-semibold mb-3 ${labelStyle}`}>
            {label}
          </Text>
          <View style={[tw`flex flex-row justify-start items-center bg-neutral-100 rounded rounded-full border border-neutral-100 ${containerStyle}`]}>
             {icon && <Image source={icon} style={tw`h-6 w-6 ml-4 ${iconStyle}`}/>}
             <TextInput 
              value={value} 
              onChangeText={onChangeText}
              style={tw`rounded-full p-4 font-semibold  text-[15px] flex-1 text-left ${inputStyle}`}
              placeholder={placeholder}
              secureTextEntry={secureTextEntry}
              />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

export default CustomInput;

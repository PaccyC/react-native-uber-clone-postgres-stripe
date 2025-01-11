import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import OAuth from '@/components/OAuth'
import { icons, images } from '@/constants'
import { Link } from 'expo-router'
import { useState } from 'react'
import {ScrollView, View,Image,Text } from 'react-native'
import tw from "twrnc"

const SignUp = () => {
  const [form, setForm]= useState({
    name:"",
    email:"",
    password:""
  })

  const handleSubmit= async()=>{
    console.log(form)
  }
  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white`}>
        <View style={[tw`relative w-full`,{height: 250}]}>
          <Image source={images.signUpCar} style={[tw`z-0 w-full `,{height: 250}]}/>
          <Text style={tw`text-2xl text-black absolute bottom-5 left-5 font-semibold`}>Create Your Account</Text>
        </View>
        <View style={tw`p-5`}>

           <CustomInput 
           label='Name' 
           labelStyle=''
           value={form.name}
           onChangeText={(value)=> setForm({...form, name: value})}
           placeholder='Enter your name'
           icon={icons.person}
           inputStyle=''
           containerStyle=''
           iconStyle='' 
           style=''
            />
            <CustomInput 
           label='Email' 
           labelStyle=''
           value={form.email}
           onChangeText={(value)=> setForm({...form, email: value})}
           placeholder='Enter your email address'
           icon={icons.email}
           inputStyle=''
           containerStyle=''
           iconStyle='' 
           style=''
            />
          <CustomInput 
           label='Password' 
           labelStyle=''
           value={form.password}
           onChangeText={(value)=> setForm({...form, password: value})}
           placeholder='Enter your Password'
           icon={icons.lock}
           inputStyle=''
           containerStyle=''
           iconStyle='' 
           style=''
           secureTextEntry={true}
            />

          <CustomButton
          title='Sign Up'
          onPress={handleSubmit}
          style="mt-6"
            
          />
          <OAuth/>
          <Link href="/(auth)/sign-in" style={[tw`mt-10 text-center text-lg`,{color:"#858585"}]}>
           <Text>Already have an account? </Text>
           <Text style={[ {color: "#0286FF"}]}>Log In</Text>
          </Link>
        </View>
      </View>

    </ScrollView>
  )
}

export default SignUp
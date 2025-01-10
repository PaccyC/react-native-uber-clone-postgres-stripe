import CustomInput from '@/components/CustomInput'
import { icons, images } from '@/constants'
import { useState } from 'react'
import {ScrollView, View,Image,Text } from 'react-native'
import tw from "twrnc"

const SignUp = () => {
  const [form, setForm]= useState({
    name:"",
    email:"",
    password:""
  })
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
           onChangeText={()=> setForm({...form, name: form.name})}
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
           onChangeText={()=> setForm({...form, email: form.email})}
           placeholder='Enter your email address'
           icon={icons.person}
           inputStyle=''
           containerStyle=''
           iconStyle='' 
           style=''
            />
          <CustomInput 
           label='Password' 
           labelStyle=''
           value={form.password}
           onChangeText={()=> setForm({...form, password: form.password})}
           placeholder='Enter your Password'
           icon={icons.person}
           inputStyle=''
           containerStyle=''
           iconStyle='' 
           style=''
           secureTextEntry={true}
            />
        </View>
      </View>

    </ScrollView>
  )
}

export default SignUp
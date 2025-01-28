import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import OAuth from '@/components/OAuth'
import { icons, images } from '@/constants'
import { useSignIn } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import {ScrollView, View,Image,Text, Alert } from 'react-native'
import tw from "twrnc"

const SignIn = () => {

  const { signIn, setActive, isLoaded } = useSignIn()
  const router = useRouter()
  const [form, setForm]= useState({

    email:"",
    password:""
  })

  const onSignInPress = React.useCallback(async () => {
    if (!isLoaded) return

    try {
      const signInAttempt = await signIn.create({
        identifier: form.email,
        password:form.password,
      })

      if (signInAttempt.status === 'complete') {
        await setActive({ session: signInAttempt.createdSessionId })
        router.replace('/')
      } else {
        
        console.error(JSON.stringify(signInAttempt, null, 2))
      }
    } 
    catch (err:any) {
      Alert.alert("Error", err.errors[0].message)
    }

  }, [isLoaded, form.email, form.password])

  return (
    <ScrollView style={tw`flex-1 bg-white`}>
      <View style={tw`flex-1 bg-white`}>
        <View style={[tw`relative w-full`,{height: 250}]}>
          <Image source={images.signUpCar} style={[tw`z-0 w-full `,{height: 250}]}/>
          <Text style={tw`text-2xl text-black absolute bottom-5 left-5 font-semibold`}>Welcome 👋</Text>
        </View>
        <View style={tw`p-5`}>

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
          title='Sign In'
          onPress={onSignInPress}
          style="mt-6"
            
          />
          <OAuth/>
          <Link href="/(auth)/sign-in" style={[tw`mt-10 text-center text-lg`,{color:"#858585"}]}>
           <Text>Don't have an account? </Text>
           <Text style={[ {color: "#0286FF"}]}>Sign Up</Text>
          </Link>
        </View>
      </View>

    </ScrollView>
  )
}

export default SignIn
import CustomButton from '@/components/CustomButton'
import CustomInput from '@/components/CustomInput'
import OAuth from '@/components/OAuth'
import { icons, images } from '@/constants'
import { fetchAPI } from '@/lib/fetch'
import { useSignUp } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import React from 'react'
import { useState } from 'react'
import {ScrollView, View,Image,Text, TextInput, Button, Alert } from 'react-native'
import {ReactNativeModal} from "react-native-modal"
import tw from "twrnc"

const SignUp = () => {
  const [form, setForm]= useState({
    name:"",
    email:"",
    password:""
  })

  const { isLoaded, signUp, setActive } = useSignUp()
  const router = useRouter()




  const [verification,setVerification] = useState({
    state:"default",
    error: "",
    code: "",
  }) 

  const[showSuccessModal,setShowSuccessModal]= useState(false)

  const onSignUpPress = async () => {
    if (!isLoaded) return

    // Start sign-up process using email and password provided
    try {
      await signUp.create({
        emailAddress:form.email,
        password:form.password,
      })

      // Send user an email with verification code
      await signUp.prepareEmailAddressVerification({ strategy: 'email_code' })

    
      setVerification({...verification, state: "pending"})
    } catch (err:any) {
   
      Alert.alert("Error",err.errors[0].longMessage)
    }
  }

  const onVerifyPress = async () => {
    if (!isLoaded) return

    try {
      const signUpAttempt = await signUp.attemptEmailAddressVerification({
        code: verification.code,
      })
     
      if (signUpAttempt.status === 'complete'){
        
        //  Create user
       const data= await fetchAPI("/(api)/user",{
          method:"POST",
          body: JSON.stringify({
            name: form.name,
            email: form.email,
            clerkId: signUpAttempt.createdUserId
          })
        })
        console.log(data);
        

        await setActive({ session: signUpAttempt.createdSessionId })
        setVerification({...verification, state:"success"})
      } else {
        
        setVerification({
          ...verification,
           state: "error",
          error:"Verification Failed" })
      }
    } catch (err:any) {
      
      setVerification({
          ...verification,
           state: "error",
          error:err.errors[0].longMessage })
    }
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
          onPress={onSignUpPress}
          style="mt-6"
            
          />
          <OAuth/>
          <Link href="/(auth)/sign-in" style={[tw`mt-10 text-center text-lg`,{color:"#858585"}]}>
           <Text>Already have an account? </Text>
           <Text style={[ {color: "#0286FF"}]}>Log In</Text>
          </Link>
        </View>

        {/* Verification Modal */}

        <ReactNativeModal
        isVisible={verification.state === "pending"}
        onModalHide={()=>{
           if(verification.state === "success")setShowSuccessModal(true)
        }}
        >
          <View style={[tw`bg-white py-7 px-9 rounded-2xl`,{minHeight:300}]}>
            <Text style={[tw`text-2xl  mb-2`,{fontFamily:"Jakarta-ExtraBold"}]}>Verification</Text>
            <Text style={tw`font-Jakarta mb-5`}>
              We've sent the verification code to {form.email}
            </Text>
            <CustomInput
              label='Code'
              icon={icons.lock}
              placeholder='12345'
              keyboardType='numeric'
              value={verification.code}
              onChangeText={(code)=> setVerification({...verification,code:code})}
              labelStyle=''
              containerStyle=''
              inputStyle=''
              iconStyle=''
              style=''
            />
            {verification.error &&
            <Text style={tw`text-red-500 text-sm mt-1`}>{verification.error}</Text>
            }

              <CustomButton
              title='Verify'
              onPress={onVerifyPress}
              style="mt-5 bg-success-500"
              />
          </View>

        </ReactNativeModal>
        <ReactNativeModal 
        isVisible={showSuccessModal}>
          <View style={[tw`bg-white px-7 py-9 rounded-2xl`,{minHeight:300}]}>
            <Image 
            source={images.check}
            style={[tw`mx-auto my-5`,{height:110,width:110}]}
            />

            <Text style={[tw`text-3xl text-center`,{fontFamily:"Jakarta-Bold"}]}>Verified</Text>
            <Text style={[tw`text-base text-gray-400 text-center mt-2`,{fontFamily:"Jakarta"}]}>
              You have successfully verified your account
            </Text>

             <CustomButton 
             title='Browse Home' 
             onPress={()=> {
              router.replace("/(root)/(tabs)/home")
              setShowSuccessModal(false)
             }
            }
             style={tw`mt-5`}
             />
          </View>

        </ReactNativeModal>
      </View>

    </ScrollView>
  )
}

export default SignUp
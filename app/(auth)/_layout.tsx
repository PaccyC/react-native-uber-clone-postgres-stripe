import { useAuth } from '@clerk/clerk-expo';
import { Redirect, Stack } from 'expo-router';


const  AuthLayout= ()=> {

 const { isSignedIn } = useAuth()

  if (isSignedIn) {
    return <Redirect href={'/'} />
  }

 
  return (
      <Stack
       screenOptions={{
        headerShown: false
       }}
      >
          <Stack>
      <Stack.Screen name="welcome"  />
      <Stack.Screen name="sign-up" />
      <Stack.Screen name="sign-in" />
    </Stack>
      
       
      </Stack>
  );
}
export default AuthLayout;

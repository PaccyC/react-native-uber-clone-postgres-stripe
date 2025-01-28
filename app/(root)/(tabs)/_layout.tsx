import { icons } from "@/constants"
import { Tabs } from "expo-router"
import { View,Image, ImageSourcePropType } from "react-native"
import tw from "twrnc"


const TabIcon = ({
  source,
  focused,
}: {
  source: ImageSourcePropType;
  focused: boolean;
}) => (
  <View
    style={tw`flex flex-row justify-center items-center rounded-full ${focused ? "bg-[#EEEEEE]" : ""}`}
  >
    <View
      style={tw`rounded-full w-12 h-12 items-center justify-center ${focused ? "bg-[#0CC25F]" : ""}`}
    >
      <Image
        source={source}
        tintColor="white"
        resizeMode="contain"
        style={tw`w-7 h-7`}
      />
    </View>
  </View>
);
const Layout = () => {
  return (
 
    <Tabs
    initialRouteName="home"
    screenOptions={{
      tabBarActiveTintColor: "white",
      tabBarInactiveTintColor: "white",
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: "#333333",
        borderRadius: 50,
        overflow: "hidden",
        marginHorizontal: 20,
        marginBottom: 20,
        height: 90,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexDirection: "row",
         position: "absolute",
      },
    }}
  >
    <Tabs.Screen
      name="home"
      options={{
        title: "Home",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon source={icons.home} focused={focused} />
        ),
      }}
    />
    <Tabs.Screen
      name="rides"
      options={{
        title: "Rides",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon source={icons.list} focused={focused} />
        ),
      }}
    />
    <Tabs.Screen
      name="chat"
      options={{
        title: "Chat",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon source={icons.chat} focused={focused} />
        ),
      }}
    />
    <Tabs.Screen
      name="profile"
      options={{
        title: "Profile",
        headerShown: false,
        tabBarIcon: ({ focused }) => (
          <TabIcon source={icons.profile} focused={focused} />
        ),
      }}
    />
  </Tabs>
  )
}

export default Layout
import { calculateRegion } from '@/lib/map'
import { useLocationStore } from '@/store'
import React from 'react'
import MapView,{PROVIDER_DEFAULT} from 'react-native-maps'
import tw from "twrnc"
const Map = () => {

    const {userLongitude,userLatitude,destinationLatitude,destinationLongitude}= useLocationStore()

    const region= calculateRegion({
        userLatitude,
        userLongitude,
       destinationLatitude,
        destinationLongitude
  
    })
  return (
    <MapView
    provider={PROVIDER_DEFAULT}
    style={tw`w-full h-full rounded-2xl`}
    tintColor='black '
    mapType='mutedStandard'
    showsPointsOfInterest={false}
    showsUserLocation={true}
    userInterfaceStyle='light'
    initialRegion={region}
    
    >

    </MapView>
  )
}

export default Map
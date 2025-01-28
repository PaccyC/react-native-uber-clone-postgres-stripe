import { View, Text, Image } from 'react-native'
import React from 'react'
import { Ride } from '@/types/type'
import tw from 'twrnc'
import { icons } from '@/constants'
import { formatDate, formatTime } from '@/lib/utils'

const RideCard = ({ride}:{ride:Ride}) => {
  return (
    <View style={tw`flex flex-row items-center justify-center bg-white rounded-lg shadow-sm shadow-neutral-300 mb-3`}>
        <View style={tw`flex flex-col items-center justify-center p-3`}>
            <View style={tw`flex flex-row items-center justify-between`}>
                <Image 
                source={{ 
                    uri:`https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${ride.destination_longitude},${ride.destination_latitude}&zoom=14&apiKey=${process.env.EXPO_PUBLIC_GEOAPIFY_API_KEY}`
                }}
                
                style={tw`w-[80px] h-[90px] rounded-lg`}
             />

             <View style={tw`flex flex-col mx-5 gap-y-5 flex-1`}>
                <View style={tw`flex flex-row items-center gap-x-2`}>
                   <Image source={icons.to} style={tw`w-5 h-5`}/>
                   <Text style={[tw`text-md `,{fontFamily:"Jakarta-Medium"}]} numberOfLines={1}>{ride.origin_address}</Text>
                </View>
                <View style={tw`flex flex-row items-center gap-x-2`}>
                   <Image source={icons.point} style={tw`w-5 h-5`}/>
                   <Text style={[tw`text-md `,{fontFamily:"Jakarta-Medium"}]}>{ride.destination_address}</Text>
                </View>


             </View>
            </View>
            <View style={tw`flex flex-col w-full mt-5 bg-[#F6F8FA] rounded-lg p-3 items-start justify-center`}>
                <View style={tw`flex flex-row items-center w-full justify-between mb-5`}>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>Date & Time</Text>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>{formatDate(ride.created_at)}  {formatTime(ride.ride_time)}</Text>
                </View>
                <View style={tw`flex flex-row items-center w-full justify-between mb-5`}>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>Driver </Text>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>{ride.driver.first_name} {ride.driver.last_name}</Text>
                </View>
                <View style={tw`flex flex-row items-center w-full justify-between mb-5`}>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>Car Seats</Text>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>{ride.driver.car_seats}</Text>
                </View>
                <View style={tw`flex flex-row items-center w-full justify-between mb-5`}>
                    <Text style={[tw`text-md text-gray-500`,{fontFamily:"Jakarta-Medium"}]}>Payment Status</Text>
                    <Text style={[tw`text-md text-gray-500 ${ride.payment_status === "paid" ? "text-green-500": "text-red-500"}`,{fontFamily:"Jakarta-Medium"}]}>{ride.payment_status}</Text>
                </View>
            </View>
        </View>

    </View>
  )
}

export default RideCard
import { View, Text, SafeAreaView,TouchableOpacity,Image} from 'react-native'
import React from 'react'
import { XIcon} from "react-native-heroicons/solid";
import * as Progress from "react-native-progress"
import { useSelector } from 'react-redux';
import { selectRestaurant } from '../slices/RetaurantSlice';
import MapView, {Marker} from 'react-native-maps';

const DeliveryScreen = ({navigation}) => {
const restaurant=useSelector(selectRestaurant)


  return (
    <View className="bg-[#00CCBB] flex-1">
        <SafeAreaView className="z-50">
            <View className="flex-row justify-between items-center p-5">
                <TouchableOpacity className="" onPress={()=>navigation.navigate("Home")}>
                    <XIcon  size={30}  color="white"/>
                </TouchableOpacity>
                <Text  className="font-light text-white text-lg">Order help</Text>
            </View>
            <View className="p-6 mx-5 bg-white rounded-md shadow-md">
                <View className="flex-row justify-between">
                   <View>
                        <Text  className="font-light text-gray-400 text-lg">Estimated Arrival</Text>
                        <Text  className="text-3xl font-bold">40-45 minuts</Text>
                    </View>
                    <Image source={require("./../assets/bike-bicycle.gif")}
                    className="h-20 w-20 rotate-[20deg]"
                    />
               </View>
               <Progress.Bar color='#00CCBB' indeterminate={true}/>
               <Text  className="font-light text-gray-500 mt-3 text-sm">Your order in {restaurant.title} is being  prepered</Text>
            </View>
       </SafeAreaView>
       <MapView  
       initialRegion={{
        latitude:restaurant.lat,
        longitude:restaurant.long,
        latitudeDelta:0.005,
        longitudeDelta:0.005
       }}
       className="flex-1 -mt-10 z-0"
       mapType='mutedStandard'
       >
      <Marker 
       coordinate={{ 
        latitude:restaurant.lat,
        longitude:restaurant.long,
        }} 
        title={restaurant.title}
        description={restaurant.short_description}
        identifier="origin"
        pinColor='#00CCBB'/>
       </MapView>
       <SafeAreaView className="bg-white flex-row items-center space-x-5 h-28">
                  <Image source={require("./../assets/bike-bicycle.gif")}
                        className="h-16 w-16 rounded-full  ml-5"
                        />
                   <View className="flex-1">
                        <Text  className="font-light text-gray-500 text-sm">Your rider</Text>
                        <Text  className="font-light text-gray-500  text-lg">Oleg Dub</Text>
                    </View>    
                    <Text  className="color-[#00CCBB]  mr-5 text-xl">Call</Text> 
       </SafeAreaView>
    </View>
  )
}

export default DeliveryScreen
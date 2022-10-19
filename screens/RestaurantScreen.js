import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect ,useEffect,useState} from 'react'
import { urlFor } from '../sanity';
import { useRoute } from '@react-navigation/native';
import {ArrowLeftIcon,StarIcon,LocationMarkerIcon,QuestionMarkCircleIcon,ChevronRightIcon} from "react-native-heroicons/outline"
import Dish from '../components/Dish';
import BusketIcon from '../components/BasketIcon';
// import { setRestaurant } from '../slices/RetaurantSlice';
// import { useDispatch } from 'react-redux';
import { useActions } from '../hooks/useActions';
const RestaurantScreen = ({navigation}) => {
const { setRestaurant } = useActions()
const {params:{title, imgUrl, rating,genre,address, dishes, id, long, lat, short_description}}=useRoute()

useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false 
        })
},[])

useEffect(()=>{
 setRestaurant({title, imgUrl, rating,genre,address, dishes, id, long, short_description,lat})
},[])
 
  return (
    <>
        <BusketIcon/>
        <ScrollView className="">
            <View className="relative ">
                <Image source={{uri:urlFor(imgUrl).url()}}
                    className="w-full h-56 rounded"
                />
               <TouchableOpacity className="absolute top-10 left-5  rounded-full p-2 bg-white" onPress={()=>navigation.goBack()}>  
                    <ArrowLeftIcon size={20}  color="#00CCBB" />
                </TouchableOpacity>
            </View>
            <View className="px-3 bg-white">
                    <Text className="font-bold pt-2 text-xl">{title}</Text>      
                    <View className="flex-row">
                            <View className="flex-row items-center space-x-1">
                                <StarIcon color="green" opacity={0.5} size="22"/>
                                <Text className="text-xs text-gray-500 ">
                                    <Text className="text-green-500">{rating}</Text> • {genre}
                                </Text>
                            </View>
                            <View  className="flex-row items-center  space-x-1">
                                <LocationMarkerIcon color={"gray"}/>
                                <Text>Nearby • {address} </Text>
                            </View>
                    </View> 
                    <Text className="font-bold py-2 text-sm">{short_description}</Text>      
                    <TouchableOpacity  className="flex-row items-center justify-between border-y py-2 border-gray-300">
                        <QuestionMarkCircleIcon color="gray"/>
                        <Text className="font-bold text-lg">Have a food alergy? </Text>   
                        <ChevronRightIcon color="#00CCBB"/>   
                    </TouchableOpacity> 
            </View>
            <View className="">
                <Text className=" p-2 font-bold py-2 text-lg">Menu</Text>      
                {dishes.map((d)=><Dish key={d._id} id={d._id} title={d.name} price={d.price} imgUrl={d.image} description={d.short_description}/>)}
            </View>
        </ScrollView>
    </>
  )
} 

export default RestaurantScreen
import { View, Text,Image, TouchableOpacity ,SafeAreaView, ScrollView} from 'react-native'
import React, {useEffect, useState} from 'react'
import { XCircleIcon} from "react-native-heroicons/solid";
import { useSelector, } from 'react-redux';
import { selectRestaurant } from '../slices/RetaurantSlice';
import { selectBasketItems, selectBasketTotal } from '../slices/BasketSlice';
import { urlFor } from '../sanity';
import Currency from "react-currency-formatter"
import { useActions } from '../hooks/useActions';

const BasketScreen = ({navigation}) => {
const restaurant=useSelector(selectRestaurant)
const [groupedItemsBasket,setGroupedItemsBasket]=useState([])
const items=useSelector(selectBasketItems)
const basketTotal=useSelector(selectBasketTotal)
const {removeFromBasket} =useActions()

useEffect(()=>{
const groupedItems=items.reduce((results,item)=>{
    (results[item.id] = results[item.id] || []).
    push(item)
    return results
    }, 
{})
setGroupedItemsBasket(groupedItems)
},[items])

 
    return (
        <SafeAreaView className="flex-1">
            <View className="flex-1 bg-gray-100">
                <View className="flex-column bg-white items-center p-5 border-[#00CCBB] border-b shadow-sm" >
                    <Text className="font-bold text-2xl">Basket</Text>   
                    <Text className="font-bold text-sm text-gray-500">{restaurant.title}</Text>   
                <TouchableOpacity className="absolute  right-5 top-5" onPress={()=>navigation.goBack()}>
                    <XCircleIcon  size={50}  color="#00CCBB"/>
                </TouchableOpacity>
                </View>
                <ScrollView className="divide-y">
                    {Object.entries(groupedItemsBasket).map(([key,items])=>
                    <View className="flex-row items-center space-x-2 p-2 border-b border-gray-200" key={key}>
                        <Text>{items.length}x</Text>
                        <Image source={{uri:urlFor(items[0].imgUrl).url()}}
                                className="w-16 h-16 rounded-full"
                                />
                        <Text className="text-sm flex-1 font-bold">{items[0].title}</Text>
                        <Text className="text-sm"><Currency quantity={items[0].price} currency="GBP" /></Text> 
                        <TouchableOpacity className="" onPress={()=>removeFromBasket({id:key})}>
                            <Text className="text-[#00CCBB]">Remove</Text>
                    </TouchableOpacity>
                    </View>)}
                </ScrollView>
                <View className="p-2 bg-white">
                    <View className=" flex-row items-center justify-between ">
                        <Text className="text-gray-400 flex-1 font-bold">Subtotal</Text>
                        <Text className="text-sm"><Currency quantity={basketTotal} currency="GBP" /></Text> 
                    </View>
                    <View className="flex-row items-center justify-between ">
                        <Text className="text-gray-400 flex-1 font-bold">Delivery-fee</Text>
                        <Text className="text-sm"><Currency quantity={23} currency="GBP" /></Text> 
                    </View>
                    <View className="flex-row items-center justify-between mb-2">
                        <Text className="text-gray-500 flex-1 font-bold">Order total</Text>
                        <Text className="text-sm"><Currency quantity={basketTotal+23} currency="GBP" /></Text> 
                    </View>
                    <TouchableOpacity className="rounded-lg p-3 bg-[#00CCBB]" onPress={()=>navigation.navigate("PreparingOrder")}>
                            <Text className="rounded text-center text-xl font-bold ">Place order</Text>
                    </TouchableOpacity>
                </View>
            </View>
    </SafeAreaView>  
    )
}

export default BasketScreen
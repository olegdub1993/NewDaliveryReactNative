import { View, TouchableOpacity, Text,Image } from 'react-native'
import React, { useState } from 'react'
import Currency from "react-currency-formatter"
import { MinusCircleIcon,PlusCircleIcon} from "react-native-heroicons/outline";
import { urlFor } from '../sanity'
import {useSelector} from "react-redux"
import { selectBasketItemsWithId } from '../slices/BasketSlice';
import { useActions } from '../hooks/useActions';

const Dish = ({title, price, imgUrl, description, id}) => {
const [isPressed, setIsPressed]=useState(false)
const { addToBasket,removeFromBasket}=useActions()
const items= useSelector((state)=>selectBasketItemsWithId(state, id))

const addItemToBasket=()=>{
    addToBasket({title, price, imgUrl, description, id})
}
const removeItemFromBasket=()=>{
    if(items.length<=0) return;
    removeFromBasket({id})
}
  

  return ( 
    <>
      <TouchableOpacity className="border flex-row border-gray-200 justify-between bg-white p-4" onPress={()=>setIsPressed(!isPressed)}>
          <View className="flex-1">
              <Text className="font-bold pt-2 text-xl">{title}</Text>
              <Text className="font-bold py-2 text-sm">{description}</Text>     
              <Text><Currency quantity={price} currency="GBP" /></Text> 
          </View>
          <Image source={{uri:urlFor(imgUrl).url()}}
              className="w-36 h-36 rounded-sm"
              />
      </TouchableOpacity>
     {isPressed && 
      <View className="flex-row space-x-2  px-4 pb-3 bg-white items-center">
          <TouchableOpacity  onPress={removeItemFromBasket} disabled={!items.length}>
            <MinusCircleIcon  size={34} color={(items.length<=0)?"gray":"#00CCBB"}/>
          </TouchableOpacity>
          <Text>{items.length}</Text>
          <TouchableOpacity  onPress={addItemToBasket}>
            <PlusCircleIcon size={34} color="#00CCBB"/>
          </TouchableOpacity>
      </View>}
    </>
  )
}

export default Dish
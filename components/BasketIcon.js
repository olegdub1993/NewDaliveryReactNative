import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux';
import { selectBasketItems, selectBasketTotal } from '../slices/BasketSlice';
import Currency from "react-currency-formatter"
import { useNavigation } from '@react-navigation/native';

const BasketIcon = () => {
const navigation=useNavigation() 
const items=useSelector(selectBasketItems)  
const sum =useSelector(selectBasketTotal)

if(!items.length) return

  return (
    <View className="absolute bottom-5 w-full z-50  p-4 ronded" >
        <TouchableOpacity onPress={()=>navigation.navigate("Basket")} className="fixed bottom-1 p-4 rounded-lg bg-[#00CCBB] flex-row items-center space-x-2" >
        <Text  className=" p-2 font-bold text-white bg-[#01A296]" >{items.length}</Text>
        <Text className="flex-1 text-white   text-lg font-extrabold text-center">Basket</Text>
        <Text className="text-white text-lg"><Currency quantity={sum} currency="GBP" /></Text> 
      </TouchableOpacity>
    </View>
  )
}

export default BasketIcon
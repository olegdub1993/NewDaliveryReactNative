import { View, Text,SafeAreaView} from 'react-native'
import React, { useEffect } from 'react'
import * as Animatedle  from 'react-native-animatable'
import * as Progres from 'react-native-progress'
const PreparingOrderScreen = ({navigation}) => {

useEffect(()=>{
    setTimeout(()=>{navigation.navigate("Delivery")},3000)
 },[])    

  return (
    <SafeAreaView className="bg-[#00CCBB] flex-1 items-center justify-center ">
        <Animatedle.Image
                    source={require("./../assets/loading.gif")}
                    animation="slideInUp"
                    iterationCount={1}
                    className="h-64 w-64 rounded-full"/>
            <Animatedle.Text
                animation="slideInUp"
                iterationCount={1}
                className="my-6 text-white font-bold text-sm">Waiting for restaurant to accept your order</Animatedle.Text>
        <Progres.Circle indeterminate={true} size={60} color="white"/>
    </SafeAreaView>
  )
}

export default PreparingOrderScreen
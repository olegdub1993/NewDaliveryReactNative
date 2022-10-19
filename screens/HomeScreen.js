import { View, Text, SafeAreaView, Image, TextInput, ScrollView } from 'react-native';
import React, { useLayoutEffect, useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ChevronDownIcon, UserIcon, AdjustmentsIcon,SearchIcon } from "react-native-heroicons/outline";
import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import sanityClient from "../sanity"

const HomeScreen = () => {
    const navigation=useNavigation()
    const [featuredCategories, setFeaturedCategories]=useState([])

    useLayoutEffect(()=>{
        navigation.setOptions({
            headerShown:false
        })
    },[])

    useEffect(()=>{ 
      sanityClient.fetch(`
      *[_type=="featured"]{
        ...,
        restaurants[]->{ 
            ..., 
            dishes->
        }
      }`).then((data)=>setFeaturedCategories(data))
    },[])

  return (
        <SafeAreaView className="bg-white pt-5">
            <View className="flex-row items-center pb-3 space-x-2 px-4">
                <Image source={{uri:"https://klike.net/uploads/posts/2019-06/1559370578_1.jpg"}} className="rounded-full h-7 w-7 p-4"
                />
                <View className="flex-1">
                    <Text className="text-gray-400 font-bold text-xs">Deliver now</Text>
                    <Text className="text-xl font-bold">
                    Current location
                    <ChevronDownIcon size={20} color="#00CCBB" />
                    </Text>
                </View> 
              <UserIcon size={35} color="#00CCBB" />
            </View> 
            <View className="flex-row  space-x-2 items-center pb-2 px-4" >
                <View className="flex-row flex-1 space-x-2 bg-gray-200 p-3" >
                    <SearchIcon  color="gray" size="20" />
                    <TextInput placeholder='Restaurants and cuisines' />
                </View>
                <AdjustmentsIcon  color="#00CCBB"  />
            </View>
            <ScrollView className="bg-gray-100">
                <Categories/>
                {featuredCategories?.map((c)=> <FeaturedRow key={c._id} id={c._id} title={c.name} description={c.short_description}/>)}
            </ScrollView>
      </SafeAreaView>
  )
}

export default HomeScreen
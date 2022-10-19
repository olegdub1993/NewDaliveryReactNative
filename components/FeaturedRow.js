import { View, Text, ScrollView } from 'react-native'
import React, { useState,useEffect} from 'react'
import { ArrowNarrowRightIcon} from "react-native-heroicons/outline";
import RestourantCard from './RestourantCard';
import sanityClient from "./../sanity";


const FeaturedRow = ({title, description,id}) => {
const [restaurants,setRestaurants]=useState([]) 

useEffect(()=>{
        sanityClient.fetch(`
        *[_type == "featured" && _id==$id ]{
          ...,
          restaurants[]->{ 
              ..., 
              dishes[]->,
              type->{
                name
              }
          }
        }[0]`,{id}).then((data)=>setRestaurants(data?.restaurants))
      },[id])  


  return (
    <View>
        <View className="flex-row items-center justify-between mt-4 px-4 "> 
        <Text className="font-bold text-lg">{title}</Text>
        <ArrowNarrowRightIcon color="#00CCBB"/>
        </View>
     <Text className="px-4 text-gray-500 text-xs">{description}</Text>
     <ScrollView horizontal contentContainerStyle={{
        paddingHorizontal:15
     }} showsHorizontalScrollIndicator={false}
     className="pt-4">
        {restaurants?.map((r)=> <RestourantCard key={r._id} dishes={r.dishes} id={r._id} short_description={r.short_description} title={r.name} imgUrl={r.image} rating={r.rating} genre={r.type?.name} long={r.long}  lat={r.lat} address={r.address}/>)}
     </ScrollView>
    </View>
  )
}

export default FeaturedRow
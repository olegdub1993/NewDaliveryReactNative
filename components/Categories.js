import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import CategoryCard from "./CaragoryCard"
import sanityClient from "./../sanity";

const Categories = ({}) => {
const [categories,setCategories]=useState([])

useEffect(()=>{
    sanityClient.fetch(`*[_type == "category" ]`).then((data)=>setCategories(data))
},[])

  return (
    <ScrollView contentContainerStyle={{paddingHorizontal:15}} horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((c)=><CategoryCard key={c._id} id={c._id} title={c.name} url={c.image} />)}
    </ScrollView>
  )
}

export default Categories
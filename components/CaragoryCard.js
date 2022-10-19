import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { urlFor } from '../sanity';

const CaragoryCard = ({title, url}) => {
  
  return (
    <TouchableOpacity className="mr-2 relative">
        <Image source={{uri:urlFor(url).url()}}
          className="w-20 h-20 rounded"
        />
        <Text className="absolute bottom-1 left-1 text-white font-bold " >{title}</Text>
    </TouchableOpacity>
  )
}

export default CaragoryCard
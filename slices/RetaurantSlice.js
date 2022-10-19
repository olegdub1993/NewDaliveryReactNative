import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    restaurant: {
         title:null,
         imgUrl:null, 
         rating:null,
         genre:null,
         address:null, 
         dishes:null,
         id:null, 
         short_description:null
    },
}

export const restaurantSlice = createSlice({
  name: 'restaurant',
  initialState,
  reducers: {
    setRestaurant: (state,action) => {
      state.restaurant = action.payload
    },

  }, 
})

export  const selectRestaurant=(state)=>state.restaurant.restaurant;

// Action creators are generated for each case reducer function

export const restaurantActions = restaurantSlice.actions
export default restaurantSlice.reducer
import { configureStore } from '@reduxjs/toolkit'
import basketReducer from './slices/BasketSlice'
import restaurantReducer from './slices/RetaurantSlice'

export const store = configureStore({
  reducer: {
    basket:basketReducer,
    restaurant:restaurantReducer
  },
})
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
}

export const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state,action) => {
      state.items = [...state.items,action.payload]
    },
    removeFromBasket: (state, action) => {
        const index = state.items.findIndex((i)=> i.id === action.payload.id)
        let newBasket=[...state.items]

        if(index>=0){
            newBasket.splice(index,1)
        }else{
            console.warn("Cant remove")
        }
        state.items = newBasket
    },
  }, 
})

export  const selectBasketItems=(state)=>state.basket.items
export const selectBasketItemsWithId=(state, id)=> state.basket.items.filter((item)=>item.id===id)
export const selectBasketTotal=(state, id)=> state.basket.items.reduce((total,item)=>total +=item.price,0)
// Action creators are generated for each case reducer function
export const basketActions= basketSlice.actions
export default basketSlice.reducer
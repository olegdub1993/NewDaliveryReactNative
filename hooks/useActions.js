import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import { basketActions } from '../slices/BasketSlice';
import { restaurantActions } from './../slices/RetaurantSlice';

const allActions={
    ...restaurantActions,
    ...basketActions
}
export const useActions = ()=>{
    const dispatch= useDispatch()
    return bindActionCreators(allActions,dispatch)
}
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    cartItems: [],
}
const CartSlice = createSlice({
    // Slice Creation
    /* We call createSlice with an object containing configuration
    options for our slice. The config options include:
    * name: A string value representing the name of our slice.
    It's used internally by Redux Toolkit for action type prefixing
    and other purposes.
    * initialState: An object representing the initial state of our slice.
    * reducers: An object containing reducer functions.
    * Each key-value pair represents a single reducer, where the key
    * it the name of the action and the value is the reducer function.*/
   name: 'cart',
   initialState,
   reducers: {
    /** This reducer funciton handles the action of adding an item to the cart.
     * It takes two parameters: **state** (current state of the slice)
     * and **action** (the dispatched action containing the payload).
     */
    addItemToCart(state, action) {
        /**It first checks if the item already exists in the
         * cart by searching for its ID within state.cartItems. */
        const existingItem = state.cartItems.find(item => item.id === action.payload.id);
        /**If the item exists, it increases the quantity of
         * the existing item in the cart by 1. */
        if (existingItem) {
            existingItem.quantity += 1;
        } 
        /**If the item doesn't exist in the cart, it adds the
         * item to the cartItems array with a quantity of 1.*/
        else {
            state.cartItems.push({ ...action.payload, quantity: 1 });
        }
    },
   }
});



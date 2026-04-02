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
   reducers: {}
});



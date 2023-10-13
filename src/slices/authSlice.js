import { createSlice } from '@reduxjs/toolkit'
import React from 'react'

const initialState={
    signupData:null,
    loading:false,
    type:false,
    token:localStorage.getItem("token")?JSON.parse(localStorage.getItem("token")):null
}
const authSlice=createSlice({
    name:"auth",
    initialState:initialState,
    reducers:{
        setSignupData(state,action){
            state.signupData=action.payload
        },
        setType(state,action){
            state.type=action.payload
        },
        setLoading(state,action){
            state.loading=action.payload
        },
        setToken(state,action){
            state.token=action.payload
        }
    }
})
export const {setSignupData,setType,setLoading,setToken}=authSlice.actions;
export default authSlice.reducer;

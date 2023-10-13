import { combineReducers } from '@reduxjs/toolkit'
import React from 'react'
import authSlice from '../slices/authSlice'

export const rootReducer =combineReducers({
   auth:authSlice
})

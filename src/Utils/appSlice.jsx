/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
    name: "app",
    initialState:{
        isMenuOpen: true,
    },
    reducers: {
        toggleMenu: (state)=>{
            state.isMenuOpen = !state.isMenuOpen
        }
    }
})

export const {toggleMenu} = appSlice.actions

export default appSlice.reducer
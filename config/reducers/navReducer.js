import { createSlice } from '@reduxjs/toolkit'
import { faCode, faUser, faGamepad, faBlog, faPhone } from "@fortawesome/free-solid-svg-icons";


const initialState = { 
    navItems: [
        {name:"Work", icon: faCode},
        {name:"About", icon: faUser},
        {name:"Play", icon: faGamepad},
        {name:"Blog", icon: faBlog},
        {name:"Contact", icon: faPhone}
    ],
    selected: 0
}

const selectNav = createSlice({
    name: "nav",
    initialState,
    reducers: {
        updateSelected: (state, action) => {
            state.selected = action.payload
        }
    }
})

export const {updateSelected} = selectNav.actions
export default selectNav.reducer
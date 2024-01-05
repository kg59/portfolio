import { createSlice } from '@reduxjs/toolkit'
import { faCode, faUser, faGamepad, faBlog, faPhone } from "@fortawesome/free-solid-svg-icons";


const initialState = { 
    navItems: [
        {name:"About", icon: faUser, link: "/#About"},
        {name:"Experience", icon: faGamepad, link: "/#Exp"},
        {name:"Work", icon: faCode, link: "/#Projects"},
        {name:"Contact", icon: faPhone, link: "/#Contact"},
        {name:"Blog", icon: faBlog, link: "/blog"}
    ],
    selected: -1
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
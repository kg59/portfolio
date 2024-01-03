import { createSlice } from '@reduxjs/toolkit'
import { faCode, faUser, faGamepad, faBlog, faPhone } from "@fortawesome/free-solid-svg-icons";


const initialState = { 
    navItems: [
        {name:"Work", icon: faCode, link: "/"},
        {name:"About", icon: faUser, link: "/about"},
        {name:"Play", icon: faGamepad, link: "/play"},
        {name:"Blog", icon: faBlog, link: "/blog"},
        {name:"Contact", icon: faPhone, link: "/contact"}
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
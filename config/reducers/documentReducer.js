import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

const document = createSlice({
    name: "document",
    initialState,
    reducers: {
        toggleDarkMode: (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export default document.reducer
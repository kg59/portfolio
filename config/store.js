import { configureStore } from '@reduxjs/toolkit'
import navReducer from '@/config/reducers/navReducer'

export const store = configureStore({
    reducer: {
        nav: navReducer
    },
})
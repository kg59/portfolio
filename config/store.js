import { configureStore } from '@reduxjs/toolkit'
import navReducer from '@/config/reducers/navReducer'
import heroReducer from '@/config/reducers/heroReducer'

export const store = configureStore({
    reducer: {
        nav: navReducer,
        hero: heroReducer
    },
})
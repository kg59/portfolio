import { createSlice } from "@reduxjs/toolkit";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const initialState = {
    about: {
        name: "KG59",
        jobs: ["Developer", "Gamer", "Researcher"],
        sub: "Design a good sub",
    },
    icon: faStar
}

const getHero = createSlice({
    name: "hero",
    initialState,
    reducers: {}
})

export default getHero.reducer

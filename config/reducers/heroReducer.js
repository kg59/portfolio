import { createSlice } from "@reduxjs/toolkit";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const initialState = {
    hero: {
        name: "Karan Goel",
        jobs: ["Developer", "Gamer", "Researcher"],
        sub: "Using my varied skills, I'm dedicated to innovating and delivering premier solutions",
    },
    icon: faStar
}

const getHero = createSlice({
    name: "hero",
    initialState,
    reducers: {}
})

export default getHero.reducer

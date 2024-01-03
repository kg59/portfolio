import { createSlice } from "@reduxjs/toolkit";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const initialState = {
    about: {
        name: "Hi. I'm Karan.",
        jobs: [
        "A Software Dev.",
        "A Designer.",
        "A Devops Enthusiast.", 
        "A Researcher.",
        "A Gamer.",
        "A Creator.",
        "A Writer.",
        "A Philospher.",
        "A Human."
    ],
        sub: "Using my varied skills, I'm dedicated to innovating and delivering premier solutions.",
    },
    icon: faStar
}

const getHero = createSlice({
    name: "hero",
    initialState,
    reducers: {}
})

export default getHero.reducer

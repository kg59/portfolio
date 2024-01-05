import { createSlice } from "@reduxjs/toolkit";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

const initialState = {
    about: {
        name: "Hi. I'm Karan.",
        jobs: [
        {title:"Software Dev."},
        {title:"Designer.", styles: {font: "'Satisfy', cursive"}},
        {title:"DevOps Guy.", styles: {font: "'M PLUS Code Latin', monospace"}},
        {title:"Researcher.",styles: {font: "'Times New Roman', Times, serif"}},
        {title:"Gamer.",styles: {font: "'Cherry Cream Soda'"}},
        {title:"Writer.",styles: {font: "'Calibri', sans-serif"}},
        {title:"Thinker.",styles: {font: "'GFS Didot'"}},
        {title:"Learner.",styles: {font: "'Open Sans'"}},
        {title:"Human.",styles: {font: "Papyrus, fantasy"}}
    ],
        sub: "Using my varied skills, I'm dedicated to innovating and delivering premier solutions.",
    },
    icon: faSun,
    defaultStyles: {
        font: "ui-sans-serif, system-ui, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'"
    }
}

const hero = createSlice({
    name: "hero",
    initialState,
    reducers: {}
})

export default hero.reducer

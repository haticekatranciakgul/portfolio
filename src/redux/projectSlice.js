// projectSlice.js

import { createSlice } from '@reduxjs/toolkit';

const projectSlice = createSlice({
    name: 'projects',
    initialState: {
        projects: [
          {
            id: 1,
            title: "Rick and Morty App",
            date: "08.2024",
            image: "./rickandmorty.png",
            description: "React Redux MUI",
            avatar: "./rickmortyicon.png",
            url: "https://haticekatranciakgul.github.io/react-redux-rick-morty-app/",
            favoriteCount: 0,
        },
        {
            id: 2,
            title: "Redux Notes App",
            date: "07.2024",
            image: "./notesapp.png",
            description: "React Redux",
            avatar: "./redux.png",
            url: "https://haticekatranciakgul.github.io/reduxnoteapp/",
            favoriteCount: 0,
        },
        {
            id: 3,
            title: "Bill Gate's Spend Money",
            date: "10.2024",
            image: "./billgates.png",
            description: "React Redux MUI",
            avatar: "./billgates.jpg",
            url: "https://haticekatranciakgul.github.io/react-redux-spend-money/",
            favoriteCount: 0,
        },
        {
            id: 4,
            title: "React Weather App",
            date: "04.2024",
            image: "./weatherapp.png",
            description: "React",
            avatar: "./weathericon.png",
            url: "https://haticekatranciakgul.github.io/react-weather-app/",
            favoriteCount: 0,
        },
        {
            id: 5,
            title: "React Fintech App",
            date: "11.2024",
            image: "./fintech.png",
            description: "React MUİ",
            avatar: "./fintech.jpeg",
            url: "https://haticekatranciakgul.github.io/fintech/",
            favoriteCount: 0,
        },
        ],
    },
    reducers: {
        incrementFavoriteCount: (state, action) => {
            const project = state.projects.find(p => p.id === action.payload);
            if (project) {
                project.favoriteCount += 1; 
            }
        },
    },
});

export const { incrementFavoriteCount } = projectSlice.actions;
export const selectProjects = (state) => state.projects.projects;
export default projectSlice.reducer;

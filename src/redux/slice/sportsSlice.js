import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [
        { id: 1, name: 'Football', description: 'A standard size 5 football.' },
        { id: 2, name: 'Basketball', description: 'A professional basketball.' },
        { id: 3, name: 'Tennis Racket', description: 'A lightweight tennis racket.' },
    ],
};

const sportsSlice = createSlice({
    name: 'sports',
    initialState,
    reducers: {
        addSportsItem: (state, action) => {
            state.items.push(action.payload);
        },
        removeSportsItem: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload.id);
        },
    },
});

export const { addSportsItem, removeSportsItem } = sportsSlice.actions;

export default sportsSlice.reducer;

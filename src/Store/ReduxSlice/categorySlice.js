import { createSelector, createSlice } from '@reduxjs/toolkit'

const initialState = [
    {
        id: 1,
        title: 'Fashion'
    },
    {
        id: 2,
        title: 'Electronics'
    },
    {
        id: 3,
        title: 'Living'
    },
    {
        id: 4,
        title: 'Beauty'
    },
    {
        id: 5,
        title: 'Wellness'
    },
    {
        id: 6,
        title: 'Sports'
    },
    {
        id: 7,
        title: 'Toys'
    },
    {
        id: 8,
        title: 'Groceries'
    },
    {
        id: 9,
        title: 'Stationery'
    },
    {
        id: 10,
        title: 'Automotive'
    },
]

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers: {}
})

export const categorySelector = createSelector([(store) => store.category], (category) => category)

export default categorySlice.reducer;
import { createSlice, configureStore } from '@reduxjs/toolkit'


const fileSlice = createSlice({
    name: 'file',
    initialState: {
        selected: false,
        name: 'unknown',
    },
    reducers: {
        toggleSelected: (state, action) => {
            return { ...state, selected: !state.selected, name: action.payload.name
        };
    },
    default: state => state
}
})


export const { toggleSelected } = fileSlice.actions;
export default fileSlice.reducer;
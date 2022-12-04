import { createSlice, } from "@reduxjs/toolkit";

const initialState = {
    user: {},
    userParams: {}
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers:{
        userFetched:(state, action) => {
            state.user = action.payload;
        },
        userLogOut:(state) => {
            state.user = {};
        },
        userParamsFetched:(state, action) => {
            state.userParams = action.payload[0];
        }
    }
});

const {reducer, actions} = userSlice;
export const {
    userFetched,
    userLogOut,
    userParamsFetched
} = actions

export default reducer;
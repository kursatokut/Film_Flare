import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testData: 'GİZEM',
    userToken: null,
    userData: {
        displayName: null,
        email: null,
        photoURL: null,
        emailVerified: false
    }
}


export const appVars = createSlice({
    name: "AppVars",
    initialState,
    reducers: {
        setUserToken: (state, action) => {
            state.userToken = action.payload
        },
        setUserData: (state, action) => {
            state.userData = action.payload
        },
    }
})

export const { setUserToken, setUserData } = appVars.actions
export default appVars.reducer
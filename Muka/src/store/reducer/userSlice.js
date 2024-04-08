import {createSlice, PayloadAction} from "@reduxjs/toolkit";


const initialState = {
    user: null,
    isAuth: false,
    isToken: null
}


export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
            state.isAuth = true
        },
        setAccessToken : (state, action) => {
            state.isToken = action.payload
        },
        logout: (state) => {
            state.user = null
            state.isAuth = false
            state.isToken = null
            localStorage.removeItem('token')
        }
    }
})

export const { setUser, setAccessToken, logout } = userSlice.actions;
export const selectUser = (state) => state.user.user
export const selectIsAuth = (state) => state.user.isAuth

export default userSlice.reducer
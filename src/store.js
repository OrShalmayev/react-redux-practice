import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoggedIn: false
    },
    reducers: {
        incrementStart: state => {
            console.log('incrementStart', state)
            return state;
        },
        incrementSuccess: state => {
            console.log('incrementSuccess', state)
            return state+1;
        },
        loginStart: state => {
            console.log('loginStart')
            return state;
        },
        loginSuccess: (state)=> {
            console.log('loginSuccess')
            return {
                ...state,
                isLoggedIn: true
            }
        },
        incrementError: state => state,
    }
})

// Thunk Action
export const testFetch = () => async dispatch => {
    try {
        setTimeout(()=>{
            dispatch(incrementStart())
        }, 2000);

        setTimeout(()=>{
            dispatch(incrementSuccess())
        }, 2000);


    } catch (error) {
        console.log(error)
    }
}

export const userLogin__thunk = () => async dispatch => {
    try {
        setTimeout(()=>{
            dispatch(loginStart())
        }, 2000);

        setTimeout(()=>{
            dispatch(loginSuccess())
        }, 2000);


    } catch (error) {
        console.log(error)
    }
}

export const {
    incrementStart,
    incrementSuccess,
    loginStart,
    loginSuccess
  } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})
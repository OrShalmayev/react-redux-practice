import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoggedIn: false,
        switch: false,
        payload: ['test'],
        counter: 0
    },
    reducers: {
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
        switchStart: state => {
            return {
                ...state,
                switch: false,
                error: null
            }
        },
        switchSuccess: state => {
            return {
                ...state,
                switch: true,
                payload: ['test'],
                error: null
            }    
        },
        toggleSwitch: state => {
            console.log('toggleSwitch called from store')
            return {
                ...state,
                switch: !state.switch,
                payload: state.payload.filter(v=>v!==null)
            }
        },
        increment: state => {
            return {
                ...state,
                counter: state.counter+1
            }
        }
    }
})

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

export const switch__thunk = () => async dispatch => {
    try {
        dispatch(switchStart())

        setTimeout(()=>{
            dispatch(switchSuccess())
        }, 2000);
    } catch (error) {
        console.log(error)
    }
}

export const {
    incrementStart,
    incrementSuccess,
    loginStart,
    loginSuccess,
    switchStart,
    switchSuccess,
    toggleSwitch,
    increment
  } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})
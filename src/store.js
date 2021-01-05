import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice = createSlice({
    name: 'counter',
    initialState: {
        isLoggedIn: false,
        switch: false,
        payload: []
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
                error: null
            }    
        },
        toggleSwitch: state => {
            console.log('toggleSwitch called from store')
            return {
                ...state,
                switch: !state.switch,
                payload: [...state.payload]
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
    toggleSwitch
  } = counterSlice.actions

export const store = configureStore({
    reducer: counterSlice.reducer
})
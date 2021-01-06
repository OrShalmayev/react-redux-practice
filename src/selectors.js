import { createSelector,createDraftSafeSelector } from '@reduxjs/toolkit'


export const isLoggedIn__selector = createSelector(
    state => state.isLoggedIn,
    (isLoggedIn)  => {
        return {
            isLoggedIn,
        }
    }
)
export const appSelector__selector = createDraftSafeSelector(
    state => state.isLoggedIn,
    state => state.payload,
    (isLoggedIn, payload) => {
        return {
            isLoggedIn,
            payload
        }
    }
)
export const counter__selector = createSelector(
    state => state.counter,
    counter => {
        return {
            counter
        }
    }
)
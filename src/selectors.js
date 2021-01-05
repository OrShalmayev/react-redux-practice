import { createSelector } from '@reduxjs/toolkit'


export const appSelector = createSelector(
    state => state.isLoggedIn,
    isLoggedIn => {
        return {
            isLoggedIn
        }
    }
)
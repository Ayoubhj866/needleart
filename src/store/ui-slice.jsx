import { createSlice } from "@reduxjs/toolkit";

const uiSice = createSlice({
    name: 'ui',
    initialState: {
        isMobileMenuOpen: false
    },
    reducers: {
        toggleMobileMenu: (state) => {
            state.isMobileMenuOpen = !state.isMobileMenuOpen
        }
    }
})

export const toggleMobileMenu = uiSice.actions;
export default uiSice.reducer;

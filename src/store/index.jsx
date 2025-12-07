import uiReducer from "@/store/ui-slice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducer: {
        ui: uiReducer,
    }
})

export default store;

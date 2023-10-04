import { configureStore } from "@reduxjs/toolkit";
import charactersSlice from "./characters";
import { rickAndMortyApi } from "./services/rickAndMortyApi";
import { storeMiddleware } from "./middlewares/localStore";
const store = configureStore({
    reducer: {
        characters: charactersSlice,
        [rickAndMortyApi.reducerPath]: rickAndMortyApi.reducer
    },
    middleware: (getDefaultMiddleware)=>[...getDefaultMiddleware(), storeMiddleware, rickAndMortyApi.middleware]
});

store.subscribe(() => console.log(store.getState()));

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type ThunkApiConfig = {
    state: RootState;
    dispatch: AppDispatch;
};

export default store;

import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { favoriteSlice } from './slice'
import { FLUSH, PAUSE, PERSIST, PersistConfig, persistReducer, persistStore, PURGE, REGISTER, REHYDRATE } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig: PersistConfig<any> = {
    key: 'favorite',
    storage,
    whitelist: ['favorite']
}

const rootReducer = combineReducers({
    favorite: favoriteSlice.reducer,
})

const persistedReducer = persistReducer<any, any>(persistConfig, rootReducer)

export const store = configureStore({
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => 
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REGISTER, PURGE, PAUSE, REHYDRATE, PERSIST]
            }
        })
})

export const persistor = persistStore(store)
export type TypeRootState = ReturnType<typeof rootReducer>
import { configureStore } from '@reduxjs/toolkit';
import user from './UserSlice'



const stringMiddleware = () => (next: (arg0: { type: string; }) => any) => (action: { type: string; }) => {
    if (typeof action === 'string') {
        return next({
            type: action
        })
    }
    return next(action)
};

const store = configureStore({
    reducer: {user},
    middleware: getDefaultMiddleware => getDefaultMiddleware({serializableCheck: false}).concat(stringMiddleware),
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;
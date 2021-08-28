// import { act } from "react-dom/cjs/react-dom-test-utils.production.min";
import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage'
import listReducer from "./phonebookReducer";
import authReducer from './Auth/authReducer';
import { persistStore, persistReducer,FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER} from 'redux-persist';




const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
    }
  })
]
const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ['token']
}
const store = configureStore({
  reducer: {
    authReducer: persistReducer(authPersistConfig,authReducer),
    listReducer,
  },
    devTools: process.env.NODE_ENV === "development",
    middleware
})
const persistor = persistStore(store)
const listStore = { store, persistor }
export default listStore
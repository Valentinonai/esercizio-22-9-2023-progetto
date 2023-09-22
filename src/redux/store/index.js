import { combineReducers, configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { encryptTransform } from "redux-persist-transform-encrypt";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import storage from "redux-persist/lib/storage";
import generalReducers from "../reducers/GeneralReducers";

const persistConfig = {
  key: "root",
  storage: storage,
  transforms: [
    encryptTransform({
      secretKey: process.env.REACT_APP_LOCALSTORAGEKEY,
    }),
  ],
  blacklist: ["GeneralReducers"], //WHITELIST COMP SALVATI
};

const rootReducer = combineReducers({
  GeneralReducers: generalReducers,
});

const persistedReducers = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducers,
  middleware: getDefaultMiddleware({ serializableCheck: false }),
});

export const persiStore = persistStore(store);

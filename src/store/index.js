import Reactotron from "../config/ReactotronConfig";
import { createStore, compose } from "redux";
import { reducer } from "./todo";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web

const persistConfig = {
  key: "root",
  storage,
};

const composer =
  process.env.NODE_ENV === "development"
    ? compose(Reactotron.createEnhancer())
    : compose(...[]);

const persistedReducer = persistReducer(persistConfig, reducer);
export const store = createStore(persistedReducer, composer);
export const persistor = persistStore(store);

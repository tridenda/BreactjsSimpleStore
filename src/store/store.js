import { compose, createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// Set nodeEnv to "development" during develop the app
// or set to "production" when you want to deploy the app
const nodeEnv = "production";
const middleWares = [process.env.NODE_ENV === nodeEnv && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV === nodeEnv &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const composedEnhancers = composeEnhancer(applyMiddleware(...middleWares));

export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);

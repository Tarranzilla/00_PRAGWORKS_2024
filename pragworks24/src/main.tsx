// Vanilla Imports
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";

// React Router Imports
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Redux Imports
import mainContext from "./context/main-context.tsx";
import { configureStore, createAction } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

// Redux Persist Imports
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { PersistGate } from "redux-persist/integration/react";

// Components Imports
import LandingPage from "./components/main/Landing_Page.tsx";
import Error from "./components/sections/Error.tsx";
import Register from "./components/sections/Register.tsx";
import Teste3D from "./components/sections/Teste3D.tsx";
import TesteProdutos from "./components/sections/TesteProdutos.tsx";

// Router Creation
const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: "/",
                element: <LandingPage />,
            },
            {
                path: "/3dteste",
                element: <Teste3D />,
            },
            {
                path: "/produtosteste",
                element: <TesteProdutos />,
            },
            {
                path: "/registro",
                element: <Register />,
            },
            {
                path: "/promocao",
                element: <Error />,
            },
            {
                path: "*",
                element: <Error />,
            },
        ],
    },
]);

// Redux Persist Configuration
const persistConfig = {
    key: "root",
    storage,
    version: 1,
};

// Redux Persist Store Creation
const persistedReducer = persistReducer(persistConfig, mainContext);
const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
});

export const persistor = persistStore(store);
export const clearPersistedData = createAction("persist/clearPersistedData");

import "@material-design-icons/font";
import "./index.css";

// Render, Provider and PersistGate (?)
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <RouterProvider router={router} />
            </PersistGate>
        </Provider>
    </React.StrictMode>
);

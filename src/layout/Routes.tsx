import { Route, Routes } from "react-router-dom";
import React from "react";
import { Characters, Favorite, Character } from "../pages";
import Default from "./Default";

function AppRoutes(): JSX.Element {
    return (
        <div className="App">
            <Routes>
                <Route
                    path="/"
                    element={< Default />}
                >
                    <Route
                        index element={<Favorite />}
                    />
                    <Route
                        path="characters/:page?"
                        element={<Characters />}
                    />
                </Route>
                <Route
                    path="character/:id"
                    element={<Character />}
                />
            </Routes >
        </div>
    );
}

export default AppRoutes;

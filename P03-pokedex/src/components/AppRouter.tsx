import React from "react";
import { Route, Routes } from "react-router";

const PokedexView = React.lazy(() => import('./views/home/HomeView'));
const ProfileView = React.lazy(() => import('./views/profile/ProfileView'));
const PokemonTypeView = React.lazy(() => import('./views/pokemon-type/PokemonTypeView'));
const FavoritePokemonView = React.lazy(() => import('./views/favorite/FavoritePokemonView'));

const AppRouter: React.FC = () => (
    <Routes>
        <Route
            path="/"
            element={
                <React.Suspense fallback={<div>Loading...</div>}>
                    <PokedexView />
                </React.Suspense>
            }>
        </Route>
        <Route
            path="/pokemon/:pokemonName"
            element={
                <React.Suspense fallback={<div>Loading...</div>}>
                    <ProfileView />
                </React.Suspense>
            }>
        </Route>
        <Route
            path="/type/:pokemonType"
            element={
                <React.Suspense fallback={<div>Loading...</div>}>
                    <PokemonTypeView />
                </React.Suspense>
            }>
        </Route>
        <Route
            path="/favorite"
            element={
                <React.Suspense fallback={<div>Loading...</div>}>
                    <FavoritePokemonView />
                </React.Suspense>
            }>
        </Route>
    </Routes>
);

export default AppRouter;

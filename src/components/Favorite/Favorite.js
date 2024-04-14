import React from 'react';
import {useSelector} from "react-redux";

import {Movie} from "../Movie/Movie";
import {NoFavoritePage} from "../../pages";

import css from './favorite.module.css';

const Favorite = () => {

    const {favoriteMovies} = useSelector(state => state.movies);

    return (
        <div className={css.favoriteList}>
            {favoriteMovies.length !== 0 ? favoriteMovies.map(movie=><Movie  key={movie.id} movie={movie}/>) : <NoFavoritePage/>}
        </div>
    );
};

export {Favorite};
import React, { useEffect } from 'react';
import { useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { moviesActions } from "../../redux";

import css from './movieDetail.module.css';

const MovieDetails = () => {
    const { state } = useLocation();
    const { id } = useParams();

    const { movieById } = useSelector(state => state.movies);


    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(moviesActions.oneMovie({id}));
        }
    }, [dispatch, id]);

    let movie;
    if (state) {
        movie = state;
    } else if (id && movieById) {
        movie = movieById;
    } else {
        return <div>Movie details not found!</div>;
    }

    const { description, actors, director, genre, rating } = movie;

    return (
        <div className={css.card}>
            <div>Description: {description}</div>
            <div>Actors: {actors ? actors.join(', '): ''}</div>
            <div>Director: {director}</div>
            <div>Genre: {genre ? genre.join(', '): ''}</div>
            <div>Rating: {rating}</div>
        </div>
    );
};

export { MovieDetails };
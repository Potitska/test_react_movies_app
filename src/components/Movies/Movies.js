import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";
import {Movie} from "../Movie/Movie";


import css from './movies.module.css';

const Movies = () => {

    const dispatch = useDispatch();
    const {movies, searchValue} = useSelector(state => state.movies);
    let filteredMovies = movies;

    useEffect(()=>{
        dispatch(moviesActions.all())
    },[dispatch])

    //search
    if (searchValue){
        filteredMovies = movies.filter(item=> item.title.toLowerCase().includes(searchValue.toLowerCase()))
    }

    return (
        <div className={css.list_card}>
            {filteredMovies.length !== 0 ? filteredMovies.map(movie=><Movie key={movie.id} movie={movie}/>) : 'Not Found Movie'}
        </div>
    );
};

export {Movies};
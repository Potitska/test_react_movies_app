import React, {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";

import css from './movie.module.css';



const Movie = ({movie}) => {

    const {id, image, title, rating, release_date} = movie;

    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {favoriteMovies} = useSelector(state => state.movies);

    const [triggerOnFavorite, setTriggerOnFavorite] = useState(false);

    useEffect(() => {
        setTriggerOnFavorite(favoriteMovies.some(favoriteMovie => favoriteMovie.id === movie.id));
    }, [favoriteMovies, movie.id]);

    const handleToggleFavorite = () => {
        if (triggerOnFavorite){
            dispatch(moviesActions.deleteFromFavorite(movie))
        }else {
            dispatch(moviesActions.addFavoriteMovie(movie))
        }
        setTriggerOnFavorite(!triggerOnFavorite)
    }

    return (
        <div className={css.card}>
            <img src={image} alt={title} onClick={() => navigate(`/movies/${id}`, {state: {...movie}})}/>
            <div className={css.name}>{title}</div>
            <div>Rating: {rating}</div>
            <div>Release date: {release_date}</div>
            <div className={css.unFavorite} onClick={handleToggleFavorite}>
                {triggerOnFavorite ? <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g transform="translate(0 -1028.4)">
                        <path
                            d="m7 1031.4c-1.5355 0-3.0784 0.5-4.25 1.7-2.3431 2.4-2.2788 6.1 0 8.5l9.25 9.8 9.25-9.8c2.279-2.4 2.343-6.1 0-8.5-2.343-2.3-6.157-2.3-8.5 0l-0.75 0.8-0.75-0.8c-1.172-1.2-2.7145-1.7-4.25-1.7z"
                            fill="#c0392b"/>
                    </g>
                </svg> : <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <g data-name="Layer 54" id="Layer_54">
                        <path className="cls-1"
                              d="M16,28.72a3,3,0,0,1-2.13-.88L3.57,17.54a8.72,8.72,0,0,1-2.52-6.25,8.06,8.06,0,0,1,8.14-8A8.06,8.06,0,0,1,15,5.68l1,1,.82-.82h0a8.39,8.39,0,0,1,11-.89,8.25,8.25,0,0,1,.81,12.36L18.13,27.84A3,3,0,0,1,16,28.72ZM9.15,5.28A6.12,6.12,0,0,0,4.89,7a6,6,0,0,0-1.84,4.33A6.72,6.72,0,0,0,5,16.13l10.3,10.3a1,1,0,0,0,1.42,0L27.23,15.91A6.25,6.25,0,0,0,29,11.11a6.18,6.18,0,0,0-2.43-4.55,6.37,6.37,0,0,0-8.37.71L16.71,8.8a1,1,0,0,1-1.42,0l-1.7-1.7a6.28,6.28,0,0,0-4.4-1.82Z"/>
                    </g>
                </svg>}
            </div>
            <div>
                <button className={css.editBtn} onClick={()=>dispatch(moviesActions.setMovieForUpdate(movie))}>Edit</button>
                <button className={css.deleteBtn} onClick={()=>dispatch(moviesActions.deleteMovie({id}))}>Delete</button>
            </div>
        </div>
    );
};

export {Movie};
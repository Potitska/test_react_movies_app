import React from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";

import {moviesActions} from "../../redux";

import css from './movieForm.module.css';


const MovieForm = () => {

    const {register, handleSubmit, setValue, reset} = useForm();
    const dispatch = useDispatch();
    const {movieForUpdate} = useSelector(state => state.movies);


    if (movieForUpdate) {
        setValue('image', movieForUpdate.image)
        setValue('title', movieForUpdate.title);
        setValue('rating', movieForUpdate.rating);
        setValue('release_date', movieForUpdate.release_date);
    }

    const save = async (movie) => {
        try {
            await dispatch(moviesActions.create({ movie }));
            reset();
        } catch (error) {
            console.error('Error saving movie:', error);
        }
    };

    const update = async (movie) => {
        try {
            await dispatch(moviesActions.update({ id: movieForUpdate.id, movie }));
            reset();
        } catch (error) {
            console.error('Error updating movie:', error);
        }
    };

    return (
        <form className={css.form} onSubmit={handleSubmit(movieForUpdate ? update : save)}>
            <input type="text" placeholder={'URL image'} {...register('image')}/>
            <input type="text" placeholder={'Title'} {...register('title')}/>
            <input type="number" step="any" placeholder={'Rating'} {...register('rating')}/>
            <input type="date" placeholder={'Release Date'} {...register('release_date')} lang="en"/>
            <button>{movieForUpdate ? 'update' : 'save'}</button>
        </form>
    );
}

export {MovieForm};
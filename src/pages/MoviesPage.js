import React from 'react';
import {useSelector} from "react-redux";

import {MovieForm, Movies} from "../components";


const MoviesPage = () => {

    const {isLoading} = useSelector(state => state.movies);

    return (
        <div>
            <MovieForm/>
            {isLoading && <h1>Loading...</h1>}
           <Movies/>
        </div>
    );
};

export {MoviesPage};
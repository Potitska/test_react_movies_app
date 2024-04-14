import React from 'react';

import {Link} from "react-router-dom";

import {Search} from "../Search/Search";

import css from './header.module.css';

const Header = () => {
    return (
        <div className={css.header}>
            <Link to={'/'}><div className={css.name}>Binge-Watch</div></Link>
            <Link to={'/movies'} className={css.menuList}>Movies</Link>
            <Link to={'/movies/favorite'} className={css.menuList}>My Favorite</Link>
            <Search/>
        </div>
    );
};

export {Header};
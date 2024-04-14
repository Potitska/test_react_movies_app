import React from 'react';

import css from './noFavorite.module.css';
const NoFavoritePage = () => {
    return (
        <div className={css.noFavorite}>
            0 ITEMS <br/>
            You haven't saved any items to your wishlist yet. Start choosing and add your favorite items to your wishlist.
        </div>
    );
};

export {NoFavoritePage};
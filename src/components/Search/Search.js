import React, {useRef} from 'react';

import {useDispatch} from "react-redux";
import {moviesActions} from "../../redux";

import css from './search.module.css';

const Search = () => {

    const dispatch = useDispatch();
    const inputSearch = useRef();
    const onChangeInput = (event) => {
        dispatch(moviesActions.setSearchValue(inputSearch.current.value))
    };

    const clearInput = () => {
        dispatch(moviesActions.setSearchValue(''))
        inputSearch.current.value = ''
        inputSearch.current.focus()
    };

    return (
        <div className={css.search}>
            <svg className={css.icon} viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                <g data-name="Layer 2" id="Layer_2">
                    <path d="M13,23A10,10,0,1,1,23,13,10,10,0,0,1,13,23ZM13,5a8,8,0,1,0,8,8A8,8,0,0,0,13,5Z"/>
                    <path
                        d="M28,29a1,1,0,0,1-.71-.29l-8-8a1,1,0,0,1,1.42-1.42l8,8a1,1,0,0,1,0,1.42A1,1,0,0,1,28,29Z"/>
                </g>
            </svg>
            <input
                ref={inputSearch}
                onChange={onChangeInput}
                type={'text'}
                placeholder={'Search product...'}
            />
            <div onClick={clearInput}>
                <img className={css.iconClear}
                     src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABJUlEQVR4nO3YT0sCQRyH8YeuUu0KG/RHUG8efAceetFBJ6noEKUI6iG1wHolxcIYg6wi67Qzs3w/IHga92F09zeCiIiIiMg/6QEPwKXDNRvAHXBLhYbADzAHLhysdwo8W2ueUJEMmJoPfj9yZ/KdeDRrfQNdKpYCY3MBC+DKQUQHT46JsSO+fEYUxSwPjMkjnkKKsGNGVsw1u50BLyFGFMWsdsQEH7GR7Ik534poE7hkK+YmxoiNJjAxF/4BvJr3n0CLyCTAmwnIX+uYdqJ2Ic06fLWSgjtXdD/2dM/tN5pnSHrA0z3Y0aTMvBVsTFpiAg5mfHc9xnuNyaxT4qLkKbFhzv7eTocZMHN41PUWM6zLnw99E+Miwo65BwYO1xQRERER4c8v6Th7MMbV15kAAAAASUVORK5CYII=" alt={'clear'}/>
            </div>
        </div>
    );
};

export {Search};
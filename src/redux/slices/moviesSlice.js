import {createAsyncThunk, createSlice, isFulfilled, isPending} from "@reduxjs/toolkit";

import {moviesService} from "../../services/moviesService";

const initialState = {
    movies: [],
    movieById: {},
    favoriteMovies: [],
    searchValue: '',
    movieForUpdate: null,
    isLoading: null
}

const all = createAsyncThunk('moviesSlice/all',
    async (_, thunkAPI) => {
        try {
            const {data} = await moviesService.getAll();
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const oneMovie = createAsyncThunk('moviesSlice/oneMovie',
    async ({id}, thunkAPI) => {
        try {
            const {data} = await moviesService.getMovieById(id);
            return data
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const create = createAsyncThunk('moviesSlice/create',
    async ({movie}, thunkAPI) => {
        try {
            await moviesService.create(movie);
            thunkAPI.dispatch(all())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }

    }
)

const update = createAsyncThunk('moviesSlice/update',
    async ({id, movie}, thunkAPI) => {
        try {
            await moviesService.updateById(id, movie)
            thunkAPI.dispatch(all())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const deleteMovie = createAsyncThunk('moviesSlice/deleteMovie',
    async ({id}, thunkAPI) => {
        try {
            await moviesService.deleteById(id)
            thunkAPI.dispatch(all())
        } catch (e) {
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        addFavoriteMovie: (state, action) => {
            if (!state.favoriteMovies.some(fav => fav.id === action.payload.id)) {
                state.favoriteMovies.push(action.payload);
            }
        },
        deleteFromFavorite: (state, action) => {
            state.favoriteMovies = state.favoriteMovies.filter(movie => movie.id !== action.payload.id)
        },
        setSearchValue: (state, action) => {
            state.searchValue = action.payload
        },
        setMovieForUpdate: (state, action) => {
            state.movieForUpdate = action.payload
        }
    },
    extraReducers: builder => builder
        .addCase(all.fulfilled, (state, action) => {
            state.movies = action.payload;
        })
        .addCase(oneMovie.fulfilled,(state, action)=>{
            state.movieById = action.payload;
        })
        .addCase(create.fulfilled, (state, action) => {
        })
        .addCase(update.fulfilled, (state) => {
            state.movieForUpdate = null
        })
        .addCase(deleteMovie.fulfilled, (state) => {
        })
        .addMatcher(isPending(), state => {
            state.isLoading = true
        })
        .addMatcher(isFulfilled(), state => {
            state.isLoading = false
        })
})

const {reducer: moviesReducer, actions} = moviesSlice;

export const {setSearchValue, addFavoriteMovie, deleteFromFavorite, setMovieForUpdate} = moviesSlice.actions;

const moviesActions = {
    ...actions,
    all,
    oneMovie,
    create,
    update,
    deleteMovie
}

export {
    moviesReducer,
    moviesActions
}

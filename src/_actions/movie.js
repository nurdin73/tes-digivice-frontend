import {GET_MOVIE_PLAYING, GET_MOVIE_TRENDING, GET_MOVIE_BY_TITLE, SEARCH, GET_MOVIE_BY_ID, GET_MOVIE_BY__GENRE, GET_GENRE_BY_ID, GET_MOVIES} from '../config/constants'

import axios from 'axios'

export const getMovieReleased = () => {
    return {
        type: GET_MOVIE_PLAYING,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/released`
        })
    }
}
export const getMovieTrending = () => {
    return {
        type: GET_MOVIE_TRENDING,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/trending`
        })
    }
}

export const search = (search) => {
    return {
        type: SEARCH,
        payload: search
    }
}

export const getMovieByTitle = (title) => {
    return {
        type: GET_MOVIE_BY_TITLE,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/movie/search/${title}`
        })
    }
}

export const getMovieById = (id) => {
    return {
        type: GET_MOVIE_BY_ID,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/movie/${id}`
        })
    }
}

export const getMovieByGenre = (id) => {
    return {
        type: GET_MOVIE_BY__GENRE,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/genre/${id}/movies`
        })
    }
}

export const getGenreById = (id) => {
    return {
        type: GET_GENRE_BY_ID,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/genre/${id}`
        })
    }
}

export const getMovie = () => {
    return {
        type: GET_MOVIES,
        payload: axios({
            method: 'get',
            url: `https://movie-triller.herokuapp.com/api/v1/movies`
        })
    }
}


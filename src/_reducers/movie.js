import {GET_MOVIE_PLAYING, GET_MOVIE_TRENDING, GET_MOVIE_BY_TITLE, SEARCH, GET_MOVIE_BY_ID, GET_MOVIE_BY__GENRE, GET_GENRE_BY_ID, GET_MOVIES} from '../config/constants'
const initialState = {
	released: [],
	trending: [],
	search: [],
	detailMovie: [],
	genreMovie: [],
	genre: [],
	movie: [],
	valueSearch: "",
    isLoading: false,
    error: false
};


export const Movie = (state = initialState, action) => {
	switch (action.type) {
		// movie playing
		case `${GET_MOVIE_PLAYING}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIE_PLAYING}_FULFILLED`:
			return {
				...state,
				released: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIE_PLAYING}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// movie trending
		case `${GET_MOVIE_TRENDING}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIE_TRENDING}_FULFILLED`:
			return {
				...state,
				trending: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIE_TRENDING}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// search value
		case `${SEARCH}`:
			return {
				...state,
				valueSearch: action.payload,
				isLoading: false
			};
		// search result
		case `${GET_MOVIE_BY_TITLE}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIE_BY_TITLE}_FULFILLED`:
			return {
				...state,
				search: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIE_BY_TITLE}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// get movie by ID
		case `${GET_MOVIE_BY_ID}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIE_BY_ID}_FULFILLED`:
			return {
				...state,
				detailMovie: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIE_BY_ID}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// get movie by genre
		case `${GET_MOVIE_BY__GENRE}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIE_BY__GENRE}_FULFILLED`:
			return {
				...state,
				genreMovie: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIE_BY__GENRE}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// get movie by genre
		case `${GET_GENRE_BY_ID}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_GENRE_BY_ID}_FULFILLED`:
			return {
				...state,
				genre: action.payload.data,
				isLoading: false
			};
		case `${GET_GENRE_BY_ID}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		// movies
		case `${GET_MOVIES}_PENDING`:
			return {
				...state,
				isLoading: true
			};
		case `${GET_MOVIES}_FULFILLED`:
			return {
				...state,
				movie: action.payload.data,
				isLoading: false
			};
		case `${GET_MOVIES}_REJECTED`:
			return {
				...state,
				error: true,
				isLoading: false
			};
		default:
			return state;
	}
}




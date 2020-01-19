import { createStore, combineReducers, applyMiddleware } from "redux";
import { promise, logger } from "./middleware";
import {Movie} from '../_reducers/movie'
const rootReducers = combineReducers({
    Movie
})
const store = createStore(rootReducers, applyMiddleware(promise, logger));

export default store
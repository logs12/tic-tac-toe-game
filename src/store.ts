import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import {
    GameReducer,
} from 'reducers';
import { IGame } from 'models/GameModel';

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

// eslint-disable-next-line no-underscore-dangle
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export interface IState {
    game: IGame,
}

const store = createStore(
    combineReducers({
        game: GameReducer,
    }),
    composeEnhancers(
        applyMiddleware(),
    )
);

export default store;

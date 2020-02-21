// @flow

import {
    SET_MOVE_GAME,
} from 'constants/GameConstants';
import { IAction } from 'actions/ActionCreatorTypings';
import { 
    IGame,
    initialState,
} from 'models/GameModel';

export function GameReducer(
    state: IGame = initialState.state,
    action: IAction<any>,
) {
    switch (action.type) {
        case SET_MOVE_GAME:
            return {
                ...state,
                squares: action.payload.squares,
                stepNumber: action.payload.stepNumber,
                xIsNext: action.payload.xIsNext,
            };
        default:
            return state;
    }
}
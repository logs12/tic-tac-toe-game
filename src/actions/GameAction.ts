import { IAction } from 'actions/ActionCreatorTypings';

import {
    SquaresType,
    StepNumberType,
    XIsNextType,
    IGame,
} from 'models/GameModel';
import {
    SET_MOVE_GAME,
} from 'constants/GameConstants';


export interface ISetMoveGameAction { (
    squares: SquaresType,
    stepNumber: StepNumberType,
    xIsNext: XIsNextType,
): IAction<IGame> };
export const setMoveGameAction = ( 
    squares: SquaresType,
    stepNumber: StepNumberType,
    xIsNext: XIsNextType,
): IAction<IGame> => ({
    type: SET_MOVE_GAME,
    payload: { 
        squares,
        stepNumber,
        xIsNext,
    },
});
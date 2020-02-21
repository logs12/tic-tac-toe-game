import { createSelector } from 'reselect';
import { IGame } from 'models/GameModel';
import { IState } from 'store';


const selectGameState = (state: IState) => state.game;

const makeSelectSquares = () => createSelector(
    selectGameState,
    (substate: IGame) => substate.squares,
);

const makeSelectStepNumber = () => createSelector(
    selectGameState,
    (substate: IGame) => substate.stepNumber,
);

const makeSelectXIsNext = () => createSelector(
    selectGameState,
    (substate: IGame) => substate.xIsNext,
);


export {
    makeSelectSquares,
    makeSelectStepNumber,
    makeSelectXIsNext,
};

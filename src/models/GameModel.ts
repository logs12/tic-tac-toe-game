import {
    ZERO,
    TOE,
} from 'constants/GameConstants';

export type StepNumberType = number;
export type XIsNextType = boolean;
export type SquareType = null | typeof TOE | typeof ZERO;
export type SquaresType = Array<SquareType>;

export interface IGame {
    squares: SquaresType,
    stepNumber: StepNumberType,
    xIsNext: XIsNextType,
};

export const initialState = {    
    get state(): IGame {
        return {
            squares: [],
            stepNumber: 0,
            xIsNext: true
        };
    }
}
import './index.scss';
import React from 'react';
import {
    CELL_SIZE,
} from 'project.config.json';
import {
    SquareType,
} from 'models/GameModel';

export type SquareNumberType = number;
export type SquareHandleClickType = (squareNumber: SquareNumberType) => void;

interface SquarePropsType{
    squareNumber: SquareNumberType,
    squareValue: SquareType,
    onClick: SquareHandleClickType,
    isDisabled: boolean,
};

const Square = ({
    squareNumber,
    squareValue,
    onClick,
    isDisabled,
}: SquarePropsType) => {
    const classNames = `square${!isDisabled ? ' square__disabled' : ''}`;
    return (
        <button
            style={{
                lineHeight: `${CELL_SIZE}px`,
                height: `${CELL_SIZE}px`,
                width: `${CELL_SIZE}px`,
            }}
            className={classNames}
            onClick={() => onClick(squareNumber)}
            disabled={!isDisabled}
        >
            {squareValue}
      </button>
    );
}
export default Square;
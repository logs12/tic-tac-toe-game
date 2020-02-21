import './index.scss';
import React from 'react';
import Square, {
    SquareHandleClickType,
} from 'components/Square';
import {
    CELL_SIZE,
} from 'project.config.json';
import {
    SquaresType,
} from 'models/GameModel';

interface BoardPropsType {
    cntCell: number,
    squares: SquaresType,
    onClick: SquareHandleClickType,
};

const isDisabledSquare = (
    squares: SquaresType,
    index: number,
): boolean => {
    if (
        index === 0
        && squares.length
        && !squares.some(square => square !== null)
    ) {
        return true;
    }

    if (
        index !== 0
        && squares.length
        && !squares.some(square => square !== null)
    ) {
        return false;
    }
    return true;
}

const renderRow = (
    squares: SquaresType,
    indexRow: number,
    countRow: number,
    onClick: SquareHandleClickType,
) => {

    let cell = [];
    let countIteration = indexRow+countRow;
    for (let indexCell = indexRow; indexCell < countIteration; indexCell++) {
        cell.push(
            <Square
                key={`square-${indexCell}`}
                squareValue={squares[indexCell]}
                squareNumber={indexCell}
                onClick={onClick}
                isDisabled={ isDisabledSquare(squares, indexCell) }
            />
        );
    }
    return cell;
}

const Board = ({
    cntCell,
    onClick,
    squares,
}: BoardPropsType) => {
    let row = [];
    for(let index = 0; index < squares.length; index++ ) {
        if (index % cntCell === 0) {
            row.push(
                <div 
                    key={`board-${index}`}
                    className="board-row"
                >
                    {
                        renderRow(
                            squares,
                            index,
                            cntCell,
                            onClick,
                        )
                    }
                </div>
            );
        }
    }

    return (
        <div 
            className="game-board"
            style={{
                width: `${cntCell*CELL_SIZE}px`
            }}
        >
            { row }
        </div>
    );
}
export default Board;
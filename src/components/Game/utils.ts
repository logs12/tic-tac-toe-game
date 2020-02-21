import {
    SquaresType,
    SquareType,
} from 'models/GameModel';

function getInitMatrix(array: any[], rowLength: number): number[][] {
    let result:number[][] = [];

    for (let index = 0; index < array.length; index++) {
        if (index % rowLength === 0) {
            let row:number[] = [];
            for (let j = index; j < rowLength + index; j++) {
                row.push(j);
            }
            result.push(row);
        }
    }
    return result;
}

function getTransMatrix(matrix: number[][]): any[][] {
    const result: number[][] = [];
    for (let i = 0; i < matrix[0].length; i++) {
        result[i] = [];
        for (let j = 0; j < matrix.length; j++) {
            result[i][j] = matrix[j][i];

        }
    }
    return result;
}

function getDiagonalsMatrix(matrix: number[][]): number[][] {
    const result: number[][] = [[],[]];
    const rowLength: number = matrix[0].length;
    let rightDiagonal: number = rowLength;
    let leftDiagonal = 0;
    for (let i = 0; i < rowLength; i++) {
        leftDiagonal = i;
        rightDiagonal = rowLength - i;
        for (let j = 0; j < matrix.length; j++) {
            if (leftDiagonal === j) {
                result[0].push(matrix[i][leftDiagonal]);
            }
            if (rightDiagonal === rowLength - j) {
                result[1].push(matrix[i][rightDiagonal-1]);
            }
            
        }
    }
    return result;
}


export function calculateWinner(
    squares: SquaresType,
    сntCell: number,
) {
    let initMatrix:number[][] = getInitMatrix(squares, сntCell);
    let matrix:number[][] = initMatrix
        .concat(getTransMatrix(initMatrix))
        .concat(getDiagonalsMatrix(initMatrix));

    const conditionWin = process.env.REACT_APP_CONDITION_WIN;
    if (conditionWin == null) {
        return null;
    }
    for (let i = 0; i < matrix.length; i++) {
        
        let bufferWin: SquareType[] = [];
        if (squares[matrix[i][0]]) {
            bufferWin.push(squares[matrix[i][0]]);   
            for(let j = 0; j < +conditionWin; j++) {
                if (squares[matrix[i][0]] === squares[matrix[i][j+1]]) {
                    bufferWin.push(squares[matrix[i][0]]);
                }
            }   
        }
        if (bufferWin.length === +conditionWin) {
            return bufferWin[0];
        }        
    }
    return null;
}
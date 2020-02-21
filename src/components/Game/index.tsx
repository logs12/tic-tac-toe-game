import './index.scss';
import * as React from 'react';
import Board from 'components/Board';
import {
    CELL_SIZE,
} from 'project.config.json';
import WithGame from 'containers/WithGame';
import { 
    IGame,
} from 'models/GameModel';
import {
    ISetMoveGameAction,
} from 'actions/GameAction';
import {
    ZERO,
    TOE,
} from 'constants/GameConstants';
import { SquareNumberType } from 'components/Square';
import { calculateWinner } from 'components/Game/utils';

interface IGameProps extends IGame {
    setMoveGameAction: ISetMoveGameAction,
};

type CntRowType = number;

export class Game extends React.Component<IGameProps> {

    cntRow: CntRowType = Math.trunc(window.innerHeight / CELL_SIZE);

    constructor(props: IGameProps) {
        super(props);

        props.setMoveGameAction(
            Array(this.cntRow * this.cntRow).fill(null),
            0,
            true,
        );
    }
  
    handleClick(squareNumber: SquareNumberType) {
        const { 
            squares,
            xIsNext,
            stepNumber,
            setMoveGameAction,
        } = this.props;
        if (calculateWinner(squares, this.cntRow) || squares[squareNumber]) {
            return;
        }
        squares[squareNumber] = xIsNext ? TOE : ZERO;
        setMoveGameAction(
            squares,
            stepNumber + 1,
            !xIsNext,
        );
    }
  
    render() {
        const {
            squares,
            xIsNext,
        } = this.props;

        if (!squares.length) {
            return false;
        }

        const winner = calculateWinner(squares, this.cntRow);
  
        let status;
        if (winner) {
            status = "Winner: " + winner;
        } else {
            status = "Next player: " + (xIsNext ? TOE : ZERO);
        }
  
        return (
            <div 
                className="game"
            >
                <div className="game-info">
                    <div>{status}</div>
                </div>
                <Board
                    cntCell={this.cntRow}
                    squares={squares}
                    onClick={i => this.handleClick(i)}
                />
            </div>
        );
    }
}

export default WithGame()(Game);
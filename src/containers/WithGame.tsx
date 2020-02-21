
import * as React from "react";
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import {
    SquaresType,
    StepNumberType,
    XIsNextType,
} from 'models/GameModel';
import {
    makeSelectSquares,
    makeSelectStepNumber,
    makeSelectXIsNext,
} from 'selectors';
import {
    ISetMoveGameAction,
    setMoveGameAction,
} from 'actions/GameAction';
import { IState } from 'store';

type StateProps = {
    squares: SquaresType,
    stepNumber: StepNumberType,
    xIsNext: XIsNextType,
}

type DispatchProps = {
    setMoveGameAction: ISetMoveGameAction,
}

export type GameProps = StateProps & DispatchProps;

const WithGame = () => (WrappedComponent: React.ComponentType<any>) => {
    class GameWrapper extends React.PureComponent<GameProps, any> {
        render() {
            return (
                <WrappedComponent {...this.props} />
            );
        }
    }

    const mapStateToProps = createStructuredSelector<IState, StateProps>({
        squares: makeSelectSquares(),
        stepNumber: makeSelectStepNumber(),
        xIsNext: makeSelectXIsNext(),
    });

    const mapDispatchToProps = (dispatch: Dispatch) => ({
        setMoveGameAction: (
            squares: SquaresType,
            stepNumber: StepNumberType,
            xIsNext: XIsNextType,
        ) => dispatch(setMoveGameAction(
            squares,
            stepNumber,
            xIsNext,
        )),
    });

    const connector = connect(
        mapStateToProps,
        mapDispatchToProps,
    );
    return connector(GameWrapper);
};

export default WithGame;
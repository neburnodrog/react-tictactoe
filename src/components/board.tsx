import * as React from "react";
import { Component } from "react";
import Square from "./square";
import { calculateWinner } from './game';

export interface BoardProps {}

export interface BoardState {
  squares: Array<null|string>
  xIsNext: boolean;
  winner: (string|null);
}

class Board extends Component<BoardProps, BoardState> {
  state: BoardState = {
    squares: Array(9).fill(null),
    xIsNext: true,
    winner: null,
  }

  handleClick(i: number) {
    const squares = [...this.state.squares];
    if (calculateWinner(squares) || squares[i]) {
      return;
    }

    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext,
    });
  }

  renderSquare(i: number) {
    return (
        <Square 
            value={this.state.squares[i]}
            onClick={() => this.handleClick(i)}
        />
    );
  }

  render() {
    const winner = calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = 'Winner: ' + winner; 
    } else {
      status = "Next player: " + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <>
        <div className="status">{status}</div>
        <div className="board">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}

          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}

          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
          
        </div>
      </>
    );
  }
}

export default Board;

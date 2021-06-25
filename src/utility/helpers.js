import {winningCombination} from './staticValues'

const helpers = {
    checkIfWon: (board,turn) => {
        return winningCombination.some(combination => {
            return combination.every(index => {
                const y = Math.floor(index / 3);
                const x = Math.floor(index % 3);
                return board[x][y] === turn;
            })
        })
    },
    checkIfDraw: (board) => {
       return  board.every( row => {
            return row.every( cell => cell > 0)
        })
    },
}

export default helpers;
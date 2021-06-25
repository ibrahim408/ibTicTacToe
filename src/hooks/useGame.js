import { useEffect, useState } from 'react';
import {Alert} from 'react-native'
import {winningCombination, initialBoardState} from '../utility/staticValues'
import helpers from '../utility/helpers'

export const useGame  = ()=> {
    const [turn,setTurn] = useState('letter-x');
    const [board, setBoard] = useState(JSON.parse(JSON.stringify(initialBoardState)));
    const [gameState,setGameState] = useState('playing')

    useEffect(() => {
        const previousTurnValue = turn === 'letter-x' ? 2 : 1;
        const checkIfWon = helpers.checkIfWon(board,previousTurnValue);
        const checkIfDraw = helpers.checkIfDraw(board);

        if (checkIfWon) setGameState('winner');   
        if (!checkIfWon && checkIfDraw) setGameState('draw');
    }, [board]);

    useEffect(() => {
        if (gameState === 'draw'){
            alert('Result Is A Draw')
        } if (gameState === 'winner'){
            if (turn === 'letter-x'){
                alert('O WON')
            } else {
                alert('X WON')
            }
        }
    },[gameState])

    const onPressCell = (row,cell,value) => {
        if (value === 0){
          const updatedBoard = JSON.parse(JSON.stringify(board));
          updatedBoard[row][cell] = turn === 'letter-x' ? 1 : 2;
    
          if (turn === 'letter-x'){
            setBoard(updatedBoard);
            setTurn('letter-o');
          } else {
            setBoard(updatedBoard);
            setTurn('letter-x');
          }
        }
    }

    const onPressRestart = () => {
        setBoard(JSON.parse(JSON.stringify(initialBoardState)))
    }

    const handleRestart = () => {
        setGameState('playing');
        onPressRestart();
    }

    const alert = (text) => {
        Alert.alert(
            "Game Over",
            text,
            [
              {
                text: "Restart",
                onPress: () => handleRestart(),
              },
            ]
          );
    }

    
    console.log('gameState: ',gameState);
    return {
        board, 
        gameState,
        setGameState,
        onPressCell, 
        onPressRestart
    }
}

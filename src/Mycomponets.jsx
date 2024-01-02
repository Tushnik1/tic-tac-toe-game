import React from "react";
import Square from "./squarecompo";
import { useState } from "react";


const Container = ()=>{
    const [state,setState] = useState(Array(9).fill(null))
    const [isXtrue,setIsXtrue] = useState(true)

    const checkWinner = ()=>{
        const winLogic = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6],
        ]
        for(let logic of winLogic){
            const [a,b,c] = logic
            if(state[a]===state[b] && state[a]===state[c]&& state[a]!==null){
                return state[a]
            }
        }
        return false
    }

    const isWinner = checkWinner()

    const handleClick = (index)=>{
        const copyState = [...state];
        if(state[index]!==null){
            return
        }
        copyState[index] = (isXtrue?"X":"O");
        setState(copyState);
        setIsXtrue(!isXtrue);
    }

    const handleReset = ()=>{
        setState(Array(9).fill(null))
    }

    return (
        <div className="container">
        {isWinner?
        (<>
            <div>Player {isWinner} won</div>
            <button onClick={handleReset}>Play Again</button>
        </>
        ):
            (<>
            <div className="row">
                <Square onclick={()=>handleClick(0)} value={state[0]}/>
                <Square onclick={()=>handleClick(1)} value={state[1]}/>
                <Square onclick={()=>handleClick(2)} value={state[2]}/>
            </div>
            <div className="row">
                <Square onclick={()=>handleClick(3)} value={state[3]}/>
                <Square onclick={()=>handleClick(4)} value={state[4]}/>
                <Square onclick={()=>handleClick(5)} value={state[5]}/>
            </div>
            <div className="row">
                <Square onclick={()=>handleClick(6)} value={state[6]}/>
                <Square onclick={()=>handleClick(7)} value={state[7]}/>
                <Square onclick={()=>handleClick(8)} value={state[8]}/>
            </div>
            <button onclick={handleReset}>Reset</button>
            </>)
        }
        </div>

        
    )
}

export default Container
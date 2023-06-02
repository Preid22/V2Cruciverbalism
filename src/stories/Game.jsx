import React, { useState, useEffect } from 'react';
import Cell from './Cell';

function Game ( /*..props*/ ) {

    const [gameData, setGameData] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [focusCell, setFocusCell] = useState({});

    useEffect(() => {
        const date = '1977-02-02';
        fetch(`/creategame?date=${date}`).then((response) => {
            if(response.status === 200){
                response.json().then(({ data }) => {
                    setGameData(data);
                    setIsLoading(false);
                })
            }
        })
    }, [])

    return (
        <div>
            <h2>Boo York Times</h2>
            {!isLoading && (
                <Cell />
            )}
        </div>
    );
}

export default Game;


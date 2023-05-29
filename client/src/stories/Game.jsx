import React, { useState, useEffect } from 'react';
import Cell from './Cell';

function Game ( /*..props*/ ) {

    const [gameData, setGameData] = useState({});
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const date = '1977-02-02';
        fetch(`/creategame?date=${date}`).then((data) => {
            if(data.status === 200){
                data.json().then(({ data }) => {
                    setGameData(data);
                    setIsLoading(false);
                })
            }
        })
    }, [])

    return (
        <div>
            <h2>Boo York Times</h2>
            {! isLoading && (
                <Cell />
            )}
        </div>
    );
}

export default Game;


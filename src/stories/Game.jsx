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
                })
            }
        })
    }, [])

    return (
        <div>
            <h2>Boo York Times</h2>
            {!isLoading && (
               <Grid
                cells = {gameData.cells} />
            )}
        </div>
    );
}

export default Game;

/**
 * On line 12 the fetch request is made to the server with the /creategame endpoint.
 * If the server recieves a valid request (has a valid date) it will respond with the relevant
 crossword data. The res.json() method ensures that the response data object is sent as
 a JSON string. Within that object, the data property is the returned puzzleObj from the
 getCrosswordData function. 
 * If the response status is good, response.json() is called to parse the JSON string and
 the 'data' property is destructured from the response object. That is then passed to 
 setGameData to update the gameData state. 
 * The gameData variable now contains the puzzleObj from the server.
 */
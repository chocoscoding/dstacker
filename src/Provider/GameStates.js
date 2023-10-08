import { createContext, useContext, useEffect, useRef, useState } from 'react';

const GameStates = createContext({});

export const GameStatesProvider = ({ children }) => {
    const [stack, setStack] = useState([]);
    const [score, setScore] = useState([]);
    const speed = useRef(0.004);
    const [overhangs, setOverhangs] = useState([]);
    const [lastTime, setLastTime] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [autoPilot, setAutoPilot] = useState({});
    const [camera, setCamera] = useState({});
    const [world, setWorld] = useState({});
    const [scene, setScene] = useState({});


    useEffect(() => {
        if (score === 2) {
            console.log(score);
            speed.current = 0.009;
        }
        if (score === 19) {
            speed.current = 0.007;
        }
        if (score === 29) {
            speed.current = 0.008;
        }
        if (score === 39) {
            speed.current = 0.009;
        }
    }, [score]);
    const contextValue = {
        stack,
        setStack,
        score,
        setScore,
        speed: speed.current,
        lastTime,
        setLastTime,
        overhangs,
        setOverhangs,
        gameOver,
        setGameOver,
        world,
        setWorld,
        camera,
        setCamera,
        scene,
        setScene,
        autoPilot,
        setAutoPilot
    };

    return (
        <GameStates.Provider
            value={contextValue}
        >
            {children}
        </GameStates.Provider>
    );
};


export const useGameState = () => {
    const context = useContext(GameStates);
    if (!context) {
        throw new Error('GameStates must be used within a MyContextProvider');
    }
    return context;
};
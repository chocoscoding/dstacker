import { createContext, useContext, useState } from 'react';

const GameStates = createContext({});

export const GameStatesProvider = ({ children }) => {
    const [stack, setStack] = useState([]);
    const [score, setScore] = useState([]);
    const [overhangs, setOverhangs] = useState([]);
    const [lastTime, setLastTime] = useState([]);
    const [gameOver, setGameOver] = useState(false);
    const [autoPilot, setAutoPilot] = useState({});
    const [camera, setCamera] = useState({});
    const [world, setWorld] = useState({});
    const [scene, setScene] = useState({});

    const contextValue = {
        stack,
        setStack,
        score,
        setScore,
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
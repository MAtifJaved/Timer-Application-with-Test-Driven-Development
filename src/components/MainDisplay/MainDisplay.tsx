import React, { useState, useEffect } from 'react';
import './MainDisplay.css';
import CalculateTime from '../Calculate/CalculateTime';
import Controls from '../Controllers/Controls';

function MainDisplay(){

    const [timeInSeconds,setTimeInSeconds] = useState<number>(0);
    const [timerArray, setTimerArray] = useState<(number | string)[]>([]);
    
    useEffect(()=>{
        let timerArray: (number | string)[] = CalculateTime(timeInSeconds);
        setTimerArray(timerArray);
    },[timeInSeconds]);
    
    return (
        <div>
        <div className="time-container">
            <p className="timer-text">{timerArray[0]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[1]}</p>
            <span>:</span>
            <p className="timer-text">{timerArray[2]}</p>
        </div>  
        <Controls setTimeInSeconds = {setTimeInSeconds} />
        </div>
    );

}

export default MainDisplay;
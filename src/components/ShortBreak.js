import { useEffect, useState } from 'react';
import '../App.css';

const ShortBreak = () => {
    const [shorttime, setshorttime] = useState(30 * 10);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive && shorttime > 0 )
        {
            const interval = setInterval(() => {
                setshorttime((shorttime) => shorttime-1)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [shorttime, isActive]);

    const getTime = (shorttime) => {
        const min = Math.floor(shorttime/60);
        const sec = shorttime % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }
    const handlePause = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <div className="App">
                <h1>Short Break</h1>
                <h1>{getTime(shorttime)}</h1>
                <button type='button' onClick={handlePause}>{isActive ? "Pause" : "Start"}</button>
            </div>
        </>
    );
}

export default ShortBreak;
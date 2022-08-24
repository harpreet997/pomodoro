import { useEffect, useState } from 'react';
import '../App.css';

const LongBreak = () => {
    const [longtime, setlongtime] = useState(360 * 10);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        if(isActive && longtime > 0 )
        {
            const interval = setInterval(() => {
                setlongtime((longtime) => longtime-1)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [longtime, isActive]);

    const getTime = (longtime) => {
        const min = Math.floor(longtime/60);
        const sec = longtime % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }
    const handlePause = () => {
        setIsActive(!isActive);
    }
    return (
        <>
            <div className="App">
                <h1>Long Break</h1>
                <h1>{getTime(longtime)}</h1>
                <button type='button' onClick={handlePause}>{isActive ? "Pause" : "Start"}</button>
            </div>
        </>
    );
}

export default LongBreak;
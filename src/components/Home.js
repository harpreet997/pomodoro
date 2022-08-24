import { useEffect, useState } from 'react';
import '../App.css';


const Home = () => {
    
    const [timer, setTimer] = useState(60 * 30);
    const [isActive, setIsActive] = useState(false);

    const [worktime, setWorktime] = useState();
    const [shortbreak, setShortbreak] = useState();
    const [longbreak, setLongbreak] = useState();
    
    useEffect(() => {
        if(isActive && timer > 0 )
        {
            const interval = setInterval(() => {
                setTimer((timer) => timer-1)
            }, 1000)

            return () => clearInterval(interval)
        }
    }, [timer, isActive]);

    const getTime = (timer) => {
        const min = Math.floor(timer/60);
        const sec = timer % 60;
        return `${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`
    }
    const handlePause = () => {
        setIsActive(!isActive);
    }

    

    const handleSubmit = (e) => {
        e.preventDefault();
        const data = {worktime, shortbreak, longbreak};
        console.log(data);
        console.log(data.worktime);
        setTimer(data.worktime);
        

    }
    return (
            <div className="App">
                <h1>Work Duration</h1>
                <h1>{getTime(timer)}</h1>
                <button type='button' onClick={handlePause}>{isActive ? "Pause" : "Start"}</button><br/>
                <button id='modal-button' type="button" className="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Set time</button>

                
  <div className="modal fade" id="myModal" role="dialog">
    <div className="modal-dialog">
    
     
      <div className="modal-content">
        <div className="modal-header">
          <button type="button" className="close" data-dismiss="modal">&times;</button>
          <h4 className="modal-title">Set Time</h4>
        </div>
        <div className="modal-body">
        <form onSubmit={handleSubmit}>
        <label>Work Time</label><br/>
          <input type="number" placeholder='Enter work time' value={worktime} onChange={(e) => setWorktime(e.target.value)} required/><br/>
          <label>Short Break</label><br/>
          <input type="number" placeholder='Enter short break' value={shortbreak} onChange={(e) => setShortbreak(e.target.value)} required/><br/>
          <label>Long Break</label><br/>
          <input type="number" placeholder='Enter long break' value={longbreak} onChange={(e) => setLongbreak(e.target.value)} required/><br/>
          <button id='button-submit' type='submit' >Submit</button>
          </form>
        </div>
        <div className="modal-footer">
          <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        </div>
      </div>
      
    </div>
  </div>
            </div>
        
    );
}

export default Home;
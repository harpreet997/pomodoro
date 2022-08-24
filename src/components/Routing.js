import { Route, Routes } from "react-router-dom";
import History from "./History";
import Home from "./Home";
import LongBreak from "./LongBreak";
import ShortBreak from "./ShortBreak";

const Routing = () => {
    return ( 
        <>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/shortBreak" element={<ShortBreak/>}/>
            <Route path="/longBreak" element={<LongBreak/>}/>
            <Route path="/history" element={<History/>}/>
        </Routes>
        </>
     );
}
 
export default Routing;

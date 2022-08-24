import '../App.css';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <ul>
                <li><a href="/">Work</a></li>
                <li><a href="/shortBreak">Short Break</a></li>
                <li><a href="/longBreak">Long Break</a></li>
                <li><a href="/history">History</a></li>
            </ul>
        </div>
        
     );
}
 
export default Navbar;

import React from "react"
import './navigationBar.css';
import {
    Link
} from "react-router-dom";



const NavigationBar = ({ isLoggedIn, setIsLoggedIn }) => {

    const handleSignOut = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }
    return isLoggedIn ? (<div className="navigationBar">
        <Link to="/"><h2 className="navigationBar">TutorSync</h2></Link>
        <Link to="/manageTutorTimes"><h2 className="navigationBar">Manage Tutor Times</h2></Link>
        <button className="navigationBar" onClick={handleSignOut}>Log Out</button>
    </div>) : (<div className="navigationBar">
        <Link to="/"><h2 className="navigationBar">TutorSync</h2></Link>
    </div>)
}

export default NavigationBar;
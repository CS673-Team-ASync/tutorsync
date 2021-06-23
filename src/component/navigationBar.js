import React from "react"
import './navigationBar.css';
import {
    Link
} from "react-router-dom";



const NavigationBar = () => {
    return <div className="navigationBar">
        <Link to="/"><h2 className="navigationBar">TutorSync</h2></Link>
    </div>
}

export default NavigationBar;
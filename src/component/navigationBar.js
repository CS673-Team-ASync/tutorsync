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

    return isLoggedIn ? (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <a class="navbar-brand"><Link to="/">TutorSync</Link></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <a class="nav-link" ><Link to="/tutor">Manage Tutor Times</Link><span class="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" ><Link to="/manageMeetings">Manage Meetings</Link></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link">
                            <Link to="/meeting">Go To Meeting</Link>
                        </a>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button type="button" onClick={handleSignOut} class="form-control mr-sm-2">Sign Out</button>
                </form>
            </div>
        </nav>
    ) : (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TutorSync</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>)
}

export default NavigationBar;
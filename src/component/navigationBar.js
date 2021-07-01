import React from "react"
import {
    Link
} from "react-router-dom";



const NavigationBar = ({ isLoggedIn, setIsLoggedIn }) => {

    const handleSignOut = () => {
        localStorage.removeItem('token')
        setIsLoggedIn(false)
    }

    return isLoggedIn ? (
        <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
            <Link class="navbar-brand" to="/">TutorSync</Link>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item active">
                        <Link class="nav-link" to="/tutor">Manage Tutor Times</Link><span class="sr-only">(current)</span>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/manageMeetings">Manage Meetings</Link>
                    </li>
                    <li class="nav-item active">
                        <Link class="nav-link" to="/meeting">Go To Meeting</Link>
                    </li>
                </ul>
                <form class="form-inline my-2 my-lg-0">
                    <button type="button" onClick={handleSignOut} class="form-control mr-sm-2">Sign Out</button>
                </form>
            </div>
        </nav>
    ) : (<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">TutorSync</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>)
}

export default NavigationBar;
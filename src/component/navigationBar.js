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
                    {/* <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
                    <button type="button" onClick={handleSignOut} class="form-control mr-sm-2">Sign Out</button>
                </form>
            </div>
        </nav>
        // <nav class="navbar navbar-expand-lg navbar-light bg-light">
        //     <Link to="/"><h2 className="navigationBar">TutorSync</h2></Link>
        //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
        //         <ul class="navbar-nav mr-auto">
        //             <li class="nav-item active">
        //                 <Link to="/tutor"><h2 className="navigationBar">Manage Tutor Times</h2></Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link to="/manageMeetings"><h2 className="navigationBar">Manage Meetings</h2></Link>
        //             </li>
        //             <li class="nav-item">
        //                 <Link to="/meeting"><h2 className="navigationBar">Go To Meeting</h2></Link>
        //             </li>
        //             {/* <form class="form-inline my-2 my-lg-0"> */}
        //             <li class="nav-item">
        //                 <button type="button" onClick={handleSignOut} class="btn btn-danger">Sign Out</button>
        //             </li>
        //             {/* </form> */}
        //         </ul>
        //     </div>
        // </nav>
    ) : (<nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">TutorSync</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
    </nav>)
}

export default NavigationBar;
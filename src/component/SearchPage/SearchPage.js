import React from "react";
import "./SearchPage.css";

const SearchPage = () => {

    return <div>
            <div className = "search1">
                <h1>
                Search for Tutors
                </h1>
                <div className ="search3">
                Not available right now
                </div>

                
                <div className = "search2">
                    <p>
                    <label for="tutor-search">Search for Tutor</label>
                    </p>
                    <input type= "text" id="name" name="name" aria-label="Search through site content"></input>
      
                    <p>
                    <label for="subject-search">Search for Subject</label>
                    </p>
                    <input type= "text" id="subject" name="subject" aria-label="Search through site content"></input>

                    <p>
                    Availability (days)
                    </p>
                    
                    <li className ="search4">1 - 7</li>
                    <li className ="search4">1 - 14</li>
                    <li className ="search4">1 - 28</li>
                    
                    
                </div>
            </div>
    
    </div>
}

export default SearchPage;
import React, { useState } from "react";
import "./SearchPage.css";


const SearchPage = () => {

    const [subjectInput, setSubjectInput] = useState('')
    const [tutors, setTutors] = useState('')

    const handleSearchSubmit = () => {
        fetch(`http://localhost:9000/subjects/list?id=${localStorage.token}&subject=${subjectInput}`).then((response) => response.json()).then(response => {
            setTutors(response.data.subjects);
        }).then(response => console.log("This is the search input response: ", response))
    }

    return <div>
        <div className="search1">
            <h1>
                Search for Tutors
                </h1>
            <div className="search3">
                Not available right now
                </div>


            <div className="search2">
                <p>
                    <label htmlFor="subject-search">Search for Subject</label>
                </p>
                <input type="text" id="subject" name="subject" value={subjectInput} onChange={e => setSubjectInput(e.target.value)} aria-label="Search through site content"></input>
                <button onClick={handleSearchSubmit}>Search For Tutors</button>
                <p>
                    Availability (days)
                    </p>

                <li className="search4">1 - 7</li>
                <li className="search4">1 - 14</li>
                <li className="search4">1 - 28</li>


            </div>
        </div>

    </div>
}

export default SearchPage;
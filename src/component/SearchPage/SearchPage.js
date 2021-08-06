import React, { useState } from "react";
import "./SearchPage.css";
import { BASE_URL } from '../../constants';
import ModalWindow from '../scheduleMeetingModal/ModalWindow'

const SearchPage = () => {

    const [subjectInput, setSubjectInput] = useState('')
    const [tutors, setTutors] = useState([])
    const [showModal, setShowModal] = useState(false)
    const hideModal = () => {
        setShowModal(false)
    }
    const [currentSubjectDescription, setCurrentSubjectDescription] = useState('')
    const [currentTutorId, setCurrentTutorId] = useState('')


    /** studentId, tutorId, subjectTitle,
        subjectDescription, tutorName
*/
    const handleSearchSubmit = () => {
        fetch(`${BASE_URL}subjects/list?id=${localStorage.token}&subject=${subjectInput}`).then((response) => response.json()).then(response => {
            console.log(response.data.subjects)
            setTutors(response.data.subjects);
        })
    }

    return <div>
        <div className="search1">
            <h1>
                Search for Tutors
                </h1>
            <div className="search3">
                {tutors.map(tutor => {
                    return (
                        <div key={tutor._id}>
                            {tutor.subject}<br />
                            {tutor.description}<br />
                            {`${tutor.user.firstName} ${tutor.user.lastName}`}<br />
                            <a onClick={() => {
                                setShowModal(true)
                                setCurrentSubjectDescription(tutor.description)
                                setCurrentTutorId(tutor.user._id)
                            }}>Check Availability</a>
                        </div>
                    )
                })}
            </div>

            {<ModalWindow modalShow={showModal} hideModal={hideModal} currentSubjectDescription={currentSubjectDescription} tutorId={currentTutorId} />}
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
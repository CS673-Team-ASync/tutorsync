import React, { useState } from "react";
import "./SearchPage.css";
import { BASE_URL } from '../../constants';
import ModalWindow from '../scheduleMeetingModal/ModalWindow'

const SearchPage = () => {

    const [subjectInput, setSubjectInput] = useState('')
    const [tutors, setTutors] = useState([])
    const [showModal, setShowModal] = useState(false)
    // setting the current parameters to send to the schedule meeting window
    const [currentSubjectDescription, setCurrentSubjectDescription] = useState('')
    const [currentTutorId, setCurrentTutorId] = useState('')
    const [currentSubjectTitle, setCurrentSubjectTitle] = useState('')
    const [currentTutorName, setCurrentTutorName] = useState('')

    // custom logic passed down to close modal
    const hideModal = () => {
        setShowModal(false)
    }

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
                                setCurrentSubjectTitle(tutor.subject)
                                setCurrentTutorName(`${tutor.user.firstName} ${tutor.user.lastName}`)
                            }}>Check Availability</a>
                        </div>
                    )
                })}
            </div>

            {<ModalWindow
                modalShow={showModal}
                hideModal={hideModal}
                subjectDescription={currentSubjectDescription}
                tutorId={currentTutorId}
                subjectTitle={currentSubjectTitle}
                tutorName={currentTutorName}
                studentId={localStorage.token}
            />}
            <div className="search2">
                <p>
                    <label htmlFor="subject-search">Search for Subject</label>
                </p>
                <input type="text" id="subject" name="subject" value={subjectInput} onChange={e => setSubjectInput(e.target.value)} aria-label="Search through site content"></input>
                <button onClick={handleSearchSubmit}>Search For Tutors</button>
                <p>
                    Availability (days)
                    </p>

                {/* TODO: Add Filtering By Days In Advance - Need to filter values */}
                <li className="search4">1 - 7</li>
                <li className="search4">1 - 14</li>
                <li className="search4">1 - 28</li>


            </div>
        </div>

    </div>
}

export default SearchPage;
import React, { useEffect, useState } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './ManageMeetings.css';

const ManageMeetings = () => {

    const [pastMeetings, setPastMeetings] = useState([]);
    // const [upcomingMeetings, setUpcomingMeetings] = useState([]); // TODO - implement upcoming meetings

    useEffect(() => {
        fetch(`http://localhost:9000/meetings/list?id=${localStorage.token}`).then((response) => response.json()).then(response => {
            setPastMeetings(response.data.pastMeetings);
            // setUpcomingMeetings(response.data.upcomingMeetings); // TODO - implement upcoming meetings
        })
    }, []);

    <h1>ManageMeetings</h1>

    return <div className="container">

        <Container>

            <Row>
                <h1><b>Manage Meetings</b></h1>
            </Row>

            <br></br>

            <Row>
                <Col>
                    <ul className="nav nav-tabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#">Student</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Tutor</a>
                        </li>
                    </ul>
                </Col>
                <Col></Col>
                <Col></Col>
                <Col xs={6}><Button variant="primary">Search + Schedule Meeting</Button>{' '}</Col>
            </Row>

            <br></br>

            <Row>
                <Col>
                    <div className="card">
                        <h5 className="card-header"><strong>Completed Meetings</strong></h5>
                        <div className="card-body">
                            {pastMeetings.map(userMeeting => {
                                return (
                                    <div key={userMeeting.meeting.title}>
                                        <h5 className="card-title">{userMeeting.meeting.title}</h5>
                                        <p className="card-text">{`${userMeeting.participant.firstName}  ${userMeeting.participant.lastName}`}</p>
                                        <a href="#" className="btn btn-primary">Download Media</a>
                                    </div>)

                            })}
                        </div>
                    </div>
                </Col>

                <Col>
                    <div className="card">
                        <h5 className="card-header"><strong>Scheduled Meetings</strong></h5>
                        <div className="card-body">
                            <h5 className="card-title">Grade 12 Geometry</h5>
                            <p className="card-text">Prof. Czik</p>
                            <a href="#" className="btn btn-primary">Join Meeting</a>
                   &nbsp;&nbsp;&nbsp;
                   <a href="#" className="btn btn-danger">Cancel</a>
                        </div>
                    </div>
                </Col>
            </Row>

        </Container>

    </div>

}

export default ManageMeetings